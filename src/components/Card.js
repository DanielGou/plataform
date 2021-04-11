import './components.css'
import { Link } from 'react-router-dom'

function Card(props){
    return(
        <Link to={`/post/${props.id}`} className='card-conteiner'>
            <div id='title-card'>{props.title}</div>
            <div id='author-card'>{props.author}</div>
        </Link>
    )
}

export default Card;