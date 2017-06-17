export const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
export const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;
const userID = '147715418@N02';
import axios from 'axios'

export const fetchImages = (searchQuery = 'steamtown') => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${API_KEY}&user_id=${userID}&format=json&nojsoncallback=1`;
  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
};

export const fetchFeaturedGallery = (photosetID = 72157680541050880) => {
  const FLICKR_PHOTOSET_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${photosetID}&user_id=147715418%40N02&format=json&nojsoncallback=1`;
  return fetch(FLICKR_PHOTOSET_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      return json.photoset.photo.map(({ farm, server, id, secret, title }) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
};

