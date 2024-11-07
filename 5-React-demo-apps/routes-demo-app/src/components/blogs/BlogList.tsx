import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList() {
    const postIds = [101, 102, 103, 104, 105]
  return (
    <div>
        <p>List of blogs comes here..</p>
        {
            postIds.map((id, index)=>(
                                <div key={index}>
                                    <Link to={'/blogs/'+id}>Blog post {id}</Link>
                                </div>))
        }
    </div>
  )
}
