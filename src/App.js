import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Pusher from 'pusher-js'

function App() {

  useEffect(() => {
    const pusher = new Pusher('263306ff9a8df1dfa5ed', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  }, []);


  return (
    <div className="app">
      <div className="app_body">
      <Sidebar />
      <Chat />
      </div>
    </div>
  );
}

export default App;
