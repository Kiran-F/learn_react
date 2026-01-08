// import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, About, Contact, User, Github} from './components'
import Layout from './Layout.jsx'
import {githubInfoLoader} from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        path="github"
        element={<Github />}
        loader={githubInfoLoader}
        errorElement={<div>Oops! There was an error loading GitHub data.</div>}
      />
    </Route>
  )
);

function App() {
  return (
    <>
    <RouterProvider router={router} />;
    
      {/* This doesn't work for useLoaderData() hook, it only works with createBrowserRouter and RouterProvider
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:userid" element={<User />} />
            <Route 
            loader={githubInfoLoader}
            path="github" 
            element={<Github />} 
            errorElement= {<div>Oops! There was an error loading GitHub data.</div>}
            />
          </Route>
        </Routes>
      </Router> */}
    </>
  )
}

export default App