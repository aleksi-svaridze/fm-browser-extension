import { useState } from "react";
import ToggleSelector from "./components/ToggleSelector";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <h1 className="bg-pink text-gray-950 dark:text-pink dark:bg-gray-950">
        Hello
      </h1>
      <ToggleSelector state="default" />
      <ToggleTheme isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
