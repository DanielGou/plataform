import './Pages.css'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

function RenderPages({match}){

    const [ post, setPost ] = useState()

    const idPost = match.params.id

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-type':'application/json' },
        body: JSON.stringify({
            idPost
        })
    }
    
    useEffect(()=>{
        
        fetch('http://localhost:9000/api/getPost', requestOptions)
            .then(res=>res.json())
            .then(data=>{
                setPost(data.file)
            })
    },[])

    

    return(
        <div>
            <Header/>
            { post }
        </div>
    )
}

export default RenderPages;