import React, { useState } from 'react';
import './App.css'

function App() {
  const [userId, setUserId] = useState('');
  const [followerCount, setFollowerCount] = useState(null);
  const fetchFollowerCount = async () => { const response = await fetch(`http://localhost:5000/getFollowerCount?user_id=${userId}`);
  const data = await response.json();
  setFollowerCount(data.followers_count);
};
return (
<div>
  <input type="text" placeholder="Enter User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
  <button onClick={fetchFollowerCount}>Get Follower Count</button>
  {followerCount !== null && ( <div>Follower Count: {followerCount} </div> )}
</div> );
}

export default App
