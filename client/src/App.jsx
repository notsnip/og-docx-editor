import './App.css'
import TextEditor from './components/TextEditor'
import { v4} from 'uuid';
import {Routes,Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Routes>

      <Route path='/new' element={<Navigate to={`/docs/${v4()}`}/>}></Route>
      <Route path='/docs/:id' element={<>
        <Navbar/>
      <TextEditor/>
      </>}></Route>
    </Routes>
    

    <TextEditor />
    
    </>
  )
}

export default App
