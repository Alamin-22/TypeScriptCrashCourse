class ABCD {
  constructor(public readonly name: string) {
    this.name = "name";
  }

  getName() {
    console.log(this.name);
  }
}


let abcd = new  ABCD("Mollik")
