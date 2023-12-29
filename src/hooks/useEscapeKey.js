import React from "react";
export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        callback();
      }
    };
    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [callback]);
};
