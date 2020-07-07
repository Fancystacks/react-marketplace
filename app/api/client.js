import { create } from 'apisauce';

const apiClient = create({
    baseUrl: 'http://192.168.0.11:9000/api'
});

apiClient.get('/listings').then(response => {
    if (!response.ok) {
        response.problem
    }
});