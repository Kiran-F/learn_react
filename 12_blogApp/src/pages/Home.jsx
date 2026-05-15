import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config.js'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        if (authStatus) {
            setLoading(true)
            appwriteService.getPosts()
                .then((posts) => {
                    if (posts) {
                        setPosts(posts.documents)
                    }
                    setLoading(false)
                })
                .catch(() => setLoading(false))
        } else {
            setLoading(false)
        }
    }, [authStatus])

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-black"></div>
                    </div>
                    <p className="mt-4 text-black font-bold uppercase tracking-widest">Loading posts...</p>
                </Container>
            </div>
        )
    }

    if (!authStatus) {
        return (
            <div className="w-full py-15 text-center bg-[#FFB6C1] border-black shadow-[0_8px_0px_0px_rgba(0,0,0,1)]">
                <Container>
                    <div className="flex flex-col items-center justify-center p-12 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-3">
                            Welcome to the Blog
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b-4 border-black pb-4">
                            Join our community to read and share amazing stories.
                        </p>
                        <Link to="/login" className="px-8 py-4 bg-[#FFE800] border-4 border-black text-2xl font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                            Login to Read Posts
                        </Link>
                        <div className='mt-4'>
                            <b>If you want to use a demo account login with:</b>
                            <p>Email: abc@gmail.com</p>
                            <p>password: 12345678</p>
                        </div>

                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-20 mt-8 text-center">
                <Container>
                    <div className="flex flex-col items-center justify-center p-12 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
                        <h1 className="text-4xl font-black text-black uppercase mb-4">
                            No Posts Found
                        </h1>
                        <Link to="/add-post" className="px-6 py-3 bg-[#00E5FF] border-4 border-black text-xl font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                            Create First Post
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }

    //this part works when user is logged in
    return (
        <div className='w-full py-12'>
            <Container>
                <div className="mb-12 bg-[#00E5FF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-4xl md:text-5xl font-black uppercase text-black mb-4">
                        Welcome Back{userData ? `, ${userData.name}` : ''}!
                    </h1>
                    <p className="text-xl font-bold text-gray-800">
                        Dive into the latest stories, ideas, and experiences shared by our community. Discover new content below!
                    </p>
                </div>
                <div className='flex flex-wrap -m-3'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home