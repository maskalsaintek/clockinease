// LoginResponse.js
import {User} from './User'; // Ensure the path is correct based on your project structure

class DivisionData {
  constructor({id, name, createdAt, updatedAt}) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromJSON(json) {
    return new Department({
      id: json.id,
      name: json.name,
      createdAt: json.created_at,
      updatedAt: json.updated_at,
    });
  }
}

class LoginResponse {
  constructor({divisionData, role, status, token, user}) {
    this.divisionData = DivisionData.fromJSON(divisionData);
    this.role = role;
    this.status = status;
    this.token = token;
    this.user = User.fromJSON(user);
  }
}

export default LoginResponse;
