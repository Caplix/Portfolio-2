import React from "react";
import portfolioBilde from "../assets/portfolioBilde.jpeg";
import FinalExamImg from "../assets/Final-exam-portfolio-img.png";
import ReactCourseAssignment from "../assets/ReactCourseAssignment.png";
import RegalAuctions from "../assets/RegalAuctionsSemesterProject.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { MdHtml } from "react-icons/md";
import { MdJavascript } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="flex justify-center"> 
            <div className="bg-gradient-to-tl from-zinc-950 via-zinc-800 to-zinc-950 h-full w-screen overflow-hidden">   
                <div className="flex items-center justify-center">
                    <img className="lg:w-1/12 md:w-1/6 sm:w-1/6 w-1/4 m-4 rounded-full" src={portfolioBilde} alt="" />
                    <div className="">
                        <h1 className="text-white font-bold font-mono">Kristoffer Myhre</h1>
                        <p className="text-white font-mono">I build stuff</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col text-center">
                    <div className="flex justify-center">
                        <p className="text-white font-semibold font-mono">About me</p>
                    </div>
                    <div className="flex justify-center mt-2">
                        <p className="w-64 text-white font-mono">I'm a front-end developer from Norway, Education from Noroff in Bergen. I like to build websites, spend time with friends and play alittle bit of video games</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-white font-semibold font-mono my-6">Skills</h1>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-around w-80 mb-4">
                        <div className="p-3 border rounded">
                            <MdHtml size={48} className="text-white hover:text-amber-700" />
                        </div>
                        <div className="p-3 border rounded">
                            <MdCss size={48} className="text-white hover:text-blue-500" />
                        </div>
                        <div className="p-3 border rounded">
                            <MdJavascript size={48} className="text-white hover:text-yellow-500" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-around w-80">
                        <div className="p-3 border rounded">
                            <FaReact size={48} className="text-white hover:text-sky-600" />
                        </div>
                        <div className="p-3 border rounded">
                            <RiTailwindCssFill size={48} className="text-white hover:text-cyan-500" />
                        </div>                               
                        <div className="p-3 border rounded">
                            <FaBootstrap size={48} className="text-white hover:text-purple-500" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-white font-semibold text-center font-mono my-6">Some of my past projects</h1>
                    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around my-4">
                        <div className="flex flex-col w-80 border rounded my-4 lg:my-0 lg:mx-2">
                            <div className="flex justify-center w-full my-2 mx-1">
                                <img src={FinalExamImg} alt="" className="w-3/5" />
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-white mt-1 font-semibold font-mono">Holidaze</p>
                                <p className="text-white text-xxs font-mono text-center px-10">A simple booking website using an API to let registered users post and book venues.</p>
                                <a className="flex justify-center text-white text-xxs border rounded my-2 w-1/4" href="https://github.com/Caplix/Final-exam-2024" target="_blank" rel="noopener noreferrer">Read more</a>
                            </div>
                        </div>
                        <div className="flex flex-col w-80 border rounded my-4 lg:my-0 lg:mx-2">
                            <div className="flex justify-center w-full my-2 mx-1">
                                <img src={ReactCourseAssignment} alt="" className="w-full max-w-64" />
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-white mt-1 font-semibold font-mono">First React project</p>
                                <p className="text-white text-xxs font-mono text-center px-10">My first react project, a simple webstore fetching from an API.</p>
                                <a className="flex justify-center text-white text-xxs border rounded my-2 w-1/4" href="https://github.com/Caplix/React-course-assignment" target="_blank" rel="noopener noreferrer">Read more</a>
                            </div>
                        </div>
                        <div className="flex flex-col w-80 border rounded my-4 lg:my-0 lg:mx-2">
                            <div className="flex justify-center w-full my-2 mx-1">
                                <img src={RegalAuctions} alt="" className="w-full max-w-72" />
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-white mt-1 font-semibold font-mono">Regal Auctions</p>
                                <p className="text-white text-xxs font-mono text-center px-10">An auction website using an API to let registered users bid on and sell items.</p>
                                <a className="flex justify-center text-white text-xxs border rounded my-2 w-1/4" href="https://github.com/Caplix/semester-project-2" target="_blank" rel="noopener noreferrer">Read more</a>
                            </div>
                        </div>
                    </div>
                    <footer className="w-screen border-t">
                        <div className="flex justify-around my-3">
                            <a href="https://www.linkedin.com/in/kristoffer-myhre-76511b27a/"><FaLinkedinIn size={24} className="text-white hover:text-cyan-500" /></a>
                            <a href="https://github.com/Caplix"><FaGithub size={24} className="text-white hover:text-cyan-500" /></a>
                            <a href="mailto:Kristoffer.a.myhre@gmail.com"><MdEmail size={24} className="text-white hover:text-cyan-500" /></a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Hero;
