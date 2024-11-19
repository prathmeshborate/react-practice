import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeSubscriberCount = ({ youtubeChannelId }) => {
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeChannelId}&key=AIzaSyA3-RcT_ad3iVSWxJDZRP5OBMHQl36UOnA`
        );
        if (response.data.items && response.data.items.length > 0) {
          const data = response.data.items[0].statistics.subscriberCount;
          setSubscriberCount(data);
        } else {
          setError('No data found for the given channel ID.');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (youtubeChannelId) {
      fetchSubscriberCount();
    }
  }, [youtubeChannelId]);

  return (
    <div>
      {subscriberCount !== null ? (
        <div>Subscriber Count: {subscriberCount}</div>
      ) : (
        <div>{error ? `Error: ${error}` : 'Loading...'}</div>
      )}
    </div>
  );
};

export default YouTubeSubscriberCount;