import React from "react";
import NavigationBar from "@/features/navigationBar";
import BigImage from "@/features/bigImage";
import NowFeaturing from "@/features/nowFeaturing";
import Posters from "@/components/posters";
import PostersRight from "@/components/poster_right";
import CinemaImage from "@/assets/images/cinema_image.jpg";
import CinemaVIP from "@/assets/images/cinemaVIP.jpg";
import Cinena4DX from "@/assets/images/carribean4dx.jpg";
import CinemaFood from "@/assets/images/food.jpg"

function HomePage() {
  return (
    <>
      <NavigationBar />
      <div className="bg-radial-[at_25%_25%] from-black to-zinc-900 to-75% h-[100dvh] flex justify-center">
        <BigImage />
      </div>
      <div className="flext justify-center drop-shadow-2xl">
        <NowFeaturing />
      </div>
      <div className="bg-gradient-to-r from-neutral-800 to-red-800 w-[100dvw]">
        <Posters
          title="Carribean Cinemas Fine Arts!"
          description="Caribbean Cinemas Fine Arts is a unique and upscale movie theater that
          offers a refined cinematic experience for film lovers. Located in the
          heart of Santo Domingo, Dominican Republic, Fine Arts is known for
          showcasing a curated selection of independent, foreign, and art-house
          films, setting itself apart from traditional commercial cinemas."
          image={CinemaImage}
        />

        <PostersRight
          title="Caribbean Cinemas VIP: The Ultimate Luxury Movie Experience"
          description="Caribbean Cinemas VIP offers a premium and exclusive way to enjoy movies, combining state-of-the-art technology with unparalleled comfort. Designed for moviegoers who seek a more refined experience, this VIP section is available in select Caribbean Cinemas locations, providing a luxurious setting that elevates traditional cinema outings."
          image={CinemaVIP}
        />

        <Posters
          title="Cinema 4DX: An Immersive Movie Experience Like No Other"
          description="Cinema 4DX at Caribbean Cinemas takes movie-watching to the next level by engaging all your senses. Unlike traditional theaters, 4DX offers a fully immersive experience with motion seats and environmental effects that make you feel like you're inside the movie."
          image={Cinena4DX}
        />

        <PostersRight
          title="Food & Snacks at Caribbean Cinemas: More Than Just Popcorn!"
          description="Caribbean Cinemas offers a delicious variety of food and snack options, making your movie experience even more enjoyable. Whether you’re craving classic theater popcorn or a full meal, there’s something for everyone!"
          image={CinemaFood}
        />
      </div>
    </>
  );
}

export default HomePage;
