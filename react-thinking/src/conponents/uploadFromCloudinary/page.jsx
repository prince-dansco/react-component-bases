// import { useState } from 'react';

// export default function CloudinaryUpload() {
//     const [loading, setLoading] = useState(false); // Boolean for loading state

//     const handleFileInput = async (event) => {
//         const file = event.target.files[0]; // Correct variable name
//         console.log(file); // Log the single file

//         if (!file) return;

//         setLoading(true); // Set loading to true while uploading

//         const data = new FormData();
//         data.append('file', file);
//         data.append('upload_preset', 'testing_cloudinary_ability'); // Added quotes for the string
//         data.append('cloud_name', 'dotlqehtk');

//         try {
//             const res = await fetch(
//                 'https://api.cloudinary.com/v1_1/dotlqehtk/image/upload',
//                 {
//                     method: 'POST',
//                     body: data,
//                 }
//             );

//             const uploadImageURL = await res.json();
//             console.log(uploadImageURL.url); // Log the response
//         } catch (error) {
//             console.error('Error uploading file:', error);
//         } finally {
//             setLoading(false); // Reset loading state
//         }
//     };

//     const handleUpload = () => {
//         // This function is unused but left as a placeholder
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileInput} />
//             <button onClick={handleUpload} disabled={loading}>
//                 {loading ? 'Uploading...' : 'Upload'}
//             </button>
//         </div>
//     );
// }

// import { useState } from 'react';

// export default function CloudinaryUpload() {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [uploadedURL, setUploadedURL] = useState('');

//     const handleFileInput = async (event) => {
//         const file = event.target.files[0];

//         if (!file) {
//             console.warn('No file selected.');
//             return;
//         }

//         setLoading(true);
//         setError(null);

//         const data = new FormData();
//         data.append('file', file);
//         data.append('upload_preset', 'testing_cloudinary_ability');
//         data.append('cloud_name', 'dotlqehtk');

//         try {
//             const res = await fetch(
//                 'https://api.cloudinary.com/v1_1/dotlqehtk/image/upload',
//                 {
//                     method: 'POST',
//                     body: data,
//                 }
//             );

//             if (!res.ok) {
//                 throw new Error(`Failed to upload: ${res.statusText}`);
//             }

//             const response = await res.json();
//             setUploadedURL(response.secure_url); // Secure URL of the uploaded file
//             console.log('Uploaded Image URL:', response.secure_url);
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             setError('Failed to upload file. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileInput} />
//             <button disabled={loading}>
//                 {loading ? 'Uploading...' : 'Upload'}
//             </button>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {uploadedURL && (
//                 <p>
//                     Uploaded Image:{' '}
//                     <a href={uploadedURL} target="_blank" rel="noopener noreferrer">
//                         View Image
//                     </a>
//                 </p>
//             )}
//         </div>
//     );
// }

// this is for the pdf link


