// User.js
export class User {
  constructor({id, name, email, deviceModel, position, uuid, createdAt}) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.deviceModel = deviceModel;
    this.position = position;
    this.uuid = uuid;
    this.createdAt = createdAt;
  }

  static fromJSON(json) {
    return new User({
      id: json.id,
      name: json.name,
      email: json.email,
      deviceModel: json.device_model,
      position: json.position,
      uuid: json.uuid,
      createdAt: json.created_at,
    });
  }
}
