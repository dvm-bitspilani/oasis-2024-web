import type {StaticImageData} from "next/image";

export type EventDataType = {
  name: string;
  about: string;
  club: string;
  img_url: string;
  img?: StaticImageData;
  largeImg?: StaticImageData;
};
