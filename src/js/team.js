export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Вы уже добавили этого персонажа');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const elem of characters) {
      this.members.add(elem);
    }
  }

  toArray() {
    const arr = [];
    this.members.forEach((elem) => {
      arr.push(elem);
    });
    return arr;
  }

  iteration() {
    const iterator = this.members[Symbol.iterator]();
    while (true) {
      const result = iterator.next();
      if (result.done) break;
      console.log(result.value);
    }
  }
}
