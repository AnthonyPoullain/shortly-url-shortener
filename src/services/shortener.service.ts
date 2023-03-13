import axios from 'axios';

const API_URL = 'https://api.shrtco.de/v2/shorten?url=';

class ShortenerService {
	static async shorten(url: string) {
		try {
			const response = await axios.post(`${API_URL}${url}`);
			return response.data.result.short_link;
		} catch (error) {
			console.log('Wrong URL format');
		}
	}
}

export default ShortenerService;
