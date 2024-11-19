import React, { useState } from 'react';
import YouTubeSubscriberCount from './components/YouTubeSubscriberCount.jsx';
import './App.css';

function App() {
  const [youtubeChannelId, setYouTubeChannelId] = useState('');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube Subscriber Count</h1>
      <input
        type="text"
        placeholder="Enter YouTube Channel ID"
        value={youtubeChannelId}
        onChange={(e) => setYouTubeChannelId(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      {youtubeChannelId && <YouTubeSubscriberCount youtubeChannelId={youtubeChannelId} />}
    </div>
  );
}

export default App;