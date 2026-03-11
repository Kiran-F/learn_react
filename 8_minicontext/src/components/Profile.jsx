import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const {user} = useContext(UserContext);
  
  if (!user) return <div>Please login</div>

  if (user.username == '' || user.password == '') return <div>Please enter the credentials</div>

  return <div>Welcome {user.username}</div>

}

export default Profile