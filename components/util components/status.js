import React from "react";
import SmallArrow from "./small_arrow";

export default function Status() {
  return (
    <div className="flex justify-center items-center">
      <span className="mx-1.5">
        <img
          width="16px" height="16px"
          src="./themes/Flat-Remix-Blue-Dark/status/network-wired.svg"
          alt="kali network"
          className="inline status-symbol w-4 h-4"
        />
      </span>
      <span className="mx-1.5">
        <img
          width="16px" height="16px"
          src="./themes/Flat-Remix-Blue-Dark/status/audio-volume-medium-symbolic.svg"
          alt="kali sound"
          className="inline status-symbol w-4 h-4"
        />
      </span>
      <span className="mx-1.5">
        <img
          width="16px" height="16px"
          src="./themes/Flat-Remix-Blue-Dark/status/battery-good-symbolic.svg"
          alt="kali battry"
          className="inline status-symbol w-4 h-4"
        />
      </span>
      <span className="mx-1">
        <SmallArrow angle="down" className=" status-symbol" />
      </span>
    </div>
  );
}
