const baseUrl = 'http://localhost:8000/api/v1/';

const url = (endpoint, id = '', params = {}) => baseUrl + endpoint + id + '?' + new URLSearchParams(params);
const putUrl = (endpoint, id = '') => baseUrl + endpoint + '/' + id ;

const parseBody = (body, isFormData = false) => {
    if (! isFormData) {
        return JSON.stringify(body);
    }

    const formData = new FormData();

    for (let [key, value] of Object.entries(body)) {
        formData.append(key, value);
    }

    return formData;
};

export default {
    get(endpoint, id = '', callback, params = {}) {
        fetch(url(endpoint, id, params), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (callback) {
                callback(data);
            }
        })
        .catch((error) => console.log(error))
    },

    post(endpoint, id = '', body, callback, isFormData = false) {
        fetch(url(endpoint, id), {
            method: 'POST',
            body: parseBody(body, isFormData),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (callback) {
                callback(data);
            }
        })
        .catch((error) => console.log(error))
    },

    put(endpoint, id = '', body, callback, isFormData = false) {
        fetch(putUrl(endpoint, id), {
            method: 'PUT',
            body: parseBody(body, isFormData),
            // mode: 'cors',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`,
                // 'Content-Type': 'multipart/form-data'
            }
        })
        .then(data => {
            if(callback) {
                callback(data);
            }
        })
        .catch((error) => console.log(error))
    },

    delete() {

    },
}
