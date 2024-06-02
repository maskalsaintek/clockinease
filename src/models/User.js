class User {
  constructor(id, uuid, email, name, position, deviceModel, createdAt) {
    this.id = id;
    this.uuid = uuid;
    this.email = email;
    this.name = name;
    this.position = position;
    this.deviceModel = deviceModel;
    this.createdAt = createdAt;
  }

  static fromJson(json) {
    return new User(
      json.id,
      json.uuid,
      json.email,
      json.name,
      json.position,
      json.deviceModel,
      json.createdAt,
    );
  }
}

export default User;
