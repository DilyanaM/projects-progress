const formatDate = (timestamp) => {
  const date = new Date(Number(timestamp * 1000));
  return date.toUTCString();
};

export default formatDate;
