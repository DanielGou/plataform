import './Pages.css'
import { useState } from 'react'

function Sigup(){

    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    
    function  createUser(){
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
        
            fetch('http://localhost:9000/api/register', requestOptions)
                .then(res=>{
                    res.json()
                    console.log(res)
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
        </div>
    )
}

export default Sigup;