import React from "react";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-with">
        <div>
          <p className="text-xs font-semibold text-gray">More ways to shop:</p>
          <span className="text-blue underline">
            Find an Apple Store
          </span> or <span className="text-blue underline">other retailer</span>{" "}
          near you.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
