import Card from "./shared/Card"
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item }) {

    const handleClick = (id) => { 
        console.log(id)
        
    }

    return (
        <div>
            <Card reverse={ false}>
                <div className="num-display">{item.rating}</div>
                <button className="close" onClick={()=>handleClick(item.id)}>
                    <FaTimes color="purple"/>
                </button>
                <div className="text-display">{ item.text }</div>
            </Card>
        </div>
    )
}

export default FeedbackItem