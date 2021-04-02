import './components.css'

function Card(props){
    return(
        <div className='card-conteiner'>
            <div id='img-card'>{props.img?<img src={props.img} alt=''></img>:''}</div>
            <div className='text-card'>
                <div id='title-card'>{props.title}</div>
                <div id='resume-card'>{props.resume}</div>
            </div>

        </div>
    )
}

export default Card;