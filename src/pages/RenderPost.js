import './Pages.css'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

function RenderPages({match}){

    const [ post, setPost ] = useState()
    const [ error, setError ] = useState('')

    const idPost = match.params.id

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-type':'application/json' },
        body: JSON.stringify({
            idPost
        })
    }
    
    useEffect(()=>{
        
        fetch('http://laese-api-com.umbler.net/api/getPost', requestOptions)
            .then(res=>res.json())
            .then(data=>{
                if(data.status === 'error'){
                    setError(data.error)
                }else{
                    setPost(data.file)
                }
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    

    return(
        <div>
            <Header/>
            <div className='render-post' dangerouslySetInnerHTML={{__html: post}} />;
            <div className='msg-error'>{error}</div>
        </div>
    )
}

export default RenderPages;