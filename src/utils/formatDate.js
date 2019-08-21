const formatDate = (timestamp) => {
  const date = new Date(Number(timestamp * 1000));

  // return `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return date.toUTCString();
};

export default formatDate;
