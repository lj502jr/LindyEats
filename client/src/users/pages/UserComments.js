import React from 'react'
import { useParams } from 'react-router-dom'

import CommentList from '../components/CommentList'

const DUMMY_COMMENTS = [
  {
    id: 'c1',
    user: 'John Barnes',
    userId: 'u1',
    userImg: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
    content: 'Wow what a nice website'
  },
  {
    id: 'c1',
    user: 'John Barnes',
    userId: 'u1',
    userImg: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
    content: 'Giggity'
  },
  {
    id: 'c1',
    user: 'John Barnes',
    userId: 'u1',
    userImg: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
    content: 'Shooo-weee'
  }
]

const UserComments = () => {
  const userId = useParams().userId
  const loadedComments = DUMMY_COMMENTS.filter(comment => comment.userId === userId)
  return <CommentList items={loadedComments} />
}

export default UserComments
