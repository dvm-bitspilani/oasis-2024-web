import image from "@/assets/Events/Carousel/event.png";
import largeImage from "@/assets/Events/Carousel/eventLarge.png";
import { StaticImageData } from "next/image";

export type EventDataType = {
  name: string;
  about: string;
  club: string;
  img: StaticImageData;
  largeImg: any;
  img_url: string;
};

// export const DUMMY_DATA: EventDataType[] = [
//     {
//         name: "BIG EVENT NAME 1",
//         about: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
//         img: image,
//         largeImg: largeImage,
//         club: "Name of Conducting the Event"
//     },
//     {
//         name: "BIG EVENT NAME 2",
//         about: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
//         img: image,
//         largeImg: largeImage,
//         club: "Name of Conducting the Event"
//     },
//     {
//         name: "BIG EVENT NAME 3",
//         about: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
//         img: image,
//         largeImg: largeImage,
//         club: "Name of Conducting the Event"
//     },
//     {
//         name: "BIG EVENT NAME 4",
//         about: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
//         img: image,
//         largeImg: largeImage,
//         club: "Name of Conducting the Event"
//     },
//     {
//         name: "BIG EVENT NAME 5",
//         about: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
//         img: image,
//         largeImg: largeImage,
//         club: "Name of Conducting the Event"
//     },
//     {
//         name: "BIG EVENT NAME 6",
//         about: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
//         img: image,
//         largeImg: largeImage,
//         club: "Name of Conducting the Event"
//     },
// ]
