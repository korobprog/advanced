import getAttacks from "../getAttacks";

describe("getAttacks function", () => {
  test("it should return an array of objects with specified keys", () => {
    const special = [
      {
        id: 1,
        name: "Quick Attack",
        description: "A lightning-fast jab",
        icon: "⚡️",
      },
      {
        id: 2,
        name: "Fire Blast",
        description: "Launches a fiery inferno",
        icon: "🔥",
      },
    ];
    const result = getAttacks({ special });
    expect(result).toEqual([
      {
        id: 1,
        name: "Quick Attack",
        description: "A lightning-fast jab",
        icon: "⚡️",
      },
      {
        id: 2,
        name: "Fire Blast",
        description: "Launches a fiery inferno",
        icon: "🔥",
      },
    ]);
  });

  test("it should return default description if none is provided", () => {
    const special = [
      {
        id: 1,
        name: "Quick Attack",
        icon: "⚡️",
      },
    ];
    const result = getAttacks({ special });
    expect(result[0].description).toEqual("Описание недоступно");
  });
});
