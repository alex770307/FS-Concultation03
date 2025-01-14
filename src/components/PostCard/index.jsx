import style from './PostCard.module.css'


// eslint-disable-next-line react/prop-types, no-unused-vars
export default function PostCard({ id, title, description, likes, author_firstname, author_lastname, picture }) {
    return (
        <div className={style.post_card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{likes}</p>
            <p className={style.autor}>Autor: {author_firstname} {author_lastname}</p>
            <img src={picture} alt={title} />
        </div>
    )
}