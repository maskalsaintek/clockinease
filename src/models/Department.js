class Department {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static fromJson(json) {
    return new Department(json.id, json.name);
  }
}

export default Department;
