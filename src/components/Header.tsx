import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="  flex justify-center	 relative h-36 bg-header-mobile sm:bg-header-desktop bg-header-bg-color">
      {children}
    </header>
  );
};

export default Header;
