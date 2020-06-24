export const getGifs = async (category) => {
  const urlRequest = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=TqtAC4ANhz1No7BYrjYFhpq6PudFFQ8s`;
  const response = await fetch(urlRequest);
  const { data } = await response.json();

  return data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });
};
