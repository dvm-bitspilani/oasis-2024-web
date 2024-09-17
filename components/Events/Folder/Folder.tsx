import React from "react";
import styles from "./folder.module.scss";
import { ReactNode } from "react";

interface FolderProps {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean;
}

const Folder: React.FC<FolderProps> = ({ children, onSelect, isSelected }) => {
  return (
    <button
      className={`${styles.folder} ${isSelected ? styles.active : ""}`}
      onClick={onSelect}
    >
      <svg
        width="162"
        height="105"
        viewBox="0 0 162 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_3810_9076)">
          <path
            d="M20.6266 96.6228H8.75586V25.3438H11.5381V21.817H14.5057V18.2902H24.3362V12.1646H27.6748V8.82343H66.8111V12.3503H70.5207V18.6614H119.673V22.0026H126.165V30.9125M20.6266 96.6228H123.011V93.6529H126.165V86.9705H130.245V80.2881H133.584V76.7612H136.922V70.6357H140.632V63.7677H143.229V57.2709H146.567V47.2473H149.535V40.7505H153.245V30.9125H126.165M20.6266 96.6228V92.7248H23.5942V86.5992H27.6748V79.5456H30.2715V76.39H33.9811V69.7076H37.5052V62.8396H40.4729V56.1572H43.6261V46.5048H46.7792V40.008H50.4888V30.9125H126.165"
            stroke="#FFD600"
            strokeWidth="2.596"
            shapeRendering="crispEdges"
          />
        </g>
        <g filter="url(#filter1_d_3810_9076)">
          <path
            d="M127.094 38.5305V42.4285H125.239V45.7697H123.755V50.5959H121.158M137.851 38.5305V42.4285H135.997V45.7697H134.513V50.5959H131.916"
            stroke="white"
            strokeWidth="0.912035"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_3810_9076"
            x="0.868556"
            y="0.936"
            width="160.264"
            height="103.574"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.29473" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.839216 0 0 0 0 0 0 0 0 0.8 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3810_9076"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3810_9076"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_3810_9076"
            x="119.631"
            y="37.0028"
            width="20.2047"
            height="15.5768"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.763829" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.42 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3810_9076"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3810_9076"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <p>{children}</p>
    </button>
  );
};

export default Folder;
