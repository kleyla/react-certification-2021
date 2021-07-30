import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';

export const useFetchVideos = () => {
  const { data } = useContext(AppContext);
  const [videoList, setVideoList] = useState();
  const [loading, setLoading] = useState(true);

  const getFromYoutube = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=20&q=${data.search}`
      );
      const resp = await response.json();
      setVideoList(resp.items);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFromYoutube();
  }, [data]);

  return { videoList, loading };
};
