import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);

    return () => {
      document.body.classList.remove("dark-mode");
    };
    // document.body.style.backgroundColor = isDark
    //   ? "linear-gradient(180deg, #04091B 0%, #091540 100%);"
    //   : "linear-gradient(180deg, #EBF2FC 0%, #EEFBF9 100%);";

    // return () => {
    //   document.body.style.backgroundColor = "";
    // };
  }, [isDark]);

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
