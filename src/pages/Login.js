import { useState } from 'react';
import './Pages.css'

function Login(){

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function login(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type':'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        }

        fetch('http://localhost:9000/api/login', requestOptions)
            .then(res=>{
                res.json()
                console.log(res)
                
            })
    }

    return(
        <div className='conteiner'>
            <div id='title'>Login</div>
            <div className='input'>Email: <input onChange={e=> setEmail(e.target.value)}/></div>
            <div className='input'>Senha:<input type='password' onChange={e=> setPassword(e.target.value)} /></div>
            <button onClick={login} className='btn-entry'>Entrar</button>
        </div>
    )
}

export default Login;