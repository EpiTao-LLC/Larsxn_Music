
import React from "react"
import MessageSection from "./MessageSection"
import "./MessageSection.css"
import messages from "../../content_data/messages"


function createMessage (message) {
    return (

        <MessageSection
            key = {message.id}
            leftAlign = {message.leftAlign}
            picture = {message.picture}
            alt={message.alt}
            text = {message.text}
        />

    )
}

const MessageSectionContainer = () => {
    return (
         <section id="message" >
        <div id="msg-section">
        <h3 id="quote">"If you aren't saying things from the heart... what's the point?"</h3>

            <div className="msg-container">

                <div >
                    {messages.map(createMessage)}
                 </div>

            </div>

        </div>
        </section>
    )
}

export default MessageSectionContainer;