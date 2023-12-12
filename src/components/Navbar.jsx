import React from "react";
import logo from "../assets/Yodos-Logo.svg";

const Navbar = () => {
  const styles = {
    borderRadius: "6.1875rem",
    border: "1px solid rgba(255, 255, 255, 0.20)",
    backgroundImage: "linear-gradient(92deg, #2181CD 6.38%, #5EA1E2 93.85%)",
  };

  return (
    <header className="absolute top-0 flex items-center justify-between w-full p-10">
      <a href="https://withyodo.com/">
        <img src={logo} />
      </a>
      <a
        href="https://withyodo.com/get-access/"
        className="inline-block p-2 px-12 text-sm text-center text-white rounded-full font-Montserrat bg-inherit"
        style={styles}
      >
        Take action{" "}
      </a>
    </header>
  );
};

export default Navbar;
