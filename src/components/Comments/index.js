import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    noOfComments: 0,
    commentsList: [],
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      noOfComments: prevState.noOfComments - 1,
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment, noOfComments} = this.state
    const initialBackgroundColorClassName = `profile-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [prevState.commentsList, newComment],
      name: '',
      comment: '',
      noOfComments: prevState.noOfComments + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {noOfComments, commentsList} = this.state
    return (
      <div className="container">
        <div className="top-container">
          <div className="input-comments-container">
            <h1 className="heading-style">Comments</h1>
            <p className="desc-style">Say something about 4.0 technologies</p>
            <form
              className="comments-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                className="name-input-box"
                type="text"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                className="comment-input-box"
                type="text"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />

              <button className="btn-style" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
        </div>
        <ul className="comments-table">
          <p className="no-of-comments-title">
            <span className="no-of-comments-container">{noOfComments}</span>{' '}
            Comments
          </p>
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentdetails={eachComment}
              toggleIsLike={this.toggleIsLike}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
