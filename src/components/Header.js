import './components.css'
import { FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Header(){

    const username = localStorage.getItem('username')

    if(username){
        
        return(
            <div className='header-conteiner'>
                <div className="nav-bar">
                    <div className='logo'>
                        <Link to='/'>AtViden </Link>
                        <FaBookOpen/>
                    </div>
                    <div className='right'> 
                        <Link to='/create'>Criar</Link>
                        <Link>{username}</Link>
                    </div>
                </div>
            </div>
        )


    }else{
        return(
            <div className='header-conteiner'>
                <div className="nav-bar">
                    <div className='logo'>
                        <Link to='/'>Læse </Link>
                        <FaBookOpen/>
                    </div>
                    <div className='right'>
                        <Link to='/login'>Entrar</Link>
                        <Link to='/sigup'>Cadastrar-se</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
