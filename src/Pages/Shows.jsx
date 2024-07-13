import useState from "react";

function Shows() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div>
        <button
          onClick={() => handleTabClick("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          Home
        </button>
      </div>
    </>
  );
}

export default Shows;
