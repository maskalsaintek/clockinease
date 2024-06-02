import axios from 'react-native-axios';
import {API_BASE_URL} from '../constants'; // Import konstanta

class ApiUtil {
  static async callApi(
    method,
    endpoint,
    body = null,
    queryParams = {},
    headers = {},
    useToken = true,
  ) {
    try {
      const url = new URL(endpoint, API_BASE_URL);
      Object.keys(queryParams).forEach(key =>
        url.searchParams.append(key, queryParams[key]),
      );

      if (useToken && localStorage.getItem('accessToken')) {
        headers['Authorization'] = `Bearer ${localStorage.getItem(
          'accessToken',
        )}`;
      }

      const config = {
        method,
        url: url.href,
        headers,
        data: body,
      };

      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error('API call failed:', error.response);
      throw error;
    }
  }
}

export default ApiUtil;
