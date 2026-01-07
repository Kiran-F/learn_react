import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
import App from './App.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "", 
//         element: <Home/>
//       }, 
//       {
//         path: "about", 
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


//OR  



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />} >
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
