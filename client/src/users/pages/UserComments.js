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
    id: 'c2',
    user: 'John Barnes',
    userId: 'u1',
    userImg: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
    content: 'Giggity'
  },
  {
    id: 'c3',
    user: 'John Barnes',
    userId: 'u1',
    userImg: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
    content: 'Shooo-weee'
  },
  {
    id: 'c4',
    user: 'Paige Barnes',
    userId: 'u2',
    userImg: 'https://m.media-amazon.com/images/I/31mxcsDxJqL.jpg',
    content: 'I\'m Paige'
  },
  {
    id: 'c5',
    user: 'Jill Barnes',
    userId: 'u3',
    userImg: 'https://i.pinimg.com/236x/b4/f1/f1/b4f1f19330a0542e69f1ea8c92ced4fc.jpg',
    content: 'I\'m Jill'
  },
  {
    id: 'c6',
    user: 'Jill Barnes',
    userId: 'u3',
    userImg: 'https://i.pinimg.com/236x/b4/f1/f1/b4f1f19330a0542e69f1ea8c92ced4fc.jpg',
    content: 'Shooo-weee these grits are good'
  },
  {
    id: 'c7',
    user: 'Jill Barnes',
    userId: 'u3',
    userImg: 'https://i.pinimg.com/236x/b4/f1/f1/b4f1f19330a0542e69f1ea8c92ced4fc.jpg',
    content: 'I like schnitzel'
  },
  {
    id: 'c8',
    user: 'Jill Barnes',
    userId: 'u3',
    userImg: 'https://i.pinimg.com/236x/b4/f1/f1/b4f1f19330a0542e69f1ea8c92ced4fc.jpg',
    content: 'I like Dateline'
  },
  {
    id: 'c9',
    user: 'Jill Barnes',
    userId: 'u3',
    userImg: 'https://i.pinimg.com/236x/b4/f1/f1/b4f1f19330a0542e69f1ea8c92ced4fc.jpg',
    content: 'We should make more tacos'
  }
]

const UserComments = () => {
  const userId = useParams().userId
  const loadedComments = DUMMY_COMMENTS.filter(comment => comment.userId === userId)
  return <CommentList items={loadedComments} />
}

export default UserComments
