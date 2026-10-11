// import  { useEffect, useState } from 'react'
// import { storage } from './firebase/page';
// import { v4} from 'uuid'
// import {ref, uploadBytes, listAll,getDownloadURL} from 'firebase/storage';
// export default function UploadingFile() {
//     const [imageList, setImageList]= useState([]);
//     const [imageUpload, setImageUpload] = useState(null) = useState(null);

//     const imageListRef = ref(storage, 'images/');

//     const uploadImage= ()=>{
//         if(imageUpload === null) return;
//         const imageRef = ref(storage, `images/${imageUpload.name =  v4()}`);

// uploadBytes(imageRef, imageUpload).then((snapshot) => {
//   getDownloadURL(snapshot.ref).then((url) => {

//       setImageList((prev)=>[...prev, url])
//   })
// });

//     }

//   useEffect(() => {
//      listAll(imageListRef).then((response)=>{
//         console.log(response);
//         response.item.forEach((item) => {
//          getDownloadURL(item).then((url) => {
//            setImageList((prev)=> [...prev, url])
//          })
//         })
//      })
//   })
//     return (
//     <div>
//         <div className="
//         ">
//             <input type="file" name=""
//         onChange={(e) => setImageUpload(e.target.files[0])}
//         id="" />
//        <button onClick={uploadImage}>upload Image</button>
//         </div>
//         {imageList.map((url)=>(
//             <img src={url} alt="" />
//         ))}
//     </div>
//   )
// }

import { useEffect, useState } from "react";
import { storage } from "../firebase/page";   
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

export default function UploadingFile() {
  const [imageList, setImageList] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);

  const imageListRef = ref(storage, "images/");

  // Function to upload image
  const uploadImage = () => {
    if (imageUpload === null) return;
    const uniqueFileName = `${imageUpload.name}-${uuidv4()}`;
    const imageRef = ref(storage, `images/${uniqueFileName}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  // Fetch existing images on component mount
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      <div>
        {imageList.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Uploaded ${index}`}
            style={{ width: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}
