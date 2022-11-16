import axios from 'axios';

const baseURL = 'https://hacker-news.firebaseio.com/v0/';

export const createFetchAPI = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .get(baseURL + url, { params })
            .then(({ data }) => {
                resolve(data);
            })
            .catch((error) => reject(error));
    });
};
