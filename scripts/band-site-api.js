class BandSiteAPI { 
    constructor(key) {
        this.key = key; 
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getComments (name, comment, timestamp){
        const url = `${this.baseUrl}comments/?api_key=${this.key}`;
        const response = await axios.get(url); 
        return response.data;

    }

    async getShows (date, place, location){
        const url = `${this.baseUrl}showdates/?api_key=${this.key}`;
        const response = await axios.get(url); 
        return response.data;

    }

    async postComments (comment){
        const url = `${this.baseUrl}comments/?api_key=${this.key}`;
        const response = await axios.post(url, comment, { 
            headers: {
                'Content-Type': 'application/json'
            }
        }); 
        return response.data;

    }
};
