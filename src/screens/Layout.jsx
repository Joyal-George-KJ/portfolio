import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Effects from "../components/Effects";
import { Outlet } from "react-router-dom";

function Layout() {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        console.log();
    }, []);

    return (
        <div>
            <Header />
            <Effects height={height} width={width} />
            <Outlet />
        </div>
    );
}

export default Layout;
