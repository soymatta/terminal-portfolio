import "../tailwind.css";

function Program({
  icon,
  name,
  onClick,
}: {
  icon: string;
  name: string;
  onClick: () => void;
}) {
  return (
    <button className="hoverPrograms text-white m-3" onClick={onClick}>
      <div className="flex flex-col items-center w-16 h-16">
        <img src={icon} alt="icon" className="w-9 h-9" />
        <div>{name}</div>
      </div>
    </button>
  );
}

export default Program;
