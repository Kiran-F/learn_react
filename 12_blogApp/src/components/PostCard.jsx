// import React from 'react'
// import { Link } from 'react-router-dom'
// import appwriteService from '../appwrite/config'

// function PostCard({$id, title, featuredImage}) { //we'll take the props from appwrite
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2 className='text-xl font-bold'>
//                 {title}
//             </h2>
//         </div>
//     </Link>
//   )
// }

// export default PostCard





import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function PostCard({ post }) {
    if (!post) return null

    // console.log("FEATURED IMAGE ID:", post.featuredImage)
    // console.log(appwriteService.getFilePreview(post.featuredImage))
    return (
        <Link to={`/post/${post.$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {post.featuredImage && (
                        <img
                            // src={appwriteService.getFilePreview(post.featuredImage)}
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className='rounded-xl'
                        />
                    )}
                </div>

                <h2 className='text-xl font-bold'>
                    {post.title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard