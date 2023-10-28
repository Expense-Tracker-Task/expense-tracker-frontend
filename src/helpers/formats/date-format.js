export const formatDate = (date) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date(date);
  return today.toLocaleDateString("tr-TR", options);
};

export const returnDayNumber = (date) => {
  var options = {
    day: "numeric",
  };
  var today = new Date(date);
  return parseInt(today.toLocaleDateString("tr-TR", options));
};
