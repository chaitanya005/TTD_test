export function sum(a, b) {
  return a + b;
}

export function dugeon(hero) {
  if (hero.strength > 50 && hero.iq > 90) {
    return "π¦ΈββοΈβοΈπ°ππ";
  } else if (hero.strength > 50 && hero.iq < 90) {
    return "π¨βπ¦±βοΈπ₯";
  } else if (hero.strength < 50 && hero.iq > 90) {
    return "π§ππ°ππ";
  } else {
    return "π";
  }
}
