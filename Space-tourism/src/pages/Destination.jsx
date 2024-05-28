import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import planets from "../data/data.json";
import styles from './LogoAndStoreButtons.module.css';
import { list } from "postcss";



const Destination = () => {
  const [destinationData, setDestinationData] = useState(planets.destinations[0]);

  const handleDestinationsData = (item) => {
    setDestinationData(item);
  };

  return (
    <section className="w-full h-screen lg:h-full bg-no-repeat bg-destination-mobile md:bg-destination-tablet lg:bg-destination-dekstop bg-cover overflow-y-scroll no-scrollbar">
      <div className="text-white text-center lg:text-left p-8 md:pt-10 md:px-32 lg:p-44 block lg:flex relative top-24 md:top-36 lg:top-12 w-full h-0 lg:h-screen z-0 animate-fade-in-left">
        <div className="flex flex-1 justify-center md:justify-normal tracking-widest space-x-4 text-lg md:text-xl lg:text-2xl w-full h-full">
          <nav className="text-gray-500 font-bold">01</nav>
          <p>Pick your application</p>
        </div>
        <div className="lg:mt-6 flex flex-1 justify-center lg:justify-normal w-full h-[70vh] lg:h-0">
          <img
            className="absolute lg:left-20 mt-10 md:mt-20 lg:mt-36 w-auto lg:w-[45rem] h-auto"
            src={destinationData.images.png}
            alt={destinationData.name}
          />
          <div className="relative lg:left-48 top-60 md:top-72 lg:top-16 lg:mr-40">
            <div className="flex flex-1 justify-center lg:justify-normal space-x-6 lg:space-x-8">
              {planets.destinations.map((item) => (
                <div
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className={`${
                    destinationData.name === item.name
                      ? "hover:border-b hover:border-gray-400 text-sm md:text-base border-b border-b-white"
                      : "hover:border-b hover:border-gray-400 text-sm md:text-base text-gray-400"
                  }`}
                  key={item.id}
                  id={item.name.toLowerCase()}
                  onClick={() => handleDestinationsData(item)}
                >
                  <NavLink>{item.name}</NavLink>
                </div>
              ))}
            </div>
            <div className="block mt-6 md:mt-8">
              <p className="text-6xl lg:text-[53px]">{destinationData.name}</p>
            </div>
            <div className="block mt-2 lg:mt-6 font-sans text-gray-400 leading-6 text-xs md:text-base lg:text-lg">
              {destinationData.description}
            </div>
            <div className={styles['download-buttons']}>
            <a href="https://play.google.com/store/apps/details?id=org.serverboi.RealArtAI" className={styles['button-link']} aria-label="Download Real Art AI from Google Play">
              <img src="assets/destination/google-play-badge.svg" alt="Get it on Google Play" className={styles['store-badge']} />
            </a>
            <a href="https://apps.apple.com/us/app/real-art-ai/id6449267914" className={styles['button-link']} aria-label="Download Real Art AI from the App Store">
              <img src="assets/destination/app-store-badge.svg" alt="Download on the App Store" className={styles['store-badge']} />
            </a>
          </div>
            <div className="block mt-8 lg:mt-7">
              <nav className="w-auto h-[0.5px] bg-gray-700"></nav>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-center lg:justify-start md:space-x-14">
              <div className="block mt-5 text-xs md:text-sm">
                <p className="text-gray-400">Ratings</p>
                <p className="mt-2 text-xl md:text-2xl">{destinationData.distance}</p>
              </div>
              <div className="block mt-7 md:mt-5 text-xs md:text-sm">
                <p className="text-gray-400">Downloads</p>
                <p className="mt-2 text-xl md:text-2xl">{destinationData.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Destination;
