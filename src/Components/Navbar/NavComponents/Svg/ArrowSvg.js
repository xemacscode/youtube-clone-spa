import React, { memo } from "react";
import "./scss/svg_style_scnni.scss";

// SVG path COPIED FROM YOUTUBE

const ArrowSvg = () => {
  return (
    <div className="ytb_svg">
      <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill="#909090"
            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(ArrowSvg);
