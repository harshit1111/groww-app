
import NotFoundGif from '../../images/404.gif'

function notFound(){
    return(
        <div style={{width:"50%"}}>
            <img src={NotFoundGif}></img>
        </div>
        
    )
}

export default notFound