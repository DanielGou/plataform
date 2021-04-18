import './Pages.css'
import { useState } from 'react'

function Sigup(){

    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    
    function  createUser(){

        if(name < 3){
            setError('Nome muito curto. Mínimo 3 caracteres.')
        }

        if(username < 4){
            setError('Nome de usuário muito curto. Mínimo 4 caracteres.')
        }

        if(password < 6){
            setError('Senha muito curta. Mínimo 6 caracteres.')
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ 
                name,
                username,
                email,
                password
             })
        }
        
            fetch('http://10.0.0.9:9000/api/register', requestOptions)
                .then(res=>{
                    return res.json()
                }).then (data=>{
                    if(data.status === 'error'){
                        setError(data.error)
                    }else{
                        localStorage.setItem('token', data.token)
                        localStorage.setItem('username', data.username)
                        window.location = '/chekedEmail'
                    }
                })
    }

    

    return(
        <div className='conteiner'>
            <div id='title'>Cadastrar-se</div>
            <div className='input'>Nome: <input onChange={e=> setName(e.target.value)}/></div>
            <div className='input'>Usuario: <input onChange={e=> setUsername(e.target.value)}/></div>
            <div className='input'>Email: <input onChange={e=> setEmail(e.target.value)}/></div>
            <div className='input'>Senha: <input type='password' onChange={e=> setPassword(e.target.value)}/></div>
            <button onClick={createUser} className='btn-entry'>Entrar</button>
            <div className='msg-error'>{ error }</div>
        </div>
    )
}

export default Sigup;