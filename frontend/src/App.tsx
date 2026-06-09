import {Routes,Route} from "react-router-dom"

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Login/>}/>
      
      <Route path="/register" element={<register/>}/>
     </Routes>
    </>
  )
}

export default App
