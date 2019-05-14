import axios from 'axios';

export default axios.create({
  baseURL: `http://dndreact.local/api/`
});