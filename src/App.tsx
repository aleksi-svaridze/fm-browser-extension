import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
