import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
        const {name} = useParams()
  return (
    <div>
        <p>Here is user {name} from URL</p>
    </div>
  )
}

export default User