import Addition from './Addition'
function App() {
  return (
    //  this is called returning a fragment otherwise it causes error if multiple elements are returned.
    <>
      <Addition />
      <h2>This text is basically from the app.jsx file...</h2>
    </>
  )
}

export default App