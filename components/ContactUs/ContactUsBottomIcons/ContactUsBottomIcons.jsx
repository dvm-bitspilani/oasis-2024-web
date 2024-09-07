import styles from "./bottomIcons.module.scss";

import Image from "next/image";

import left from "@/assets/Landing/contactUs/left.png";
import right from "@/assets/Landing/contactUs/right.png";
import { useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function getRandomStats(
  startingYPoint,
  endingYPoint,
  startingYRange,
  endingYRange,
  startingXPoint,
  endingXPoint,
  startingXRange,
  endingXRange
) {
  const random = {};
  random.int = Math.floor(Math.random() * 4 + 1);
  random.file = `/ContactUs/FloatingSuits/suit${random.int}.svg`;

  random.startingY = Math.floor(
    Math.random() * startingYRange + startingYPoint
  );
  random.startingX = Math.floor(
    Math.random() * startingXRange + startingXPoint
  );

  random.endingY = Math.floor(Math.random() * endingYRange + endingYPoint);
  random.endingX = Math.floor(Math.random() * endingXRange + endingXPoint);

  return random;
}

function generateRandomStatesArray(
  number,
  startingYPoint,
  endingYPoint,
  startingYRange,
  endingYRange,
  startingXPoint,
  endingXPoint,
  startingXRange,
  endingXRange
) {
  const randomArray = [];
  for (let i = 0; i < number; i++) {
    randomArray.push(
      getRandomStats(
        startingYPoint,
        endingYPoint,
        startingYRange,
        endingYRange,
        startingXPoint,
        endingXPoint,
        startingXRange,
        endingXRange
      )
    );
  }
  return randomArray;
}

export default function ContactUsBottomIcons() {
  const numberOfRandom = 4;
  // const randomGenerationConfig = [32, -10, 30, 40, 25, 86, 0, 0];
    const randomGenerationConfig = useMemo(() => {
      return [32, -10, 30, 40, 25, 86, 0, 0];
    }, []);

  const [randomLeft1, setrandomLeft1] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationConfig)
  );

  const [randomLeft2, setrandomLeft2] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationConfig)
  );

  const [randomRight1, setRandomRight1] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationConfig)
  );

  const [randomRight2, setRandomRight2] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationConfig)
  );

  const randomSetImageLeft1 = randomLeft1.map((item, key) => {
    return (
      <Image
        suppressHydrationWarning
        key={key}
        id={`left_1_${key}`}
        className={styles.leftSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  const randomSetImageLeft2 = randomLeft2.map((item, key) => {
    return (
      <Image
        suppressHydrationWarning
        key={key}
        id={`left_2_${key}`}
        className={styles.leftSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  const randomSetImageRight1 = randomRight1.map((item, key) => {
    return (
      <Image
        suppressHydrationWarning
        key={key}
        id={`right_1_${key}`}
        className={styles.rightSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  const randomSetImageRight2 = randomRight2.map((item, key) => {
    return (
      <Image
        suppressHydrationWarning
        key={key}
        id={`right_2_${key}`}
        className={styles.rightSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  useGSAP(() => {
    randomLeft1.forEach((item, key) => {
      gsap.set(`#left_1_${key}`, {
        right: `${item.startingX}%`,
        top: `${item.startingY}%`,
        opacity: 0,
        scale: 0.3,
      });
      const tl = gsap.timeline({
        onComplete: () => {
          if (key === randomLeft1.length - 1) {
            // console.log("Animation 1 complete");
            setrandomLeft1(
              generateRandomStatesArray(
                numberOfRandom,
                ...randomGenerationConfig
              )
            );
          }
        },
      });
    });
  }, {});

  return (
    <>
      <div className={styles.left}>
        {randomSetImageLeft1}
        {randomSetImageLeft2}
      </div>
      <div className={styles.right}>
        {randomSetImageRight1}
        {randomSetImageRight2}
      </div>
    </>
  );
}
