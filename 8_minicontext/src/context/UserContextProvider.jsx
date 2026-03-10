import React from 'react'
import UserContext from './UserContext.js'

const UserContextProvider = ({childern}) => {
    const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={user, setUser}>
        {childern}    
    </UserContext.Provider>
)
}

export default UserContextProvider