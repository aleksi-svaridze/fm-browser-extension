import { Sun } from "../assets/Svgs";
import { Moon } from "../assets/Svgs";

function ToggleTheme({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button className={`size-4`} onClick={() => setIsDark(!isDark)}>
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}

export default ToggleTheme;
