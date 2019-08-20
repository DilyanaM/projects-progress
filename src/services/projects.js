import axios from 'axios';

// eslint-disable-next-line max-len
const API = 'https://gist.githubusercontent.com/elena-gancheva/e2af742be620fefa0b0d81e36f7cd66c/raw/1407c899e0a1baca8cd9564f6d9668fd7e8909a6/data.json';

const getProjects = async () => {
  const { data } = await axios.get(API);
  return data;
};

export default getProjects;
