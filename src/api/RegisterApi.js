import ApiUtil from '../utils/ApiUtil';

class RegisterApi {
  static async getAllDivisions() {
    const endpoint = '/getAllDivision';
    try {
      const response = await ApiUtil.callApi(
        'GET',
        endpoint,
        null,
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

  static async getDepartment(divisionId) {
    const endpoint = `/getDepartment/${divisionId}`;
    try {
      const response = await ApiUtil.callApi(
        'GET',
        endpoint,
        null,
        {},
        {},
        false,
      );
      console.log('Departments:', response);
      return response;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Unable to fetch departments');
      }
    }
  }

  static async getBranches() {
    const endpoint = '/branches'; // Endpoint to fetch branch data
    try {
      const response = await ApiUtil.callApi(
        'GET',
        endpoint,
        null,
        {},
        {},
        false,
      );
      console.log('Branches:', response);
      return response;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Unable to fetch branches');
      }
    }
  }

  static async register(userData) {
    const endpoint = '/register';
    const headers = {Accept: 'application/json'};
    const formData = new FormData();

    // Append user data to formData
    Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });

    console.log('formData', formData);

    try {
      const response = await ApiUtil.callApi(
        'POST',
        endpoint,
        formData,
        {},
        headers,
        false,
      );
      console.log('Registration Response:', response);
      return response;
    } catch (error) {
      console.log('Registration Response:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Registration failed due to an unexpected error');
      }
    }
  }
}

export default RegisterApi;
