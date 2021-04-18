import './Pages.css'
import Header from '../components/Header'
import Publications from '../components/Publications'
import { FaBookOpen } from 'react-icons/fa';

function Home(){
    return(
        <div>
            <Header/>
            <div className='home-content'>
                <div>
                    <div className='home-logo'>
                        <FaBookOpen/>
                        <div>Læse</div>
                    </div>
                    <div>
                        Uma plataforma para publicar seus artigos, tutoriais, conteúdos e ainda monetizar.
                    </div>
                </div>
            </div>
            <Publications/>
        </div>
    )
}

export default Home;