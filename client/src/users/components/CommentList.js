import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import CommentItem from './CommentItem'
import './PlaceList.css'

const CommentList = props => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No comments found. Maybe create one?</h2>
        </Card>
      </div>
    )
  }
  return (
    <ul className='place-list'>
      {props.items.map(comment => <CommentItem key={comment.id} id={comment.id} user={comment.user} userId={comment.userId} userImg={comment.userImg} content={comment.content} />)}
    </ul>
  )
}

export default CommentList
