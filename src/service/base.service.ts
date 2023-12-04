import axios from 'axios';

abstract class BaseService {
    router: string;

    constructor(router: string) {
        this.router = router;
    }

    create(data: object) {
        return axios.post(`${this.router}/`, data);
    }

    update(id: string, newData: object) {
        return axios
            .put(`${this.router}/${id}`, newData)
            .then((response: any) => response.data);
    }

    getAll(params?: object) {
        return axios
            .get(`${this.router}`, { params: params })
            .then((response: any) => response.data);
    }

    getOne(id: string | number) {
        return axios
            .get(`${this.router}/${id}`)
            .then((response: any) => response.data);
    }

    delete(id: string | number) {
        return axios
            .delete(`${this.router}/${id}`)
            .then((response: any) => response.data);
    }
}

export default BaseService;
