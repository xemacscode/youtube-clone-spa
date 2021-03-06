import React, { memo } from "react";
import "./scss/svg_style_scvi.scss";

// SVG path COPIED FROM YOUTUBE

const SubBellSvg = () => {
  return (
    <div className="ytb_svg_x">
      <svg className="ytb_svg_x__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="#909090"
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(SubBellSvg);
