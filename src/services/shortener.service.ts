import axios from 'axios';

const API_URL = 'https://api.shrtco.de/v2/shorten?url=';

class ShortenerService {
	static async shorten(url: string) {
		try {
			const response = await axios.post(`${API_URL}${url}`);
			console.log(response.data.result.short_link);
			return response.data.result.short_link;
		} catch (error: any) {
			console.log(error.response.status);
			console.log(error.response.data.error);
		}
	}
}

export default ShortenerService;
