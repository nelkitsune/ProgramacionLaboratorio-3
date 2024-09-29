import { useEffect, useState } from "react";

export const ComponentUseEffect = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, []);
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
        <p>{state ? "true" : "false"}</p>
      <button
       onClick={() => {
        setState(!state)
       }}
       >
        Cambiar state
      </button>
    </div>
  );
};
