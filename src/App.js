import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Projects from './components/projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/projects" element= {<Projects/> }/>
      </Routes>
    </>
  )
}

export default App;
