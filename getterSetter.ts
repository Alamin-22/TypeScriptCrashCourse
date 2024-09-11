class TestGetter {
  constructor(public userName: string) {
    this.userName = userName;
  }

  get name() {
    // this is getter
    return this.userName;
  }

  set name(value: string) {
    // this is setter and it is looks like function but actually its not it is used like an object
    this.userName = value;
  }
}

let abcd1 = new TestGetter("Mollik");
