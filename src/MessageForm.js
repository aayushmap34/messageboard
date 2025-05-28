import { useState } from 'react';
import axios from 'axios';

export default function MessageForm({ onPost }) {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !message) return;
    const res = await axios.post('http://localhost:3001/api/posts', { username, message });
    onPost(res.data);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" />
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      <button type="submit">Post</button>
    </form>
  );
}
