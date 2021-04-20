    import './components.css'
    import Card from './Card'
    import { useEffect, useState } from 'react'

    function Publications(){

        const [ posts, setPosts ] = useState([])
        const [ error, setError ] = useState('')

        useEffect(()=>{
            fetch('https://laese-api-com.umbler.net/api/listAllPosts', {method: 'GET'})
            .then(data=>data.json())
            .then(data=>{
                if(data.status === 'error'){
                    setError(data.error)
                }else{
                    setPosts(data)
                }
            })
        }, [])

        return(
            <div className='publi-conteiner'>
                { posts.map((post)=>{
                    return(<Card key={post._id} id={post._id} title={post.title} author={post.authorName}/>)
                })}
                <div className='msg-error'>{error}</div>
            </div>
        )
    }

    export default Publications;