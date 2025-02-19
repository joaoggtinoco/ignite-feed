import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/67712405?v=4" />
                <strong>João Tinoco</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}