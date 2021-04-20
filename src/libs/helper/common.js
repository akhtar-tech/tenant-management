const getBadgeVariant = (totalRooms, remainingRooms) => (
  Math.ceil(totalRooms / 2) >= remainingRooms ? 'success' : 'error'
);

const getNumbersTo = (num = 25) => {
  const numbers = [];

  for (let i = 1; i <= num; i++) {
    numbers.push({ label: i.toString(), value: i.toString() });
  }

  return numbers;
}

export {
  getBadgeVariant,
  getNumbersTo,
}
