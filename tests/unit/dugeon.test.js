import { dugeon } from "../../index";

test("hero passed Trail 1 & Trail 2", () => {
  expect(
    dugeon({
      hero: "π¦ΈββοΈ",
      strength: 90,
      iq: 100,
    })
  ).toBe("π¦ΈββοΈβοΈπ°ππ");
});

test("hero passed Trail 1 & Failed Trail 2", () => {
  expect(
    dugeon({
      hero: "π¨βπ¦±",
      strength: 90,
      iq: 70,
    })
  ).toBe("π¨βπ¦±βοΈπ₯");
});

test("hero Failed Trail 1 & Passed Trail 2", () => {
  expect(
    dugeon({
      hero: "π§",
      strength: 40,
      iq: 120,
    })
  ).toBe("π§ππ°ππ");
});

test("hero Failed Both Trail 1 & Trail 2", () => {
  expect(
    dugeon({
      hero: "π§",
      strength: 30,
      iq: 70,
    })
  ).toBe("π");
});
