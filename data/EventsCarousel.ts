import image from '@/assets/Events/Carousel/event.png'
import largeImage from '@/assets/Events/Carousel/eventLarge.png'
import { StaticImageData } from 'next/image'

export type EventDataType = {
    name: string,
    desc: string,
    club: string,
    img: StaticImageData
    largeImg: any
}

export const DUMMY_DATA: EventDataType[] = [
    {
        name: "BIG EVENT NAME 1",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image,
        largeImg: largeImage,
        club: "Name of Conducting the Event"
    },
    {
        name: "BIG EVENT NAME 2",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image,
        largeImg: largeImage,
        club: "Name of Conducting the Event"
    },
    {
        name: "BIG EVENT NAME 3",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image,
        largeImg: largeImage,
        club: "Name of Conducting the Event"
    },
    {
        name: "BIG EVENT NAME 4",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image,
        largeImg: largeImage,
        club: "Name of Conducting the Event"
    },
    {
        name: "BIG EVENT NAME 5",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image,
        largeImg: largeImage,
        club: "Name of Conducting the Event"
    },
    {
        name: "BIG EVENT NAME 6",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image,
        largeImg: largeImage,
        club: "Name of Conducting the Event"
    },
]