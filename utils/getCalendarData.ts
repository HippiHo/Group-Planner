type Day = {
  day: string;
  number: number;
  weekend: boolean;
};

type Month = {
  title: string;
  days: Day[];
};

type Calendar = Month[];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDayName = (dateStr: string, locale: string) => {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
};

const fillCalendarData = (year: number, month: number) => {
  const daysOfCurrentMonth = new Date(year, month + 1, 0).getDate();

  let filledArray = new Array(daysOfCurrentMonth);

  for (let i = 0; i < daysOfCurrentMonth; i++) {
    const dayName = getDayName(`${month + 1}/${i + 1}/${year}`, "en-US");
    filledArray[i] = {
      day: dayName,
      number: i + 1,
      weekend: dayName === "Saturday" || dayName === "Sunday",
    };
  }

  return filledArray;
};

export const getCalendarData = () => {
  const today = new Date().getDate();

  const currentMonth = new Date().getMonth();

  const currentYear = new Date().getFullYear();

  const currentDaysArray = fillCalendarData(currentYear, currentMonth);

  const calendar: Calendar = [
    {
      title: `${monthNames[currentMonth]} ${currentYear}`,
      days: currentDaysArray.splice(today - 1, currentDaysArray.length),
    },
    {
      title: `${monthNames[currentMonth + 1]} ${currentYear}`,
      days: fillCalendarData(currentYear, currentMonth + 1),
    },
    {
      title: `${monthNames[currentMonth + 2]} ${currentYear}`,
      days: fillCalendarData(currentYear, currentMonth + 2),
    },
  ];

  return calendar;
};
