import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';

export default function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');
    const [image, setImage] = useState(null); // For image upload
    const router = useRouter();

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('meta_description', metaDescription);
        formData.append('meta_keywords', metaKeywords);
        formData.append('image', image); // Append image

        const response = await fetch('/api/posts', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            router.push('/');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Meta Description"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Meta Keywords"
                    value={metaKeywords}
                    onChange={(e) => setMetaKeywords(e.target.value)}
                    className="w-full p-2 border rounded"
                />

                {/* Image Upload Input */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border rounded"
                />

                <Editor
                    apiKey="your_tinymce_api_key"
                    value={content}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: ['link image code'],
                        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | code',
                    }}
                    onEditorChange={(newValue) => setContent(newValue)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
}