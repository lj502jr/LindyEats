import React from "react"
import UserList from "../components/UserList"

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'John Barnes',
      image: 'https://forums.steamrep.com/data/avatars/l/93/93969.jpg?1436795071',
      comments: 3
    },
    {
      id: 'u2',
      name: 'Bill Franklin',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SkrmLf5uU2v1A9be2G_BBEXcESux_qOTyA&usqp=CAU',
      comments: 1
    },
    {
      id: 'u3',
      name: 'Jake Brumbaugh',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SkrmLf5uU2v1A9be2G_BBEXcESux_qOTyA&usqp=CAU',
      comments: 1
    },
    {
      id: 'u4',
      name: 'Paige Barnes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SkrmLf5uU2v1A9be2G_BBEXcESux_qOTyA&usqp=CAU',
      comments: 1
    },
    {
      id: 'u5',
      name: 'Jack Paynter',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SkrmLf5uU2v1A9be2G_BBEXcESux_qOTyA&usqp=CAU',
      comments: 1
    },
    {
      id: 'u6',
      name: 'William Judd',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SkrmLf5uU2v1A9be2G_BBEXcESux_qOTyA&usqp=CAU',
      comments: 1
    }
  ]

  return <UserList items={USERS} />
}

export default Users
