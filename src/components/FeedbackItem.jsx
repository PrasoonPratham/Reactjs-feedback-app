import { useState } from 'react';

function FeedbackItem() {

    const [Rating, setRating] = useState(10);
    const [Text, setText] = useState('Sample text');

    return (
        <div>
            <div className="card">
                <div className="num-display">{ Rating }</div>
                <div className="text-display">{ Text }</div>
            </div>
        </div>
    )
}

export default FeedbackItem