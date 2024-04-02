import React, { useState } from "react";
import "../tailwind.css";
// Components
import CommandBadged from "./CommandBadged";
import bioCommand from "./CommandsComponents/bioCommand";
import skillsCommand from "./CommandsComponents/skillsCommand";
import projectsCommand from "./CommandsComponents/projectsCommand";
import infoCommand from "./CommandsComponents/infoCommand";
import helpCommand from "./CommandsComponents/helpCommand";
import ProgramComponent from "./ProgramComponent";

// Icons
import userIcon from "../assets/icons/user.svg";
import routeIcon from "../assets/icons/home.svg";
import helpIcon from "../assets/icons/help.svg";
import infoIcon from "../assets/icons/info.svg";
import skillsIcon from "../assets/icons/skills.svg";
import bioIcon from "../assets/icons/bio.svg";
import projectsIcon from "../assets/icons/projects.svg";
import errorIcon from "../assets/icons/error.svg";
import commandIndicator from "../assets/CommandIndicator.svg";

function ConsoleProgram({ onClose }: { onClose: () => void }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [commands, setCommands] = useState<string[]>([]);

  const commandComponents = {
    help: helpCommand,
    bio: bioCommand,
    skills: skillsCommand,
    projects: projectsCommand,
    info: infoCommand,
    clear: null,
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setCommands([...commands, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div>
      <ProgramComponent
        onClose={onClose}
        programTitle="soymatta@portfolio"
        jsxContent={
          <div>
            <CommandBadged
              userIcon={userIcon}
              userName="soymatta"
              routeIcon={routeIcon}
              routeName="/portfolio"
              commandIcon={helpIcon}
              commandName="help"
            />
            <div className="mb-5 flex flex-row">
              <img src={commandIndicator} alt="Command Indicator" />
              <div>
                <span className="text-xl text-white">Type</span>
                <span className="text-xl text-amber-400"> "help" </span>
                <span className="text-xl text-white">
                  for watch all commands
                </span>
              </div>
            </div>

            {commands.map((command, index) => {
              let commandIcon = helpIcon;
              let Component =
                commandComponents[
                  command.toLowerCase() as keyof typeof commandComponents
                ];

              // Establecer el ícono de comando
              switch (command.toLowerCase()) {
                case "help":
                  commandIcon = helpIcon;
                  break;
                case "bio":
                  commandIcon = bioIcon;
                  break;
                case "skills":
                  commandIcon = skillsIcon;
                  break;
                case "projects":
                  commandIcon = projectsIcon;
                  break;
                case "info":
                  commandIcon = infoIcon;
                  break;
                case "clear":
                  // Limpiar el map de comandos
                  setCommands([]);
                  break;
                default:
                  commandIcon = errorIcon;
                  break;
              }

              return (
                <div key={index}>
                  <CommandBadged
                    userIcon={userIcon}
                    userName="soymatta"
                    routeIcon={routeIcon}
                    routeName="/portfolio"
                    commandIcon={commandIcon}
                    commandName={command}
                  />
                  <div className="mb-5 flex flex-row">
                    <img src={commandIndicator} alt="Command Indicator" />
                    <span className="text-xl text-white">{command}</span>
                  </div>
                  {Component && <Component />}
                  {commandIcon === errorIcon ? (
                    <p className="text-xl mb-5 text-red-400">
                      <div>
                        <span>Command not found, type</span>
                        <span className=" text-amber-400"> "help" </span>
                        <span>for watch all commands</span>
                      </div>
                    </p>
                  ) : null}
                </div>
              );
            })}

            <CommandBadged
              userIcon={userIcon}
              userName="soymatta"
              routeIcon={routeIcon}
              routeName="/portfolio"
            />

            <div className="mb-5 flex flex-row">
              <img src={commandIndicator} alt="Command Indicator" />
              <input
                id="commandInput"
                className="text-xl text-white"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                maxLength={10}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}

export default ConsoleProgram;
