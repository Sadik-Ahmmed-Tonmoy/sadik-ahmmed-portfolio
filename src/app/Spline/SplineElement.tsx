"use client";
import Spline from "@splinetool/react-spline";
import React from "react";

const SplineElement = () => {
  return (
    <>
      <div className="relative">
        <div className="h-screen ">
          <Spline scene="https://prod.spline.design/TOV33-FE7Lkm7SjI/scene.splinecode" />
          <Spline scene="https://prod.spline.design/HP5ljURL6T0EAKXX/scene.splinecode" />
        </div>
        <div className="text-white text-5xl absolute  h-full w-full inset-0  flex items-center justify-center">
          <p>Sadik</p>
        </div>         
      </div> 
      <Spline scene="https://prod.spline.design/x-kp7MqLlcuZsFdk/scene.splinecode" />
      <Spline scene="https://prod.spline.design/KDei-Mdt69VleMG8/scene.splinecode" />
    </>
  );
};
 
export default SplineElement;
