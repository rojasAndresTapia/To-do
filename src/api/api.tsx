import Axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

export const api = Axios.get(apiUrl).then((res) => res);
