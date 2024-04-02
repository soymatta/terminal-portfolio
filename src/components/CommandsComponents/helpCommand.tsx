function helpCommand() {
  return (
    <div className="text-xl mb-5 text-white">
      <div className="flex flex-row mb-2">
        <p className="w-36">help</p>
        <p>Show all commands in terminal</p>
      </div>

      <div className="flex flex-row mb-2">
        <p className="w-36">bio</p>
        <p>Displays all the information about me</p>
      </div>

      <div className="flex flex-row mb-2">
        <p className="w-36">skills</p>
        <p>Show all my knowledge and skills</p>
      </div>

      <div className="flex flex-row mb-2">
        <p className="w-36">projects</p>
        <p>List all my projects</p>
      </div>

      <div className="flex flex-row mb-2">
        <p className="w-36">info</p>
        <p>Shows the technologies and tools used for this project</p>
      </div>

      <div className="flex flex-row mb-2">
        <p className="w-36">clear</p>
        <p>Use it to clear the console</p>
      </div>
    </div>
  );
}

export default helpCommand;
