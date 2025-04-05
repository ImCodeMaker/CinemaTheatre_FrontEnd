"use client"
import NavigationBar from "@/features/navigationBar";
import MoviesGrid from "@/features/moviesGrid";

const MyComponent = () => {

    return (
        <>
            <NavigationBar />

            <div className="relative bg-gradient-to-r from-neutral-700 to-neutral-900 h-fit w-[100dvw]">
                <MoviesGrid />
            </div>

        </>
    );
};

export default MyComponent;
