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
    <button className="cursor-pointer" onClick={() => setIsDark(!isDark)}>
      {isDark ? (
        <Sun height={22} width={22} />
      ) : (
        <Moon height={22} width={22} />
      )}
    </button>
  );
}

export default ToggleTheme;
