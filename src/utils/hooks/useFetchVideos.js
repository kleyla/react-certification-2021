import { useCallback, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../context/appContext';

export const useFetchVideos = (id = '') => {
  const { state } = useContext(AppContext);
  const { search } = state;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [videoSelected, setVideoSelected] = useState({});

  const getVideoById = useCallback(() => {
    if (id && videos) {
      const video = videos.find((item) => {
        return item.id.videoId === id;
      });
      setVideoSelected(video);
    }
  }, [id, videos]);

  const getFromYoutube = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=24&q=${search}`
      );
      const resp = await response.json();
      if (resp.error) {
        setError(resp.error.message);
      } else {
        setVideos(resp.items);
      }
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    getFromYoutube();
  }, [getFromYoutube]);

  useEffect(() => {
    getVideoById();
  }, [getVideoById]);

  return { videos, loading, error, getFromYoutube, videoSelected };
};
