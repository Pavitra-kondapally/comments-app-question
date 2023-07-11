// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentdetails, toggleIsLike, deleteComment} = props
  const {name, comment, date, isLiked, initialClassName, id} = commentdetails

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickingLikeIcon = () => {
    toggleIsLike(id)
  }

  const onDeletingComment = () => {
    deleteComment(id)
  }

  return (
    <li className="each-comment">
      <div className="name-and-profile-details">
        <div className={initialClassName}>{name.slice(0, 1)}</div>
        <p className="username-style">{name}</p>
        <p className="time-style">{formatDistanceToNow(date)}</p>
      </div>
      <p className="comment-style">{comment}</p>
      <div className="icons-container">
        <div className="like-container">
          <button
            className="like-btn"
            type="button"
            onClick={onClickingLikeIcon}
          >
            <img src={likeImage} alt="like" /> Like
          </button>
          <button
            className="delete-image-btn"
            type="button"
            onClick={onDeletingComment}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="delete-img"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
