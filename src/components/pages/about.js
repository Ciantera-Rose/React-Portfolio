import React from "react";
import profilePicture from "../../../static/assets/images/bio/blank-profile-picture.png";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed
        sed risus pretium quam vulputate dignissim suspendisse. Id diam maecenas
        ultricies mi. Viverra ipsum nunc aliquet bibendum. Lorem ipsum dolor sit
        amet consectetur adipiscing elit pellentesque. Auctor eu augue ut lectus
        arcu bibendum. Cras tincidunt lobortis feugiat vivamus at augue eget
        arcu dictum. Imperdiet dui accumsan sit amet nulla facilisi morbi.
        Mauris augue neque gravida in fermentum et sollicitudin. Eget felis eget
        nunc lobortis mattis. Tellus in metus vulputate eu scelerisque. In hac
        habitasse platea dictumst quisque sagittis purus. Eleifend quam
        adipiscing vitae proin sagittis nisl rhoncus mattis.
      </div>
    </div>
  );
}
