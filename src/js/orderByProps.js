// Решение с for in
export default function orderByProps(obj, order) {
  const properties = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      properties.push({ key, value: obj[key] });
    }
  }
  properties.sort((a, b) => {
    const orderIndexA = order.indexOf(a.key);
    const orderIndexB = order.indexOf(b.key);
    if (orderIndexA > -1 && orderIndexB > -1) {
      return orderIndexA - orderIndexB;
    }
    if (orderIndexA === -1 && orderIndexB === -1) {
      return a.key.localeCompare(b.key);
    }
    return orderIndexA > -1 ? -1 : 1;
  });
  return properties;
}
