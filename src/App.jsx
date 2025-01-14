import React, { useEffect, useState } from "react";
import Effects from "./components/Effects";
import Header from "./components/Header";
import Main from "./components/Main";

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
            <Header />
            <Main />
            <Effects height={height} width={width} />
        </main>
    );
}

export default App;
