import React, { useState, useEffect } from "react";
import triangleF from "../assets/Triangle-f.svg";
import triangleS from "../assets/Triangle-s.svg";
import triangleT from "../assets/Triangle-t.svg";

function CommandBadged({
  userIcon,
  userName,
  routeIcon,
  routeName,
  commandIcon = "",
  commandName = "",
}: {
  userIcon: string;
  userName: string;
  routeIcon: string;
  routeName: string;
  commandIcon?: string;
  commandName?: string;
}) {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString("en-US", { hour12: false })
  );

  let command: boolean = true;

  if (commandIcon === "" || commandName === "") {
    command = false;
  }

  return (
    <div>
      {command && (
        <div className="flex justify-between mb-5">
          <div className="flex flex-row ">
            <div id="t-badged" className="w-fit flex flex-row ">
              <div className="w-fit flex flex-row ">
                <div id="s-badged" className="w-fit flex flex-row ">
                  <div className="flex flex-row ">
                    <div
                      id="f-badged"
                      className="badged flex flex-row items-center"
                    >
                      <img src={userIcon} alt="User Icon" />
                      <p className="text-white font-bold text-2xl">
                        {userName}
                      </p>
                    </div>
                    <img className="h-30px" src={triangleF} alt="triangle" />
                  </div>
                  <div className="flex flex-row ">
                    <div
                      id="s-badged"
                      className="badged flex flex-row items-center"
                    >
                      <img src={routeIcon} alt="User Icon" />
                      <p className="text-white font-bold text-2xl">
                        {routeName}
                      </p>
                    </div>
                  </div>
                </div>
                <img src={commandIcon} alt="User Icon" className="mr-1.5" />
                <p className="text-white font-bold text-2xl">{commandName}</p>
              </div>

              <img className="h-30px" src={triangleS} alt="triangle" />
            </div>

            <img className="h-30px" src={triangleT} alt="triangle" />
          </div>
          <p className="text-white font-bold text-2xl">[{currentTime}]</p>
        </div>
      )}
      {!command && (
        <div className="flex justify-between mb-5">
          <div className="w-fit flex flex-row ">
            <div id="s-badged" className="w-fit flex flex-row ">
              <div className="flex flex-row ">
                <div
                  id="f-badged"
                  className="badged flex flex-row items-center"
                >
                  <img src={userIcon} alt="User Icon" />
                  <p className="text-white font-bold text-2xl">{userName}</p>
                </div>
                <img className="h-30px" src={triangleF} alt="triangle" />
              </div>
              <div className="flex flex-row ">
                <div
                  id="s-badged"
                  className="badged flex flex-row items-center"
                >
                  <img src={routeIcon} alt="User Icon" />
                  <p className="text-white font-bold text-2xl">{routeName}</p>
                </div>
              </div>
            </div>
            <img className="h-30px" src={triangleS} alt="triangle" />
          </div>

          <p className="text-white font-bold text-2xl">[{currentTime}]</p>
        </div>
      )}
    </div>
  );
}

export default CommandBadged;
