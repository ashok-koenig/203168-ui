import React, { useState } from 'react'

interface IMovie{
    title: string
    year: number
    rating: number
    category?: string
}

export default function Movie() {
    const [movie, setMovie]= useState<IMovie>({title: "The Lion Kind", year: 2020, rating: 7})

    const handleUpdateRating = (rating:number)=>{
        setMovie((movie)=> ({...movie, rating}))
    }
    const handleAddCategory = (category: string)=>{
        setMovie((movie)=> {
            let updatedMovie = {...movie, category}
            return updatedMovie
        })
    }
  return (
    <div>
        <h2>Movie Detail</h2>
        <p>Title: {movie.title}</p>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
        <p>Category: {movie.category}</p>
        <button onClick={()=>handleUpdateRating(8)}>Update Rating</button>
        <button onClick={()=>handleAddCategory('Animation')}>Add Category</button>
    </div>
  )
}
