import Addition from './Addition'
function App() {
  const username = "Kiran Fatima";
  return (
    //  this is called returning a fragment otherwise it causes error if multiple elements are returned.
    <>
      <Addition />
      <h2>This text is basically from the app.jsx file... {username}</h2>
    </>
  )
}

export default App