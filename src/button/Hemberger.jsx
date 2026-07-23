import { useState } from "react";

function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
    >
      <span
        className={`h-0.5 w-6 bg-black transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>

      <span
        className={`h-0.5 w-6 bg-black transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>

      <span
        className={`h-0.5 w-6 bg-black transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
}

export default HamburgerButton;