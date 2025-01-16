import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./screens/Home"));
const Layout = lazy(() => import("./screens/Layout"));
const Blog = lazy(() => import("./screens/Blog"));
const Project = lazy(() => import("./screens/Project"));
const About = lazy(() => import("./screens/About"));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<span>Loading...</span>}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/blog"
                        element={
                            <Suspense fallback={<span>Loading...</span>}>
                                <Blog />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/project"
                        element={
                            <Suspense fallback={<span>Loading...</span>}>
                                <Project />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<span>Loading...</span>}>
                                <About />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
