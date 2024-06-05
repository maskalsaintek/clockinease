class Division {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static fromJson(json) {
    return new Division(json.id, json.name);
  }
}

export default Division;
