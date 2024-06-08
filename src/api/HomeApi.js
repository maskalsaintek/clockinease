import ApiUtil from '../utils/ApiUtil'; // Ensure path is correct based on your project structure
import {loadData} from '../utils/EncryptedStorageUtil';

class HomeApi {
  static async getUserDataInYear() {
    const endpoint = '/get-data-user-in-year';
    const loginData = await loadData('user');
    const headers = {
      Authorization: 'Bearer ' + loginData.token,
    };

    try {
      const response = await ApiUtil.callApi(
        'GET',
        endpoint,
        null,
        {},
        headers,
        false,
      );
      console.log('Response:', response);
      return response;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }
}

export default HomeApi;
