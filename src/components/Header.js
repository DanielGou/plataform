import './components.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className='header-conteiner'>
            <div className="nav-bar">
                <a href>Logo</a>
                <div className='right'>
                    <a href>Sobre</a>
                    <Link to='/publications'>Publicações</Link>
                    <Link to='/login'>Entrar</Link>
                    <Link to='/sigup'>Cadastrar-se</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
