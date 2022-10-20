import React from "react"
import './UserItem.css'
import '../../shared/components/UIElements/Avatar'

const UserItem = props => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.commentCount} {props.commentCount === 1 ? "Comment" : "Comments"}
          </h3>
        </div>
      </div>
    </li>
  )
}

export default UserItem
