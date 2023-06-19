import "./App.css";
import { SwitchDayLight } from "./components/SwitchDayLight";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SwitchDayLight scale="3" />
    </div>
  );
}

export default App;
