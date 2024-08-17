import styles from './page.module.scss'
import AboutUsTitle from './Title/Title'

export default function AboutUsPage() {
    return (
        <main className={styles.aboutUs} id='aboutUs'>
            <AboutUsTitle />
            <p className={styles.text}>Oasis, the annual cultural extravaganza of Birla Institute of Technology and Science, Pilani, has been a vibrant part of India&APOS;s cultural tapestry since 1971. Managed entirely by students, it&APOS;s a dazzling showcase of talent in Dance, Drama, Literature, Comedy, Fashion, and Music. It&APOS;s where dreams come alive, laughter fills the air, and creativity knows no bounds. Step into the world of Oasis, where youth&APOS;s boundless potential shines.</p>
        </main>
    )
}