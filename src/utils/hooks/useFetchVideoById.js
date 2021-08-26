import { useEffect, useState } from 'react';

export const useFetchVideoById = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [video, setVideo] = useState({});

  const getVideoFromYoutube = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&part=snippet&id=${id}`
      );
      const resp = await response.json();
      if (resp.error) {
        setError(resp.error.message);
      } else {
        setVideo(resp.items[0]);
      }
      setLoading(false);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getVideoFromYoutube();
  }, [id]);

  return { video, loading, error };
};
