import axios from 'axios';

const apiBaseUrl = 'http://localhost:8080/api'
const headers = {
    'Content-Type': 'application/json', // Set the content type to JSON
};

export async function get(uri) {
    return await axios.get(`${apiBaseUrl}/${uri}/`)
}

export async function post(uri, body) {
    return await axios.post(`${apiBaseUrl}/${uri}`, body, { headers }).data
}