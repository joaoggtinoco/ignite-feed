import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/67712405?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>João Tinoco</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <time title="Teste na Data" dateTime="2022-05-11 08:23:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Aqui é o primeiro</p>
                <p>teste do Post</p>
                <p><a href="">jane.teste/doctorcare</a></p>
                <p><a href="">#teste1 #test2 #teste3</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

        </article>
    );
}