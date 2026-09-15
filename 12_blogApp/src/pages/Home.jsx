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
            <div className="w-full py-12 bg-[#FFB6C1] border-b-4 border-black">
                <Container>
                    {/* Hero Section */}
                    <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1 bg-[#00E5FF] border-2 border-black font-black text-xs md:text-sm uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            Modern Fullstack Blogging Platform
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4 leading-none">
                            Welcome to the Blog
                        </h1>
                        <p className="text-lg md:text-xl font-bold text-gray-800 max-w-2xl mb-8 border-b-4 border-black pb-6">
                            A place to create, discover, and share thoughts with formatted articles, real-time media uploads, and full editing freedom.
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                            <Link to="/login" className="px-8 py-4 bg-[#FFE800] border-4 border-black text-xl md:text-2xl font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                Login to Read Posts
                            </Link>
                            <Link to="/signup" className="px-8 py-4 bg-[#FF90E8] border-4 border-black text-xl md:text-2xl font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                Create Free Account
                            </Link>
                        </div>

                        {/* Feature Highlights Grid */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t-4 border-black pt-8">
                            
                            {/* Feature 1: Custom Text Editor */}
                            <div className="p-5 bg-[#FFF9D2] border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl">✍️</span>
                                        <span className="text-[11px] font-black uppercase px-2 py-0.5 bg-[#00E5FF] border border-black">Built-in</span>
                                    </div>
                                    <h3 className="text-lg font-black text-black uppercase mb-2">Custom Text Editor</h3>
                                    <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                                        Features a built-in rich text editor — write bold headings, colored text, highlight notes, blockquotes, lists, links, and code blocks with <strong>zero external API keys</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2: Rich Media & Appwrite */}
                            <div className="p-5 bg-[#E8F5E9] border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl">⚡</span>
                                        <span className="text-[11px] font-black uppercase px-2 py-0.5 bg-[#FFE800] border border-black">Appwrite</span>
                                    </div>
                                    <h3 className="text-lg font-black text-black uppercase mb-2">Secure Backend</h3>
                                    <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                                        Powered by Appwrite for authentication, document management, and cloud image bucket storage with instant updates.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3: Neo-Brutalist UI */}
                            <div className="p-5 bg-[#EDE7F6] border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl">🎨</span>
                                        <span className="text-[11px] font-black uppercase px-2 py-0.5 bg-[#FF90E8] border border-black">Design</span>
                                    </div>
                                    <h3 className="text-lg font-black text-black uppercase mb-2">Bold Aesthetic</h3>
                                    <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                                        High-contrast neo-brutalist theme designed with vibrant colors, clear typography, and responsive reading layouts.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* How It Works Section */}
                        <div className="w-full mt-8 pt-8 border-t-4 border-black text-left">
                            <h3 className="text-xl font-black uppercase text-black mb-4 text-center md:text-left">
                                How It Works
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-bold text-gray-800">
                                <div className="p-4 bg-slate-50 border-2 border-black flex items-start gap-3">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-black text-xs">1</span>
                                    <div>
                                        <p className="font-black text-black">Sign In / Demo</p>
                                        <p className="text-xs text-gray-600 font-semibold mt-0.5">Log in with your credentials or try our demo account.</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 border-2 border-black flex items-start gap-3">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-black text-xs">2</span>
                                    <div>
                                        <p className="font-black text-black">Explore Feed</p>
                                        <p className="text-xs text-gray-600 font-semibold mt-0.5">Read engaging articles and stories shared by creators.</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 border-2 border-black flex items-start gap-3">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-black text-xs">3</span>
                                    <div>
                                        <p className="font-black text-black">Write & Publish</p>
                                        <p className="text-xs text-gray-600 font-semibold mt-0.5">Use the self-made editor to craft and publish posts.</p>
                                    </div>
                                </div>
                            </div>
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