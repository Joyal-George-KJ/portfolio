import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Effects from "../components/Effects";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

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
            <Effects height={height} width={width} />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
