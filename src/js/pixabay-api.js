import axios from 'axios';

export async function getImages(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '43032032-8eb24f10be4f06f56a6a96441',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  });

  const url = `${BASE_URL}?${params}`;

  const res = await axios.get(url, { params });
  return res.data;
}
