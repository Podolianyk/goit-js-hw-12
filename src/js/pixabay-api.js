import axios from 'axios';

export async function getImages(searchQuery, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: '43032032-8eb24f10be4f06f56a6a96441',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };

  const res = await axios.get(BASE_URL, { params });
  return res.data;
}
