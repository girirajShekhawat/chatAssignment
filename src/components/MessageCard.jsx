import React from 'react';

function MessageCard({message}) {
    return (
        <div>
        {message.map((chat)=>(
             <ul>
             <li>{ chat.content}</li>
             <li>{ chat.time}</li>
             <li>{ chat.sender}</li>
         </ul>
        ))}
        </div>
    );
}

export default MessageCard;