import React, { memo } from "react";
import "./scss/svg_style_scnni.scss";
import { useSelector } from "react-redux";

// SVG path COPIED FROM YOUTUBE

const BackArrowSvg = () => {
  // Theme
  const Theme = useSelector((state) => state.Theme.isDarkTheme);

  return (
    <div className="ytb_svg">
      <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill={Theme ? "#fff" : "#606060"}
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(BackArrowSvg);
