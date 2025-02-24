
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

interface CommentProps{
  comment: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ comment, onDeleteComment }: CommentProps) {

  const [likes, setLikes] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  function handleNewLike() {
    setLikes(state => {
      return state + 1
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/67712405?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Tinoco</strong>
              <time title="Teste na Data" dateTime="2022-05-11 08:23:30">Publicado há 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleNewLike}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>

  );
} 