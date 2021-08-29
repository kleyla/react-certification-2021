import { useCallback, useEffect, useState } from 'react';

export const useFavorites = (idFav = '') => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [videoSelected, setVideoSelected] = useState({});

  const isFavorite = (id) => {
    const fav = favorites.find((favorite) => {
      return favorite.id === id;
    });
    return fav;
  };

  const addFavorite = (id, title, description, thumbnails, channel) => {
    setFavorites(() => [...favorites, { id, title, description, thumbnails, channel }]);
  };

  const removeFavorite = (id) => {
    const favs = favorites.filter((favorite) => {
      return favorite.id !== id;
    });
    setFavorites(() => favs);
  };

  const getFavorites = useCallback(() => {
    setIsLoading(true);
    let favoritesArray = localStorage.getItem('favorites');
    if (favoritesArray) {
      favoritesArray = JSON.parse(favoritesArray);
    } else {
      favoritesArray = [];
    }
    setFavorites(() => favoritesArray);
    setIsLoading(false);
  }, []);

  const updatelocalStorage = useCallback(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const getVideoSelected = useCallback(() => {
    if (idFav) {
      const fav = favorites.find((video) => {
        return video.id === idFav;
      });
      setVideoSelected(() => fav);
    }
  }, [idFav, favorites]);

  useEffect(() => {
    console.log('getFavorites solo una vez');
    getFavorites();
  }, [getFavorites]);

  useEffect(() => {
    console.log('updatelocalStorage cada vez que se agregue o elimine un favorito');
    updatelocalStorage();
  }, [updatelocalStorage]);

  useEffect(() => {
    console.log('getVideoSelected');
    getVideoSelected();
  }, [getVideoSelected]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    videoSelected,
    isLoading,
  };
};
