const baseUrl = 'http://localhost:8000/api/v1/';

const url = (endpoint, params = {}) => baseUrl + endpoint + new URLSearchParams(params);

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
    get(endpoint, callback, params = {}) {
        fetch(url(endpoint, params), {
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

    post(endpoint, body, callback, isFormData = false) {
        fetch(url(endpoint), {
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

    put() {

    },

    delete() {

    },
}
