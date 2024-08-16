import { useEffect, useState } from 'react';

export default function Messaging() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id} className="mb-2">
            <p className="font-semibold">{message.sender}</p>
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
