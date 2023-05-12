import orderByProps from "../orderByProps";

describe("orderByProps", () => {
  const obj = {
    d: 4,
    c: 3,
    a: 1,
    b: 2,
  };
  const order = ["b", "c"];

  it("should sort object properties by specified order", () => {
    const sortedProps = orderByProps(obj, order);
    expect(sortedProps).toEqual([
      { key: "b", value: 2 },
      { key: "c", value: 3 },
      { key: "a", value: 1 },
      { key: "d", value: 4 },
    ]);
  });

  it("should sort object properties alphabetically if property not in order", () => {
    const sortedProps = orderByProps(obj, order);
    expect(sortedProps).toEqual([
      { key: "b", value: 2 },
      { key: "c", value: 3 },
      { key: "a", value: 1 },
      { key: "d", value: 4 },
    ]);
  });
});
