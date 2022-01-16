import Card from "./shared/Card"
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item }) {
    return (
        <div>
            <Card reverse={ false}>
                <div className="num-display">{item.rating}</div>
                <button className="close">
                    <FaTimes color="purple"/>
                </button>
                <div className="text-display">{ item.text }</div>
            </Card>
        </div>
    )
}

export default FeedbackItem