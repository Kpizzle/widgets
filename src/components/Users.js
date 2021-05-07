import React, { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUserList = async () => {
            const { data } = await axios.get(URL)
            console.log(data)
            setUsers(data)
        }

        getUserList()
    }, [])

    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>
    })

    return <ul>{renderedUsers}</ul>
}

export default Users
