import React from "react";
import NavigationBar from "@/features/navigationBar";
import BigImage from "@/features/bigImage";
import NowFeaturing from "@/features/nowFeaturing";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <div className="bg-radial-[at_25%_25%] from-black to-zinc-900 to-75% h-[100dvh] flex justify-center">
        <BigImage />
      </div>
      <div className="flext justify-center drop-shadow-2xl">
        <NowFeaturing/>
      </div>
      <div className="bg-gradient-to-r from-neutral-800 to-red-800 w-[100dvw] h-[100dvh]">

      </div>
    </>
  );
}

export default HomePage;
