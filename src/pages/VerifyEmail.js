import './Pages.css'
import { useState, useEffect } from 'react'


let min = 10000;
let max = 10000000;
let code = Math.floor(Math.random() * (max - min + 1)) + min;

const token = localStorage.getItem('token')

const requestOptions = {
    method: 'POST',
    headers: { 'Content-type':'application/json' },
    body: JSON.stringify({
        code,
        token
    })
}


function VerifyEmail(){
    
    
    const [ input, setInput ] = useState('')
    const [ error, setError ] = useState('')


    useEffect(()=>{       
        fetch('http://localhost:9000/api/sendEmailVerify', requestOptions)
            .then(res=>{
                res.json()
            }).then(data=> {
                console.log(data)
            })
    }, [])
    

    
    function checkedEmail(){

        if(Number(input)===code){

            console.log('ok' + input + code)

            fetch('http://localhost:9000/api/checkUserEmail', requestOptions)
                .then(res=> res.json())
                .then(data=>{
                    if(data.status==='ok'){
                        window.location = '/'
                    }
                })

        }else{
            setError('Codigo invalido')
        }

    }


    return(
        <div className='conteiner'>
            <div id='title'>Verifique seu Email</div>
            <div>Enviamos um email com um codigo, digite aqui embaixo.</div>
            <input onChange={e=> setInput(e.target.value)} className='input'/>
            <button onClick={checkedEmail} className='btn-entry'>Verificar</button>
            <div className='msg-error'>{error}</div>
        </div>
    )
}

export default VerifyEmail;