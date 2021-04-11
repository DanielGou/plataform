import './components.css'
import { Link } from 'react-router-dom'

function Header(){

    const username = localStorage.getItem('username')

    if(username){
        
        return(
            <div className='header-conteiner'>
                <div className="nav-bar">
                    <a href>Logo</a>
                    <div className='right'>
                        <Link to='/create'>Criar</Link>
                        <div>{username}</div>
                    </div>
                </div>
            </div>
        )


    }else{
        return(
            <div className='header-conteiner'>
                <div className="nav-bar">
                    <a href>Logo</a>
                    <div className='right'>
                        <Link to='/create'>Criar</Link>
                        <Link to='/login'>Entrar</Link>
                        <Link to='/sigup'>Cadastrar-se</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
