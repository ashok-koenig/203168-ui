import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
    const {id} = useParams();
  return (
    <div>
        <p>A blog post (Id: {id}) detail comes here...</p>
    </div>
  )
}
