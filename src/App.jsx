import { Route, Routes } from "react-router-dom"
import Foodpage from './Pages/Foodpage'
import RecipePage from './components/Foodcard/Foodrecipe'


function App() {


  return (
    <>

<>
    <Routes>
    <Route path="/" element = {<Foodpage/>}/>
    <Route path="/food/:id" element = {<RecipePage/>}/>
    </Routes>
    </>

    </>
  )
}

export default App
