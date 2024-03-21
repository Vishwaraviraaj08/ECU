import {useState} from 'react'
import './App.css'
import Components from "./components.jsx";
import {Routes, Route} from 'react-router-dom'
import Background from "./background.jsx";
import Calibration from "./calibration.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (<>
        <Routes>

            <Route path="/" element={<Components/>}/>
            <Route path={"/calibration"} element={<Calibration/>}/>
        </Routes>
        </>)
}

export default App
