import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackList from "./components/FeedbackList";

function App() {
    const [feedback, setfeedback] = useState(FeedbackData);

    return (
    <>
        <Header />
        <div className="container">
                <FeedbackList feedback={ feedback }/>
        </div> 
    </>
    
    );
}

export default App 