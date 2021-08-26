import { useEffect, useState } from 'react';

export const useFavorites = (idFav = '') => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteVideos, setFavoriteVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [videoSelected, setVideoSelected] = useState({});

  const getFavorites = () => {
    let favoritesArray = localStorage.getItem('favorites');
    if (favoritesArray) {
      favoritesArray = favoritesArray.split(',');
    } else {
      favoritesArray = [];
    }
    setFavorites(() => favoritesArray);
  };

  const isFavorite = (id) => {
    const fav = favorites.find((favorite) => {
      return favorite === id;
    });
    return fav;
  };

  const addFavorite = (id) => {
    setFavorites(() => [...favorites, id]);
  };

  const removeFavorite = (id) => {
    const favs = favorites.filter((favorite) => {
      return favorite !== id;
    });
    setFavorites(() => favs);
  };

  const updatelocalStorage = () => {
    localStorage.setItem('favorites', favorites);
  };

  const getVideoSelected = (videos) => {
    if (idFav) {
      const fav = videos.find((video) => {
        return video.id === idFav;
      });
      setVideoSelected(() => fav);
    }
  };

  const getFavoriteVideosFromYoutube = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&part=snippet&id=${favorites}`
      );
      const resp = await response.json();
      if (resp.error) {
        setErrorMessage(resp.error.message);
      } else {
        setFavoriteVideos(resp.items);
        getVideoSelected(resp.items);
      }
      setIsLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    updatelocalStorage();
    getFavoriteVideosFromYoutube();
  }, [favorites]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    videoSelected,
    isLoading,
    favoriteVideos,
    errorMessage,
  };
};
