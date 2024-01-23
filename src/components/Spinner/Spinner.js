import React, { useState } from "react";
import Lottie from 'react-lottie'
import data from "../../data/logo.json"

const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    renderSettings: {
      preserveAspectRatio: "xMidyMid slice"
    }
  };
  return (
    <div >
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Spinner;
