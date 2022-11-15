import axios from 'axios';

const baseURL = 'https://hacker-news.firebaseio.com/v0/';

export const createFetchAPI = (url) => {
    return new Promise((resolve, reject) => {
        axios
            .get(baseURL + url)
            .then(({ data }) => {
                resolve(data);
                console.log('data', data);
            })
            .catch((error) => reject(error));
    });
};
