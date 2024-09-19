import image from '@/assets/Events/Carousel/event.png'
import { StaticImageData } from 'next/image'

type EventDataType = {
    name: string,
    desc: string,
    img: StaticImageData
}

export const DUMMY_DATA: EventDataType[] = [
    {
        name: "BIG EVENT NAME",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image
    },
    {
        name: "BIG EVENT NAME",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image
    },
    {
        name: "BIG EVENT NAME",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image
    },
    {
        name: "BIG EVENT NAME",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image
    },
    {
        name: "BIG EVENT NAME",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image
    },
    {
        name: "BIG EVENT NAME",
        desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem",
        img: image
    },
]