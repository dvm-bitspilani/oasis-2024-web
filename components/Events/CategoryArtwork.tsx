import Image, {type StaticImageData} from "next/image";

// Both original layouts select the same artwork for the current viewport.
// A hidden desktop or mobile copy therefore does not download a second set.
export default function CategoryArtwork({desktop, mobile, alt, width, height, className, critical = false}: {
  desktop: StaticImageData;
  mobile: StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  critical?: boolean;
}) {
  return <picture>
    <source media="(max-width: 549px)" srcSet={mobile.src} />
    <Image src={desktop} alt={alt} width={width} height={height} className={className} loading={critical ? "eager" : "lazy"} fetchPriority={critical ? "high" : "auto"} />
  </picture>;
}
