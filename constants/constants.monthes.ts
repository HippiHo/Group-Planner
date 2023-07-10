type Day = {
  day: string;
  number: number;
  weekend: boolean;
};

type Month = {
  title: string;
  days: Day[];
};

type Calendar = Month[]

export const calendar: Calendar = [
  {
    title: "July 2023",
    days: [
      { day: "Saturday", number: 1, weekend: true },
      { day: "Sunday", number: 2, weekend: true },
      { day: "Monday", number: 3, weekend: false },
      { day: "Tuesday", number: 4, weekend: false },
      { day: "Wednesday", number: 5, weekend: false },
      { day: "Thursday", number: 6, weekend: false },
      { day: "Friday", number: 7, weekend: false },
      { day: "Saturday", number: 8, weekend: true },
      { day: "Sunday", number: 9, weekend: true },
      { day: "Monday", number: 10, weekend: false },
      { day: "Tuesday", number: 11, weekend: false },
      { day: "Wednesday", number: 12, weekend: false },
      { day: "Thursday", number: 13, weekend: false },
      { day: "Friday", number: 14, weekend: false },
      { day: "Saturday", number: 15, weekend: true },
      { day: "Sunday", number: 16, weekend: true },
      { day: "Monday", number: 17, weekend: false },
      { day: "Tuesday", number: 18, weekend: false },
      { day: "Wednesday", number: 19, weekend: false },
      { day: "Thursday", number: 20, weekend: false },
      { day: "Friday", number: 21, weekend: false },
      { day: "Saturday", number: 22, weekend: true },
      { day: "Sunday", number: 23, weekend: true },
      { day: "Monday", number: 24, weekend: false },
      { day: "Tuesday", number: 25, weekend: false },
      { day: "Wednesday", number: 26, weekend: false },
      { day: "Thursday", number: 27, weekend: false },
      { day: "Friday", number: 28, weekend: false },
      { day: "Saturday", number: 29, weekend: true },
      { day: "Sunday", number: 30, weekend: true },
      { day: "Monday", number: 31, weekend: false },
    ],
  },
  {
    title: "August 2023",
    days: [
      { day: "Tuesday", number: 1, weekend: false },
      { day: "Wednesday", number: 2, weekend: false },
      { day: "Thursday", number: 3, weekend: false },
      { day: "Friday", number: 4, weekend: false },
      { day: "Saturday", number: 5, weekend: true },
      { day: "Sunday", number: 6, weekend: true },
      { day: "Monday", number: 7, weekend: false },
      { day: "Tuesday", number: 8, weekend: false },
      { day: "Wednesday", number: 9, weekend: false },
      { day: "Thursday", number: 10, weekend: false },
      { day: "Friday", number: 11, weekend: false },
      { day: "Saturday", number: 12, weekend: true },
      { day: "Sunday", number: 13, weekend: true },
      { day: "Monday", number: 14, weekend: false },
      { day: "Tuesday", number: 15, weekend: false },
      { day: "Wednesday", number: 16, weekend: false },
      { day: "Thursday", number: 17, weekend: false },
      { day: "Friday", number: 18, weekend: false },
      { day: "Saturday", number: 19, weekend: true },
      { day: "Sunday", number: 20, weekend: true },
      { day: "Monday", number: 21, weekend: false },
      { day: "Tuesday", number: 22, weekend: false },
      { day: "Wednesday", number: 23, weekend: false },
      { day: "Thursday", number: 24, weekend: false },
      { day: "Friday", number: 25, weekend: false },
      { day: "Saturday", number: 26, weekend: true },
      { day: "Sunday", number: 27, weekend: true },
      { day: "Monday", number: 28, weekend: false },
      { day: "Tuesday", number: 29, weekend: false },
      { day: "Wednesday", number: 30, weekend: false },
      { day: "Thursday", number: 31, weekend: false },
    ],
  }
]
