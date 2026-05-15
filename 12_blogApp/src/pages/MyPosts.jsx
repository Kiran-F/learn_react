import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function MyPosts() {

    const [posts, setPosts] = useState([])

    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        if (userData) {
            appwriteService.getPosts([
                Query.equal("userId", userData.$id)
            ])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        }

    }, [userData])

    return (
        <div className='w-full py-8'>
            <Container>

                <h1 className='text-3xl font-bold mb-6'>
                    My Posts
                </h1>

                <div className='flex flex-wrap -m-3'>

                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className='p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
                        >
                            <PostCard post={post} />
                        </div>
                    ))}

                </div>

            </Container>
        </div>
    )
}

export default MyPosts