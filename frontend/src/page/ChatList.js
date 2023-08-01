import React from "react";
import "./ChatList.css";
import ChatBox from "./ChatBox";
 const ChatList =({ chats }) => (
    <ul>
        {chats.map(chat => {
            return (
                <div>
                    <div className="row show-grid">
                        <div className="col-xs-12">
                            <div className="chatMessage">
                                <div key={chat.id} className="box">
                                    <p>
                                        <strong>{chat.username}</strong>
                                    </p>
                                    <p>{chat.message}</p>
                                </div>
                                {/* <div className="imageHolder"> */}
                                    {/* <img src={"https://thenounproject.com/api/private/icons/801397/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"} className="img-responsive avatar" alt="logo" /> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
    </ul>
);
export default ChatList;