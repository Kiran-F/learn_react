import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
        <h2>Here's context API.</h2>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
