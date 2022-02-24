import { dugeon } from "../../index";

test("hero passed Trail 1 & Trail 2", () => {
  expect(
    dugeon({
      hero: "🦸‍♂️",
      strength: 90,
      iq: 100,
    })
  ).toBe("🦸‍♂️⚔️💰💍👑");
});

test("hero passed Trail 1 & Failed Trail 2", () => {
  expect(
    dugeon({
      hero: "👨‍🦱",
      strength: 90,
      iq: 70,
    })
  ).toBe("👨‍🦱⚔️🏥");
});

test("hero Failed Trail 1 & Passed Trail 2", () => {
  expect(
    dugeon({
      hero: "🧑",
      strength: 40,
      iq: 120,
    })
  ).toBe("🧑🐍💰💍👑");
});

test("hero Failed Both Trail 1 & Trail 2", () => {
  expect(
    dugeon({
      hero: "🧑",
      strength: 30,
      iq: 70,
    })
  ).toBe("💀");
});
