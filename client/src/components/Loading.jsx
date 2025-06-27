import React from "react";
import MainSection from "../layouts/MainSection";

function Loading() {
  return (
    <MainSection>
      <div className="w-full h-100 flex justify-center items-center">
        <span className="loading loading-spinner text-primary size-16 md:size-26"></span>
      </div>
    </MainSection>
  );
}

export default Loading;
