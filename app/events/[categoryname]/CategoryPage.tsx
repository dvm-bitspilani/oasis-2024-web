import styles from "./categories.module.scss";
import Image from "next/image";
import Link from "next/link";
import grunge from "@/assets/Landing/Grunge.webp";
import music from "@/assets/Events/Folders/musicbg.webp";
import quizzes from "@/assets/Events/Folders/quizbg.webp";
import drama from "@/assets/Events/Folders/dramabg.webp";
import dance from "@/assets/Events/Folders/dancebg.webp";
import photography from "@/assets/Events/Folders/camerabg.webp";
import misc from "@/assets/Events/Folders/miscbg.webp";

const artwork = {music, quizzes, drama, dance, photography, misc};

export default function CategoryPage({params}: {params: {categoryname: string}}) {
  const category = params.categoryname as keyof typeof artwork;
  const title = category.toUpperCase();
  return <main className={styles.pageBody}>
    <div className={styles.pageContainer}>
      <Image src={grunge} alt="" draggable={false} className={styles.grunge} style={{height: "100lvh", width: "100vw", position: "absolute", pointerEvents: "none", top: 0, zIndex: 1}} />
      <Link href="/events/" prefetch={false} className={styles.backBtn} aria-label="Back to events">
              <svg
                width="76"
                height="60"
                viewBox="0 0 76 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.7706 2.2295C32.7704 1.22965 31.4141 0.667969 29.9999 0.667969C28.5857 0.667969 27.2294 1.22965 26.2293 2.2295L2.22925 26.2295C1.22941 27.2296 0.667725 28.586 0.667725 30.0002C0.667725 31.4144 1.22941 32.7707 2.22925 33.7708L26.2293 57.7708C27.2351 58.7423 28.5823 59.2799 29.9807 59.2678C31.3791 59.2556 32.7168 58.6947 33.7056 57.7059C34.6945 56.717 35.2554 55.3794 35.2675 53.981C35.2797 52.5826 34.7421 51.2354 33.7706 50.2295L19.3333 35.3335H69.9999C71.4144 35.3335 72.771 34.7716 73.7712 33.7714C74.7713 32.7712 75.3333 31.4147 75.3333 30.0002C75.3333 28.5857 74.7713 27.2291 73.7712 26.2289C72.771 25.2287 71.4144 24.6668 69.9999 24.6668H19.3333L33.7706 9.77083C34.7704 8.77068 35.3321 7.41437 35.3321 6.00016C35.3321 4.58595 34.7704 3.22964 33.7706 2.2295Z"
                  fill="white"
                />
              </svg>
      </Link>
      <div className={styles.textBackground} aria-hidden="true">
        <div className={styles.categoryTitle1}>{title.repeat(4)}</div>
        <div className={styles.categoryTitle2}>{title.repeat(4)}</div>
      </div>
      <div className={styles.eventDisplay}>
        <div className={styles.leftContent}><h1 className={styles.eventTitle}>{title}</h1></div>
        <div className={styles.rightContent}>
          <div className={styles.eventImageContainer}>
            <Image className={styles.eventImage} src={artwork[category] || misc} alt={`${title} category`} priority sizes="(max-width: 1148px) 85vw, 45vw" style={{objectFit: "contain"}} />
          </div>
        </div>
      </div>
    </div>
  </main>;
}
