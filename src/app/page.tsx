import React from "react";
import NavigationBar from "@/components/navigationBar";
import BigImage from "@/components/bigImage";
import NowFeaturing from "@/components/nowFeaturing";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <div className="bg-radial-[at_25%_25%] from-black to-zinc-900 to-75% h-[100dvh] flex justify-center">
        <BigImage />
      </div>
      <div className="flext justify-center">
        <NowFeaturing/>
      </div>
    </>
  );
}

export default HomePage;
