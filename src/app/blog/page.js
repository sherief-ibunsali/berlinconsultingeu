"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                console.log('PAGE: fetching posts');

                const response = await fetch('/api/posts', { // Use relative URL
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Handle HTTP errors
                if (!response.ok) {
                    throw new Error(`Error fetching posts: ${response.statusText}`);
                }

                const data = await response.json();
                console.log('PAGE: data', data);

                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
            {posts.length === 0 ? (
                <p>No blog posts found.</p>
            ) : (
                posts.map(post => (
                    <div key={post.id} className="mb-8 border-b pb-6">
                        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>

                        {/* Display image if available */}
                        {post.image_url && (
                            <Image
                                src={post.image_url.startsWith('/') ? post.image_url : `/uploads/${post.image_url}`} // Ensure correct image path
                                alt={post.title}
                                width={600} // Specify width and height for next/image
                                height={400}
                                className="w-full h-64 object-cover mb-4 rounded"
                            />
                        )}

                        <div
                            className="prose prose-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        <p className="text-gray-600 mt-4">Meta Description: {post.meta_description}</p>
                        <p className="text-gray-600">Meta Keywords: {post.meta_keywords}</p>
                    </div>
                ))
            )}
        </div>
    );
}