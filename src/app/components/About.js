"use client";
import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import AboutAnimation from "@/app/components/AboutAnimation";
import { Bio } from "@/app/data/ConstantData";
import Typewriter from "typewriter-effect";
import { Link, Button } from "@nextui-org/react";


export default function About(){

    return (
        <div id="about">
            <div className="aboutMainDiv">
                <div className="aboutAnimation">
                    <AboutAnimation />
                </div>
                <div className="aboutInnerContainer">
                    <div className="aboutLeftContainer" id="Left">
                        <div className="title">Hi, I am  {Bio.name}</div>
                        <div className="aboutTextLoop">
                            I am a
                            <span className="text-violet-500 ">
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                        <div className="aboutDescription">{Bio.description}</div>
                        <div className="aboutResume">
                            <Button
                                href="https://github.com/nextui-org/nextui" target="display"
                                as={Link} className="resumeButton"
                                color="primary"
                                showAnchorIcon
                                variant="solid"
                                >
                                Check Resume
                            </Button>
                        </div>
                    </div>
                    <div className="aboutRightContainer" id="Right">
                        <Image className="aboutImg" src="/images/naren.JPG" alt="image"  width={300} height={200}/>
                    </div>
                </div>
            </div>
        </div>
    );
}