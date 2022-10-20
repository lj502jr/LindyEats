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
      id: 'u1',
      name: 'John Barnes',
      image: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
      comments: 3
    },{
      id: 'u1',
      name: 'John Barnes',
      image: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
      comments: 3
    }
  ]

  return <UserList items={USERS} />
}

export default Users
