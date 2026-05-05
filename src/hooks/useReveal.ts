import { useEffect } from "react";

export const useReveal = (key: string) => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return () => {
      elements.forEach((element) => element.classList.remove("is-visible"));
    };
  }, [key]);
};
