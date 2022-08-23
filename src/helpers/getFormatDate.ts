export const getFormatDate = (day: Date): string => {
  const yyyy = day.getFullYear();
  let mm = (day.getMonth() + 1) as string | number;
  let dd = day.getDate() as string | number;

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  return formattedToday;
};
