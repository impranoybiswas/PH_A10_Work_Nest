import React from "react";
import MainSection from "../layouts/MainSection";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Loading() {
  return (
    <MainSection>
      <div className="w-full h-100 flex justify-center items-center">
        <div className="w-48 h-48"><DotLottieReact src={"./assets/spinner.lottie"}  loop autoplay /></div>
      </div>
    </MainSection>
  );
}

export default Loading;
