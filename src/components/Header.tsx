import { Logo } from "../assets/Svgs";
import ToggleTheme from "./ToggleTheme";

function Header({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="w-full py-4 lg:py-10 px-4 md:px-8">
      <div
        className={`mx-auto px-3 md:px-4 py-2 md:py-3 rounded-[10px] md:rounded-[20px] dark:bg-neutral-800 bg-neutral transition-all border-[1px] border-neutral-200 dark:border-transparent delay-100 shadow-[0px_2px_3px_0px_#D9E5F4] dark:shadow-none flex justify-between items-center`}
      >
        <div className="flex items-center gap-x-3">
          <Logo fill={`${isDark ? "#f25c54" : "#c7231a"}`} />
          <span className="text-2xl dark:text-white text-neutral-900 delay-100 transition-all">
            Extensions
          </span>
        </div>
        <div className="size-[50px] rounded-xl delay-100 transition-all bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
          <ToggleTheme isDark={isDark} setIsDark={setIsDark} />
        </div>
      </div>
    </header>
  );
}

export default Header;
