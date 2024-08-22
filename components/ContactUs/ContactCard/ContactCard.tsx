import React from "react";
import styles from "./contactcard.module.scss";
import background from "../../../assets/Landing/contactUs/contactbg.svg";
import profile from "../../../assets/Landing/contactUs/profile.png";
import Image from "next/image";

export default function ContactCard() {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <svg
          width="18"
          height="36"
          viewBox="0 0 18 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.32596 6.68728L13.7 17.9553C13.868 18.3873 14.054 18.6873 14.258 18.8553C14.474 19.0113 14.666 19.0953 14.834 19.1073V19.4673C14.474 19.4433 14.048 19.4313 13.556 19.4313C13.076 19.4193 12.59 19.4133 12.098 19.4133C11.546 19.4133 11.024 19.4193 10.532 19.4313C10.04 19.4313 9.64996 19.4433 9.36196 19.4673V19.1073C9.97396 19.0833 10.358 18.9813 10.514 18.8013C10.682 18.6093 10.646 18.2073 10.406 17.5953L7.34596 9.22529L7.66996 8.75728L4.93396 15.8853C4.66996 16.5453 4.50796 17.0853 4.44796 17.5053C4.39996 17.9253 4.42996 18.2493 4.53796 18.4773C4.65796 18.7053 4.84396 18.8673 5.09596 18.9633C5.35996 19.0473 5.67196 19.0953 6.03196 19.1073V19.4673C5.63596 19.4433 5.25796 19.4313 4.89796 19.4313C4.53796 19.4193 4.17196 19.4133 3.79996 19.4133C3.53596 19.4133 3.28396 19.4193 3.04396 19.4313C2.81596 19.4313 2.61196 19.4433 2.43196 19.4673V19.1073C2.68396 19.0593 2.94196 18.8973 3.20596 18.6213C3.46996 18.3453 3.72796 17.8773 3.97996 17.2173L8.08396 6.68728C8.27596 6.69928 8.47996 6.70528 8.69596 6.70528C8.92396 6.70528 9.13396 6.69928 9.32596 6.68728ZM10.586 14.2833V14.6433H5.22196L5.40196 14.2833H10.586Z"
            fill="url(#paint0_linear_2067_3381)"
          />
          <path
            d="M3.2117 30.7604C1.84034 29.0773 1.51521 26.7289 3.01943 25.1909C4.64518 23.5286 7.11948 24.0103 8.62074 25.5453C10.122 24.0104 12.5963 23.5286 14.2221 25.1909C15.7263 26.7289 15.4011 29.0773 14.0298 30.7604C12.5489 32.5779 10.5215 34.1394 8.62074 35.4936C6.71999 34.1394 4.69257 32.5779 3.2117 30.7604Z"
            fill="url(#paint1_linear_2067_3381)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2067_3381"
              x1="0.125151"
              y1="0.688956"
              x2="24.5863"
              y2="10.1294"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D4A753" />
              <stop offset="0.39" stop-color="#93702D" />
              <stop offset="0.97" stop-color="#D4A753" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2067_3381"
              x1="2.08023"
              y1="24.2353"
              x2="15.721"
              y2="34.5396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D4A753" />
              <stop offset="0.39" stop-color="#93702D" />
              <stop offset="0.97" stop-color="#D4A753" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.center}>
        <div className={styles.name}>Praneel Maddula</div>
        <div className={styles.imgContainer}>
          <Image
            src={background}
            alt="profile pic"
            className={styles.backgroundImg}
          />
          <Image
            src={profile}
            alt="profile pic"
            width={130}
            height={150}
            className={styles.profileImg}
          />
        </div>
        <div className={styles.desc}>Website, App & Online Payments</div>
        <div className={styles.buttons}>
          <a target="_blank" rel="noopener noreferrer" href="tel:+919928057474">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0108 21.3439C17.6382 21.3439 15.294 20.8268 12.9782 19.7927C10.6625 18.7586 8.55558 17.2921 6.65745 15.3932C4.75931 13.4943 3.29319 11.3874 2.25908 9.07242C1.22498 6.75745 0.707546 4.41325 0.706787 2.03982C0.706787 1.69816 0.820675 1.41344 1.04845 1.18566C1.27623 0.957882 1.56095 0.843994 1.90261 0.843994H6.51509C6.78082 0.843994 7.01809 0.934345 7.22689 1.11505C7.43568 1.29575 7.55906 1.5091 7.59702 1.7551L8.3373 5.74119C8.37526 6.04489 8.36577 6.30114 8.30882 6.50993C8.25188 6.71873 8.14748 6.89905 7.99563 7.0509L5.23384 9.84116C5.61347 10.5435 6.06409 11.2219 6.5857 11.8763C7.1073 12.5308 7.68168 13.1621 8.30882 13.7703C8.89725 14.3587 9.51414 14.9046 10.1595 15.408C10.8049 15.9114 11.4882 16.3715 12.2095 16.7883L14.8859 14.112C15.0567 13.9411 15.2799 13.8132 15.5555 13.7282C15.8311 13.6431 16.1014 13.6192 16.3664 13.6564L20.2956 14.4536C20.5613 14.5296 20.7796 14.6674 20.9504 14.867C21.1212 15.0667 21.2067 15.2896 21.2067 15.5356V20.148C21.2067 20.4897 21.0928 20.7744 20.865 21.0022C20.6372 21.23 20.3525 21.3439 20.0108 21.3439Z"
                fill="url(#paint0_linear_2067_3388)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2067_3388"
                  x1="-3"
                  y1="1"
                  x2="24"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C99D4C" />
                  <stop offset="0.375" stop-color="#84611F" />
                  <stop offset="1" stop-color="#CEA14F" />
                </linearGradient>
              </defs>
            </svg>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:f20231342@pilani.bits-pilani.ac.in"
          >
            <svg
              width="27"
              height="22"
              viewBox="0 0 27 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1317 6.16292V17.4016C26.1317 18.4471 25.7164 19.4499 24.9771 20.1892C24.2377 20.9285 23.235 21.3439 22.1895 21.3439H4.84341C3.79785 21.3439 2.79511 20.9285 2.05579 20.1892C1.31647 19.4499 0.901123 18.4471 0.901123 17.4016V6.16292L13.1159 13.3505C13.2372 13.4221 13.3755 13.4598 13.5164 13.4598C13.6573 13.4598 13.7956 13.4221 13.917 13.3505L26.1317 6.16292ZM22.1895 0.843994C23.1595 0.843842 24.0955 1.20133 24.8185 1.84808C25.5415 2.49482 26.0006 3.38541 26.1081 4.34947L13.5164 11.7562L0.924777 4.34947C1.03226 3.38541 1.4914 2.49482 2.21437 1.84808C2.93734 1.20133 3.87337 0.843842 4.84341 0.843994H22.1895Z"
                fill="url(#paint0_linear_2067_3389)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2067_3389"
                  x1="1"
                  y1="1"
                  x2="26"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D4A753" />
                  <stop offset="0.39" stop-color="#93702D" />
                  <stop offset="0.97" stop-color="#D4A753" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <svg
          width="18"
          height="36"
          viewBox="0 0 18 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.85477 29.5568L14.2288 18.2888C14.3968 17.8568 14.5828 17.5568 14.7868 17.3888C15.0028 17.2328 15.1948 17.1488 15.3628 17.1368V16.7768C15.0028 16.8008 14.5768 16.8128 14.0848 16.8128C13.6048 16.8248 13.1188 16.8308 12.6268 16.8308C12.0748 16.8308 11.5528 16.8248 11.0608 16.8128C10.5688 16.8128 10.1788 16.8008 9.89077 16.7768V17.1368C10.5028 17.1608 10.8868 17.2628 11.0428 17.4428C11.2108 17.6348 11.1748 18.0368 10.9348 18.6488L7.87477 27.0188L8.19877 27.4868L5.46277 20.3588C5.19877 19.6988 5.03677 19.1588 4.97677 18.7388C4.92877 18.3188 4.95877 17.9948 5.06677 17.7668C5.18677 17.5388 5.37277 17.3768 5.62477 17.2808C5.88877 17.1968 6.20077 17.1488 6.56077 17.1368V16.7768C6.16477 16.8008 5.78677 16.8128 5.42677 16.8128C5.06677 16.8248 4.70077 16.8308 4.32877 16.8308C4.06477 16.8308 3.81277 16.8248 3.57277 16.8128C3.34477 16.8128 3.14077 16.8008 2.96077 16.7768V17.1368C3.21277 17.1848 3.47077 17.3468 3.73477 17.6228C3.99877 17.8988 4.25677 18.3668 4.50877 19.0268L8.61277 29.5568C8.80477 29.5448 9.00877 29.5388 9.22477 29.5388C9.45277 29.5388 9.66277 29.5448 9.85477 29.5568ZM11.1148 21.9608V21.6008H5.75077L5.93077 21.9608H11.1148Z"
            fill="url(#paint0_linear_2067_3384)"
          />
          <path
            d="M3.74344 5.48393C2.37207 7.167 2.04695 9.51546 3.55117 11.0534C5.17692 12.7157 7.65122 12.234 9.15248 10.699C10.6538 12.234 13.128 12.7157 14.7538 11.0534C16.258 9.51546 15.9329 7.167 14.5615 5.48393C13.0807 3.66647 11.0532 2.10491 9.15248 0.750718C7.25173 2.10492 5.22431 3.66647 3.74344 5.48393Z"
            fill="url(#paint1_linear_2067_3384)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2067_3384"
              x1="19.9998"
              y1="31.4114"
              x2="-1.75658"
              y2="19.1657"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D4A753" />
              <stop offset="0.531127" stop-color="#93702D" />
              <stop offset="1" stop-color="#D4A753" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2067_3384"
              x1="17.3597"
              y1="10.3952"
              x2="7.49413"
              y2="-0.473616"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D4A753" />
              <stop offset="0.531127" stop-color="#93702D" />
              <stop offset="1" stop-color="#D4A753" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
