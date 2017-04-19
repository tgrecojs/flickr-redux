const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;


export const fetchImages = (searchQuery = 'Flower') => {
  const SEARCH_FLICKR_API = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&user_id=147715418%40N02&text=${searchQuery}&format=json&nojsoncallback=1`
 return fetch(SEARCH_FLICKR_API).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      );
    })
  })
};

export const searchImages = (searchQuery = 'Tulip') => {
  const SEARCH_FLICKR_API = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&user_id=147715418%40N02&text=${searchQuery}&per_page=200&format=json&nojsoncallback=1`
 return fetch(SEARCH_FLICKR_API).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      );
    })
  })
};
