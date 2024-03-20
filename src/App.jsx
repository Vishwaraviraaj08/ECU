import {useState} from 'react'
import './App.css'
import Components from "./components.jsx";
import Background from "./background.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (<>
        {/* <Background/> */}

        <Components/>
        </>)
}

export default App
