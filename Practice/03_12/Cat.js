class Cat {
  constructor(name, race, age, color, paws, move, dataBd) {
    this.name = name;
    this.race = race;
    this.age = age;
    this.color = color;
    this.paws = paws;
    this.move = move;
    this.dataBd = dataBd;
  }
  newMove(forward) {
    this.move = forward;
  }

  alisaAge() {
    let now = new Date();
    let bd = new Date(this.dataBd);
    let days = now - bd;
    let daysSinseBd = Math.floor(days / (1000 * 3600 * 24));
    return daysSinseBd;
  }

  alisaAgeMonth() {
    let now = new Date();
    let bd = new Date(this.dataBd);
    let month = now - bd;
    let monthSinceBd = Math.floor(month / (1000 * 3600 * 24 * 30));
    return monthSinceBd;
  }
}

export default Cat;
