import './styles.css'

export const PostCard = ({title, cover, body}) => {
    return (
        <div className="post">
            <img src={cover} alt="img" />
            <div className='postText'>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}