import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import the stylesheet

const sliderItems = [
  {
    id: 1,
    imageUrl: "/assets/images/tb1.jpg",
    caption: "Banner 1",
  },
  {
    id: 2,
    imageUrl: "/assets/images/tb2.jpeg",
    caption: "Banner 2",
  },
  {
    id: 3,
    imageUrl: "/assets/images/tb3.jpg",
    caption: "Banner 3",
  },
];

export default function BannerSlider() {
  return (
    <div className="w-full  justify-center">
      <Slide>
        {sliderItems.map((image) => (
          <div key={image.id}>
            <div
              className="flex w-full items-center justify-center h-80 bg-no-repeat bg-contain bg-center hover:cursor-pointer  "
              style={{ backgroundImage: `url(${image.imageUrl})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
