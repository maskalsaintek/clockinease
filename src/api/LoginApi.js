import ApiUtil from '../utils/ApiUtil'; // Pastikan path benar sesuai lokasi file ApiUtil.js

class LoginApi {
  static async login(email, password) {
    const endpoint = '/login'; // Endpoint diperbarui menjadi hanya '/login'
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await ApiUtil.callApi(
        'POST',
        endpoint,
        formData,
        {},
        {},
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

export default LoginApi;
