import styles from './page.module.scss'
import AboutUsTitle from './Title/Title'

export default function AboutUsPage() {
    return (
        <main className={styles.aboutUs} id='aboutUs'>
            <AboutUsTitle />
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quibusdam dicta minima possimus asperiores quaerat molestiae nesciunt error eligendi dolores ducimus nobis nisi impedit ullam pariatur nihil expedita suscipit culpa.
                Error odit, sapiente voluptatum harum quod molestiae! Officia, distinctio tempore, sapiente maiores, neque iusto cum necessitatibus asperiores doloribus fuga repudiandae? Voluptatibus placeat laudantium esse, excepturi itaque error quae neque officia!</p>
        </main>
    )
}