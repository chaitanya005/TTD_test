export function sum(a, b) {
  return a + b;
}

export function dugeon(hero) {
  if (hero.strength > 50 && hero.iq > 90) {
    return "🦸‍♂️⚔️💰💍👑";
  } else if (hero.strength > 50 && hero.iq < 90) {
    return "👨‍🦱⚔️🏥";
  } else if (hero.strength < 50 && hero.iq > 90) {
    return "🧑🐍💰💍👑";
  } else {
    return "💀";
  }
}
