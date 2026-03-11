import React from 'react';

const UserContext = React.createContext();

export default UserContext;


// first step is to create a context and export it. UserContext is a provider. 
// Wrap the content with UserContext.It will then act like a provider. 
// e.g: 
// <UserContext.Provider>
//     <Data />
//     <Login />
//     <Card />
// </UserContext.Provider>