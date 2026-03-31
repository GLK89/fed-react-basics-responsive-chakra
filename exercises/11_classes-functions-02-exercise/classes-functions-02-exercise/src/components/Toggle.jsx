import { useState } from "react";

export function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  function handleClick() {
    setIsToggleOn((prev) => !prev);
  }

  return <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>;
}
