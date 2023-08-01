import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from './page/ChatList';
import ChatBox from './page/ChatBox';
const App = () => {
  const [state, setState] = useState({ text: '', username: '', chats: [] })
  useEffect(() => {
    (async () => {
      const username = window.prompt('Username: ', 'Anonymous');
      setState(p => ({ ...p, username: username }));
      const pusher = new Pusher('4d4c4e9c6535336e307f', {
        cluster: 'ap2',
        encrypted: true
      });
      const channel = pusher.subscribe('chatapp');
      channel.bind('message', data => {
        setState(p => ({ ...p, chats: [...state.chats, data], text: '' }));
      });
    })()
    // this.handleTextChange=handleTextChange.bind()
  }, [state.chats])

  const handleTextChange = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      const payload = {
        username: state.username,
        message: state.text
      };
      axios.post('http://localhost:5000/message', payload);
    } else {
      setState(p => ({ ...p, text: e.target.value }));
      setTimeout(() => {
        const pusher = new Pusher('4d4c4e9c6535336e307f', {
          cluster: 'ap2',
          encrypted: true
        });
        const channel = pusher.subscribe('chat');
        channel.bind('message', data => setState(p => ({ ...p, chats: [...state.chats, data], text: '' })));
      }, 1000)
    }
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={"https://thenounproject.com/api/private/icons/801397/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Pusher Chat</h1>
        </header>
        <section>
          <ChatList chats={state.chats} />
          <ChatBox text={state.text} username={state.username} handleTextChange={handleTextChange} />
        </section>
      </div>
    </>
  );
}

export default App