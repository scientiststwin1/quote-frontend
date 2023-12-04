import BaseService from "./base.service";

class QuoteService extends BaseService {
    constructor() {
        super("/quote");
    }
}

export default new QuoteService();