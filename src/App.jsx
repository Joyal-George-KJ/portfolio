import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Post = lazy(() => import("./screens/Post"));
const Home = lazy(() => import("./screens/Home"));
const Layout = lazy(() => import("./screens/Layout"));
const Blog = lazy(() => import("./screens/Blog"));
const Project = lazy(() => import("./screens/Project"));
const About = lazy(() => import("./screens/About"));

function App() {
    function Loading() {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <CircularProgress />
            </div>
        );
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<Loading />}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/blog"
                        element={
                            <Suspense fallback={<Loading />}>
                                <Blog />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/project"
                        element={
                            <Suspense fallback={<Loading />}>
                                <Project />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<Loading />}>
                                <About />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/blog/:id"
                        element={
                            <Suspense fallback={<Loading />}>
                                <Post />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
