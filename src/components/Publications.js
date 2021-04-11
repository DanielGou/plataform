import './components.css'
import Card from './Card'
import { useEffect, useState } from 'react'

function Publications(){

    const [ posts, setPosts ] = useState([])

    useEffect(()=>{
        fetch('http://localhost:9000/api/listAllPosts', {method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
                setPosts(data)
                // console.log(data)
            // setPosts(data)
        })
    }, [])

    return(
        <div className='publi-conteiner'>
            { posts.map((post)=>{
                return(<Card key={post._id} id={post._id} title={post.title} author={post.authorName}/>)

            }) }
        </div>
    )
}

export default Publications;