export const convertDate = (date: Date) => {
  const dateObj = new Date(date);
  const dateInIST = new Date(dateObj.getTime() + 330 * 60000);

  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(dateInIST);

  return formattedDate;
};
