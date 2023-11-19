import React from 'react';
import dialogsStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messagesElements =
        state.messages.map( message => <Message
            message={message.message}
        />);

    let dialogsElements =
        state.dialogs.map( dialog =>
            <DialogItem
                name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
     );
    let newMessageText = state.newMessageText


    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsStyle.messages}>
                {messagesElements}
                <div className={dialogsStyle.addMessage}>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            onChange={onMessageChange}
                            value={newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;