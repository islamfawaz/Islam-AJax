export class Service {
    constructor(url) {
        this.url = url;
    }

    get() {
        return fetch(this.url)
            .then(response => {
                if (!response.ok) {  
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                return response.json(); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error;  
            });
    }
}
