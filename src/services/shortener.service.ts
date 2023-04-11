import axios from 'axios';

const API_URL = 'https://api.shrtco.de/v2/shorten?url=';

/**
 * Shortens a given URL using the API_URL and returns the shortened link.
 * @async
 *
 * @param {string} url - The URL to be shortened.
 *
 * @returns {Promise<string>} - A Promise that resolves to the shortened link.
 */
class ShortenerService {
	static async shorten(url: string) {
		try {
			const response = await axios.post(`${API_URL}${url}`);
			return response.data.result.short_link;
		} catch (error) {
			throw new Error('Wrong URL format or API request failed');
		}
	}
}

export default ShortenerService;
