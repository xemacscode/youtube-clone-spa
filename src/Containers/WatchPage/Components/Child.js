import React, { memo, Fragment, useState } from "react";
import styles from "../watch.module.scss";
import WatchContents from "./WatchContents";
import classNames from "classnames/bind";
import { GetClassName } from "../../../utils";
import PlayList from "./PlayList";

let cx = classNames.bind(styles);

const VideoHead = memo(
  ({
    PopularVideos,
    Theme,
    autoPlay,
    handleCheckboxChange,
    HandleShowMessageBox,
  }) => {
    //
    const [effect, setEffect] = useState(false);

    // Handle Effect Click

    const HundleEffectClick = () => {
      setEffect(true);
      setTimeout(() => {
        setEffect(false);
      }, 300);
    };

    return (
      <Fragment>
        <div className={GetClassName(styles, "head", Theme)}>
          <div className={styles.upne_text}>Up next</div>
          <div className={styles.toggle}>
            <div className={GetClassName(styles, "toggle__txt", Theme)}>
              AUTOPLAY
            </div>
            <label className={GetClassName(styles, "switch", Theme)}>
              <input
                type="checkbox"
                className={styles.switch__toggle}
                checked={autoPlay}
                onChange={handleCheckboxChange}
              />
              <span className={styles.switch__btn} onClick={HundleEffectClick}>
                <div
                  className={cx("circle", {
                    "circle--on": effect && autoPlay,
                    "circle--off": effect && !autoPlay,
                  })}
                ></div>
              </span>
            </label>
          </div>
        </div>
        {/* =============== */}
        <WatchContents
          PopularVideo={PopularVideos[0]}
          HandleShowMessageBox={HandleShowMessageBox}
        />
        <div className={GetClassName(styles, "line", Theme)}></div>
      </Fragment>
    );
  }
);

// Child Container

const Child = ({
  autoPlay,
  handleCheckboxChange,
  Theme,
  PopularVideos,
  HandleQueryParams,
  HandleShowMessageBox,
}) => {
  return (
    <Fragment>
      {/* ====== HEAD ====== */}
      <div className={styles.header}>
        {HandleQueryParams("list") === 0 ? (
          <VideoHead
            PopularVideos={PopularVideos}
            Theme={Theme}
            autoPlay={autoPlay}
            handleCheckboxChange={handleCheckboxChange}
            HandleShowMessageBox={HandleShowMessageBox}
          />
        ) : (
          <PlayList HandleQueryParams={HandleQueryParams} Theme={Theme} />
        )}
        {/* ====== BODY ====== */}
        {PopularVideos.length !== 0
          ? PopularVideos.slice(1).map((PopularVideo, index) => {
              return (
                <WatchContents
                  key={index + 1}
                  index={index + 1}
                  PopularVideo={PopularVideo}
                  HandleShowMessageBox={HandleShowMessageBox}
                />
              );
            })
          : [...Array(8)].map((e, i) => {
              return <WatchContents key={i} index={i} PopularVideo={null} />;
            })}
      </div>
    </Fragment>
  );
};

export default memo(Child);
