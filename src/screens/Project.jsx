import React from "react";
import GitHubLogo from "../assets/img/github.png";
function Project() {
    return (
        <div className="text-neutral-200 p-24">
            <h2 className="text-4xl pb-12 font-bold">Projects</h2>
            <div className="project-container">
                <div className="project-card shadow-sm shadow-neutral-300 p-4 rounded-lg backdrop-blur">
                    <div className="flex justify-between">
                        <h3>01 | Test Project</h3>
                        <a href="" className="w-8 aspect-square">
                            <img src={GitHubLogo} alt="GitHub Logo" />
                        </a>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <img
                            className="w-2/4 rounded-lg"
                            src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
                            alt=""
                        />
                        <div className="w-2/5">
                            <p>Description</p>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nullam suscipit, eros vitae tincidunt
                                tincidunt, nunc libero ultricies
                            </p>
                            <div>
                                //icons
                            </div>
                            <a href="www.joyalgeorgekj.com"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
