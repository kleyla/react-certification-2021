import { useEffect, useState } from 'react';

export const useFetchVideosById = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [videos, setVideos] = useState();

  const getVideoFromYoutube = async () => {
    setLoading(true);
    try {
      let favoritesArray = localStorage.getItem('favorites');
      if (favoritesArray) {
        favoritesArray = favoritesArray.split(',');
      } else {
        localStorage.setItem('favorites', '[]');
        favoritesArray = [];
      }
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&part=snippet&id=${favoritesArray}`
      );
      const resp = await response.json();
      setVideos(resp.items);
      setLoading(false);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getVideoFromYoutube();
  }, []);

  return { videos, loading, error };
};
