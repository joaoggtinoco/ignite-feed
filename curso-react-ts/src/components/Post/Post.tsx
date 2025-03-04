import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css'
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {

    avatarUrl: string;
    name: string;
    role: string;
}

interface Content {
    id: number,
    type: 'text' | 'link';
    content: string;
}

export interface PostType {
    id: number,
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([''])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR }
    )
    const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt,
        {
            locale: ptBR,
            addSuffix: true,
        }
    )

    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Campo obrigatório');
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>
            <div className={styles.content}>
                {
                    post.content.map(line => {
                        if (line.type === 'text') {
                            return (<p key={line.id}>{line.content}</p>)
                        }
                        else if (line.type === 'link') {
                            return (<a key={line.id}>{line.content}</a>)
                        }
                    })
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    required //No react quando a prop for booleana, caso o valor desejado deja true, não é preciso passar o valor pois vem default
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment
                                key={comment}
                                comment={comment}
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                }
            </div>
        </article>
    );
}