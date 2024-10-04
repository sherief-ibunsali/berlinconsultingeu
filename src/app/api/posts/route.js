import formidable from 'formidable';
import fs from 'fs';
import path from 'path'; // for handling paths
import { query } from '../../lib/db';

export const config = {
    api: {
        bodyParser: false, // Disable Next.js default bodyParser so that we can use formidable
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const form = new formidable.IncomingForm();

        // Use absolute path for the upload directory
        const uploadDir = path.join(process.cwd(), 'public/uploads');
        form.uploadDir = uploadDir;
        form.keepExtensions = true;

        // Ensure that the upload directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).json({ error: 'Image upload failed' });
            }

            const { title, content, meta_description, meta_keywords } = fields;
            const imagePath = files.image ? `/uploads/${files.image.newFilename}` : null;

            try {
                const result = await query(
                    `INSERT INTO blog_posts (title, content, meta_description, meta_keywords, image_url) 
          VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                    [title, content, meta_description, meta_keywords, imagePath]
                );

                // Return the created blog post
                res.status(201).json(result.rows[0]);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Database error' });
            }
        });

    } else if (req.method === 'GET') {
        try {
            const result = await query(`SELECT * FROM blog_posts ORDER BY created_at DESC`);
            res.status(200).json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Database query failed' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}