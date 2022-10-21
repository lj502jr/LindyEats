import React from "react"
import UserList from "../components/UserList"

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'John Barnes',
      image: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
      comments: 3
    },{
      id: 'u2',
      name: 'Paige Barnes',
      image: 'https://m.media-amazon.com/images/I/31mxcsDxJqL.jpg',
      comments: 1
    },{
      id: 'u3',
      name: 'Jill Barnes',
      image: 'https://i.pinimg.com/236x/b4/f1/f1/b4f1f19330a0542e69f1ea8c92ced4fc.jpg',
      comments: 5
    }
  ]

  return <UserList items={USERS} />
}

export default Users
