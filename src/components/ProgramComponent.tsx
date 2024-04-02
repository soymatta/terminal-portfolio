import "../tailwind.css";

function ProgramComponent({
  onClose,
  programTitle,
  jsxContent,
}: {
  onClose: () => void;
  programTitle: string;
  jsxContent: JSX.Element;
}) {
  return (
    <div className="console">
      <div id="console-nav" className="flex justify-between items-center">
        <div className="flex items-center">
          <button id="closeBtn" className="nav-btn" onClick={onClose}></button>
          <div id="middleBtn" className="nav-btn"></div>
          <div id="lastBtn" className="nav-btn"></div>
        </div>
        <p className="text-white flex-1 text-center font-bold text-2xl">
          {programTitle}
        </p>
        <div id="spacerNav"></div>
      </div>
      <div id="console-content">{jsxContent}</div>
    </div>
  );
}

export default ProgramComponent;
