import './Pages.css'
import Header from '../components/Header'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'


function CreatePost(){

    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
    const [ error, setError ] = useState('')

    function handleEditorChange(content, editor){
        setText(content)
    }

    function submitServer(){

        if(title === ''){
            return setError('O post precisa de um título.')
        }

        if(text === ''){
            return setError('O post precisa de um texto')
        }

        const token = localStorage.getItem('token')

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type':'application/json' },
            body: JSON.stringify({
                token,
                title,
                text
            })
        }

        fetch('https://laese-api-com.umbler.net/api/create', requestOptions)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.status === 'ok'){
                    window.location = '/'
                }else{
                    if(data.error === 'invalid token'){
                        window.location = '/#/login'
                    }else{
                        setError(data.error)
                    }
                }
            })
    }

    return(
        <div className='create-page'>
            <Header/>
            <div className='create-area'>
                <div className='input'onChange={e=>setTitle(e.target.value)}>Título: <input/></div>
                <div id='editor'>
                    <Editor apiKey='i16cx9ndubdl8r7a5fela0gklwy83ce6kivvsm7r9pt4qfsc' 
                    init={{
                        height: 400,
                        automatic_uploads: true,
                        plugins: [
                          'image code advlist autolink lists link imagetools image charmap print preview anchor',
                          'searchreplace visualblocks code fullscreen',
                          'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                          // eslint-disable-next-line no-multi-str
                          'undo redo | formatselect | bold italic backcolor | \
                          alignleft aligncenter alignright alignjustify | \
                          bullist numlist outdent indent | removeformat | help '
                      }}
                      onEditorChange={handleEditorChange}
                    />
                    <button onClick={submitServer} className='btn-entry'>Criar Post</button>
                    <div className='msg-error'>{ error }</div>
                </div>
            </div>

        </div>
    )
}

export default CreatePost;