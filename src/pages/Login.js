import { useState } from 'react';
import './Pages.css'

function Login(){

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    function login(){

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type':'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        }

        fetch('https://laese-api-com.umbler.net/api/login', requestOptions)
            .then(res=>{
                return res.json()
            }).then(data =>{

                if(data.status === 'error'){
                    setError(data.error)
                }else{
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('username', data.username)

                    window.location = '/'
                }
            })

    }

    return(
        <div className='conteiner'>
            <div id='title'>Login</div>
            <div className='input'>Email: <input onChange={e=> setEmail(e.target.value)}/></div>
            <div className='input'>Senha:<input type='password' onChange={e=> setPassword(e.target.value)} /></div>
            <button onClick={login} className='btn-entry'>Entrar</button>
            <div className='msg-error'>{ error }</div>
        </div>
    )
}

export default Login;