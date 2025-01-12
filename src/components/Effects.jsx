import React, { useEffect, useRef } from "react";

function Effects(props) {
    const ref = useRef();

    const drawCanvas = (context) => {
        context.fillStyle = "black";
        context.fillRect(0, 0, 100, 100);
    };

    useEffect(() => {
        let canvas = ref.current;
        let context = canvas.getContext("2d");
        drawCanvas(context);
    }, []);

    return <canvas ref={ref} {...props}></canvas>;
}

export default Effects;
