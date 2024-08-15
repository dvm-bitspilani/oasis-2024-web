import styles from './page.module.scss'
import AboutUsTitle from './Title/Title'

export default function AboutUsPage() {
    return (
        <main className={styles.aboutUs} id='aboutUs'>
            <AboutUsTitle />
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos quibusdam sit itaque ducimus quo dolorum placeat sequi quidem ullam illum quod voluptatem beatae error, eos totam pariatur nihil iure?
                Eos molestias dolorem quasi minima ducimus incidunt excepturi accusamus doloribus! Dicta neque, quasi odio id, possimus doloremque nam suscipit dolorem, consequuntur ex at delectus repudiandae! Mollitia harum atque omnis inventore.
                Laudantium optio quibusdam sequi quaerat laborum soluta natus? Dolorum commodi in possimus nam. Exercitationem nostrum harum maxime sapiente aut quasi quam est quidem odio earum modi suscipit, animi sint recusandae?
                Deserunt aspernatur a, blanditiis rem pariatur fugiat consectetur dolorem. Impedit optio modi ullam nam nemo accusantium, quae porro aspernatur, exercitationem cumque aliquam molestias excepturi pariatur in magnam quidem a atque.
                Quaerat fugit officia ullam autem molestias fuga alias porro voluptatum sapiente doloribus facilis dolor, accusantium, voluptatem dicta mollitia, debitis eaque ad laudantium delectus. Nisi error ea architecto itaque quod nemo!
                Tempore officiis facilis debitis minus? Perspiciatis iste alias totam minus odio molestiae quidem tempore magni accusantium quasi maxime debitis soluta voluptatem suscipit, reprehenderit unde nihil distinctio laudantium, ratione aut amet.</p>
        </main>
    )
}