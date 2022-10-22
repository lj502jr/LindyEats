import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import './PlaceItem.css'

const CommentItem = props => {
  return (
    <li className='place-item'>
      <Card className="place-item__content">
        <div className='place-item__comment'>
          <div className='place-item__image'>
            <img src={props.userImg} alt={props.userId}/>
          </div>
          <div className='place-item__info'>
            <h2>{props.user}</h2>
            <p>{props.content}</p>
          </div>
        </div>
        <div className='place-item__actions'>
          <Button inverse to={`/places/${props.userId}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  )
}

export default CommentItem
