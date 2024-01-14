import { useState } from "react";
import './App.css'

function App() {
    const [color, setColor] = useState("pink")

    return (
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap top-20 py-2 px-2 bg-white rounded-full inset-x-0 max-w-max mx-auto">
                <h1>Color Selection Test</h1>
            </div>

            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className='flex-wrap justify-center bg-white px-3 py-2 rounded-3xl'>
                    <button onClick={() => setColor("red")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{backgroundColor: "red", marginRight: "8px"}}
                    >Red
                    </button>
                    <button onClick={() => setColor("Green")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{backgroundColor: "green", marginRight: "8px"}}
                    >Green
                    </button>
                    <button onClick={() => setColor("Orange")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{backgroundColor: "orange", marginRight: "8px"}}
                    >Orange
                    </button>
                    <button onClick={() => setColor("SkyBlue")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{backgroundColor: "skyblue", marginRight: "8px"}}
                    >SkyBlue
                    </button>
                    <button onClick={() => setColor("Gray")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{backgroundColor: "gray", marginRight: "8px"}}
                    >Gray
                    </button>
                    <button onClick={() => setColor("HotPink")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{backgroundColor: "hotpink", marginRight: "8px"}}
                    >HotPink
                    </button>
                    <button onClick={() => setColor("Brown")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                            style={{backgroundColor: "brown"}}
                    >Brown
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;
