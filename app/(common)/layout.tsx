import NameCard from "@/components/Pages/Home/NameCard/NameCard";
import Sidebar from "@/components/Pages/Home/Sidebar/Sidebar";
import PreLoader from "@/components/PreLoader/PreLoader";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    // <div>
    //   <div className="h-full min-h-[calc(100vh-0px)]">{children}</div>
    // </div>
    <div className="main relative text-slate-50">
      <PreLoader />
      <div className="overlay fixed top-0 z-20 w-full h-full bg-black/60"></div>
      <video src="/videos/bgVideo.mp4" autoPlay loop muted className="hidden md:block min-w-screen  fixed top-0 left-0 z-10"></video>
      <div className="absolute top-0 z-20 w-full">
        <div className="lg:flex relative">
          <NameCard />
          <div className="lg:w-auto">
            <div className="h-full min-h-[calc(100vh-0px)]">{children}</div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default layout;
