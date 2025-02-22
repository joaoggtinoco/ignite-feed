import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css'
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR }
    )
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,
        {
            locale: ptBR,
            addSuffix: true,
        }
    )

    function handleCreateNewComment() {
        event.preventDefault()
        const newComment = event.target.comment.value
        setComments([...comments, newComment])
        setNewComment('')
    }

    function handleNewCommentChange(){
        setNewComment(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'text') {
                            return (<p>{line.content}</p>)
                        }
                        else if (line.type === 'link') {
                            return (<a>{line.content}</a>)
                        }
                    })
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe seu comentário' textarea
                    value={newComment}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment content={comment} />
                    })
                }
            </div>
        </article>
    );
}