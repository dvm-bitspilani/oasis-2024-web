import styles from './page.module.scss'
import AboutUsTitle from './Title/Title'

export default function AboutUsPage() {
    return (
        <main className={styles.aboutUs} id='aboutUs'>
            <AboutUsTitle />
        </main>
    )
}