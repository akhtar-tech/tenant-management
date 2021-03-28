const getBadgeVariant = (totalRooms, remainingRooms) => (
  Math.ceil(totalRooms / 2) >= remainingRooms ? 'success' : 'error'
);

export {
  getBadgeVariant
}
