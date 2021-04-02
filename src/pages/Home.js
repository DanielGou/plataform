import './Pages.css'
import Header from '../components/Header'
import Publications from '../components/Publications'

function Home(){
    return(
        <div>
            <Header/>
            <div className='home-content'>
                <div className='home-logo'>
                    <a href>Logo</a>
                    <div>
                        Uma plataforma para publicar seus artigos, tutoriais, conteudos e ainda monetizar.
                    </div>
                </div>
            </div>
            <Publications/>
        </div>
    )
}

export default Home;