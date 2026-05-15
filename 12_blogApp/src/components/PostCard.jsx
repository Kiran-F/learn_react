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
    return (
        <Link to={`/post/${post.$id}`}>
            <div className='w-full bg-[#FFE800] p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col h-full'>
                <div className='w-full mb-4 overflow-hidden border-4 border-black bg-white flex-grow aspect-video relative'>
                    {post.featuredImage && (
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    )}
                </div>

                <h2 className='text-1xl font-black text-black uppercase line-clamp-2'>
                    {post.title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard