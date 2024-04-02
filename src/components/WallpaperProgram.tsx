import React, { useState } from "react";
import ProgramComponent from "./ProgramComponent";
import "../tailwind.css";
import ubuntuWallpaper from "../assets/bg/ubuntu-wallpaper.webp";
import windowsWallpaper from "../assets/bg/windows-wallpaper.jpg";
import macWallpaper from "../assets/bg/mac-wallpaper.jpg";

function WallpaperProgram({
  onClose,
  onWallpaperChange,
}: {
  onClose: () => void;
  onWallpaperChange: (wallpaper: string) => void;
}) {
  const [wallpaper, setWallpaper] = useState("ubuntu-wallpaper");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedWallpaper = event.target.value;
    setWallpaper(selectedWallpaper);
    onWallpaperChange(selectedWallpaper);
  };

  return (
    <div className="text-2xl text-white">
      <ProgramComponent
        onClose={onClose}
        programTitle="Wallpapers"
        jsxContent={
          <div className="w-full h-full flex flex-row items-center justify-center">
            <label className="flex flex-col justify-center">
              <img
                src={ubuntuWallpaper}
                alt="Ubuntu Wallpaper"
                width={250}
                className="rounded-xl"
              />
              <div className="flex flex-row justify-center">
                <input
                  type="radio"
                  value="ubuntu-wallpaper"
                  checked={wallpaper === "ubuntu-wallpaper"}
                  onChange={handleRadioChange}
                />
                <p className="ms-4">Ubuntu</p>
              </div>
            </label>
            <label className="flex flex-col justify-center mx-8">
              <img
                src={windowsWallpaper}
                alt="Windows Wallpaper"
                width={250}
                className="rounded-xl"
              />
              <div className="flex flex-row justify-center">
                <input
                  type="radio"
                  value="windows-wallpaper"
                  checked={wallpaper === "windows-wallpaper"}
                  onChange={handleRadioChange}
                />
                <p className="ms-4">Windows</p>
              </div>
            </label>
            <label className="flex flex-col justify-center">
              <img
                src={macWallpaper}
                alt="Mac Wallpaper"
                width={250}
                className="rounded-xl"
              />
              <div className="flex flex-row justify-center">
                <input
                  type="radio"
                  value="mac-wallpaper"
                  checked={wallpaper === "mac-wallpaper"}
                  onChange={handleRadioChange}
                />
                <p className="ms-4">Mac</p>
              </div>
            </label>
          </div>
        }
      />
    </div>
  );
}

export default WallpaperProgram;
