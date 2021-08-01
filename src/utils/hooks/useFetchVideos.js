import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';

export const useFetchVideos = () => {
  const { state } = useContext(AppContext);
  const { search } = state;
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getFromYoutube = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=24&q=${search}`
      );
      const resp = await response.json();
      setVideoList(resp.items);
      setLoading(false);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getFromYoutube();
  }, [search]);

  return { videoList, loading, error };
};
