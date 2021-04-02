import './components.css'
import Card from './Card'

function Publications(){
    return(
        <div className='publi-conteiner'>
            <Card title='title' resume='resume'/>
            <Card title='title' resume='resume'/>
            <Card title='title' resume='resume '/>
        </div>
    )
}

export default Publications;