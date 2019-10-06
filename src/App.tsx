import "./styles/App.scss";
import TotalDaysLeft from "./components/TotalDaysContainer";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <TotalDaysLeft/>
    </div>
  );
};

export default App;
