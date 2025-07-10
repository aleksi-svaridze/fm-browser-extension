import { useState } from "react";

type StateProps = "default" | "hover" | "focus" | "disabled";

function ToggleSelector({ state }: { state: StateProps }) {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div
      className={`h-5 w-9 flex p-[2px] rounded-[999px] cursor-pointer outline-offset-2 outline-2 outline-transparent
      ${
        state === "default" && isOn
          ? "justify-end bg-red-700"
          : "justify-start bg-neutral-300"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div className="shadow-light size-4 rounded-full bg-neutral"></div>
    </div>
  );
}

export default ToggleSelector;

//  ${isOn && state === "disabled" ? "bg-neutral-100" : "bg-red-500"}
//   ${isOn && state === "hover" ? "hover:bg-red-500" : "bg-neutral-300"}
//   ${
//     isOn && state === "focus"
//       ? "outline-red-500  bg-red-700"
//       : " outline-red-500 bg-neutral-300"
//   }
