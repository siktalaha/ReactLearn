// // import { collection, getDocs } from 'firebase/firestore'
// // import React from 'react'
// // import { db } from '../firebase-config'
// // import { useState ,useEffect } from 'react'
// // function Home() {
// //   const [postList,setPostList]=useState([])
// //   const collectionPostRef=collection(db,"posts")
// //   useEffect(() => {
// //     const getPosts= async ()=>{
// //       const data=await getDocs(collectionPostRef);
// //       setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
// //      } ;

// //      getPosts();
// //   })
  
// //   return (
// //     <div className="homePage">
// //       {postList.map((post)=>{
// //         return <div className='post'> {post.title}</div>      })}
// //     </div>
// //   )
// // }

// // export default Home
// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";

// function Home({ isAuth }) {
//   const [postLists, setPostList] = useState([]);
//   const postsCollectionRef = collection(db, "posts");

//   const deletePost = async (id) => {
//     const postDoc = doc(db, "posts", id);
//     await deleteDoc(postDoc);
//   };
//   useEffect(() => {
//     const getPosts = async () => {
//       const data = await getDocs(postsCollectionRef);
//       setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getPosts();
//   }, [deletePost]);

 
//   return (
//     <div className="homePage">
//       {postLists.map((post) => {
//         return (
//           <div className="post">
//             {/* <div className="postHeader">
//               <div className="title">
//                 <h1> {post.title}</h1>
//               </div>
//               <div className="deletePost">
//                 {isAuth && post.author.id === auth.currentUser.uid && (
//                   <button
//                     onClick={() => {
//                       deletePost(post.id);
//                     }}
//                   >
//                     {" "}
//                     &#128465;
//                   </button>
//                 )}
//               </div>
//             </div>
//             <div className="postTextContainer"> {post.postText} </div>
//             <h3>@{post.author.name}</h3> */}
//             <h1>{post.title}</h1>
//             <h3>{post.post}</h3>
          
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
 
  
  // const deletePost = async (id) => {
  //   const postDoc = doc(db, "posts", id);
  //   await deleteDoc(postDoc);
  // };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, );

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              
            </div>
            <div className="postTextContainer"> {post.post} </div>
            {/* <h3>@{post.author.name}</h3> */}
          </div>
        );
      })}
    </div>
    
  );
}

export default Home