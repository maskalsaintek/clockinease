class Branch {
  constructor(id, name, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromJson(json) {
    return new Branch(json.id, json.name, json.createdAt, json.updatedAt);
  }
}

export default Branch;
