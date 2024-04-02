import React from "react";
// Assets
import "../tailwind.css";
import terminalIcon from "../assets/terminal.png";
// Components
import Program from "../components/ProgramIcon";
import ConsoleProgram from "../components/ConsoleProgram";
import WallpaperProgram from "../components/WallpaperProgram";

function DesktopPage() {
  const [showTerminal, setShowTerminal] = React.useState(false);
  const [openProgram, setOpenProgram] = React.useState(false);
  const [showWallpaper, setShowWallpaper] = React.useState(false);
  const [selectedWallpaper, setSelectedWallpaper] =
    React.useState("ubuntu-wallpaper");

  const handleWallpaperChange = (wallpaper: React.SetStateAction<string>) => {
    setSelectedWallpaper(wallpaper);
  };

  const openTerminal = () => {
    setShowTerminal(true);
    setOpenProgram(true);
  };

  const closeTerminal = () => {
    setShowTerminal(false);
    setOpenProgram(false);
  };

  const openWallpaper = () => {
    setShowWallpaper(true);
    setOpenProgram(true);
  };

  const closeWallpaper = () => {
    setShowWallpaper(false);
    setOpenProgram(false);
  };

  return (
    <div
      id={selectedWallpaper}
      className="wallpapered h-screen w-screen p-10 font-mono"
    >
      <Program
        icon={terminalIcon}
        name="Terminal"
        onClick={() => {
          if (!openProgram) openTerminal();
        }}
      />
      <Program
        icon={terminalIcon}
        name="Wallpaper"
        onClick={() => {
          if (!openProgram) openWallpaper();
        }}
      />
      {showTerminal && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ConsoleProgram onClose={closeTerminal} />
        </div>
      )}
      {showWallpaper && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <WallpaperProgram
            onClose={closeWallpaper}
            onWallpaperChange={handleWallpaperChange}
          />
        </div>
      )}
    </div>
  );
}

export default DesktopPage;
