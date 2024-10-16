import styles from "./artist.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import MusicSection from "./MusicButtons/MusicButton";

interface Props {
  reverse: boolean;
  image: string | StaticImport;
  name: string;
  date: number;
  music: string;
  artist: string;
  spotifyUrl: string;
}

export default function Artist({
  reverse,
  image,
  name,
  date,
  music,
  artist,
  spotifyUrl,
}: Props) {
  return (
    <div
      className={reverse ? `${styles.artist} ${styles.reverse}` : styles.artist}
    >
      <div className={styles.imgContainer}>
        <Image
          src={image}
          alt={name}
          className={`${styles.image} ${
            date === 26
              ? styles.vishal
              : date === 25
              ? styles.seedhe
              : styles.diary
          }`}
        />
      </div>
      <div className={styles.description}>
        <p
          className={styles.name}
          style={
            name === "Vishal Mishra"
              ? {
                  marginTop: 40,
                }
              : {}
          }
        >
          {name}
        </p>
        <p className={styles.date}>{`October ${date}`}</p>
        <MusicSection
          artist={artist}
          music={music}
          spotifyUrl={spotifyUrl}
          reverse={!reverse}
        />
      </div>
    </div>
  );
}
