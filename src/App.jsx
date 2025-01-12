import React, { useEffect, useState } from "react";
import Effects from "./components/Effects";

function App() {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        console.log();
    }, []);
    return (
        <main>
            <h1>React 18 App</h1>
            <Effects height={height} width={width} />
        </main>
    );
}

export default App;
