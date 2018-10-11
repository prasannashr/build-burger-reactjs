import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-acf44.firebaseio.com/'
});

export default instance;