"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useEffect, useState } from "react";

interface DateTimeState {
  time: string;
  date: string;
}

const Home = () => {
  const [dateTime, setDateTime] = useState<DateTimeState>({
    time: "",
    date: "",
  });

  const formatDateTime = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
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
    const formattedDate = `${daysOfWeek[now.getDay()]}, ${
      months[now.getMonth()]
    } ${now.getDate()}, ${now.getFullYear()}`;

    setDateTime({ time: formattedTime, date: formattedDate });
  };

  useEffect(() => {
    formatDateTime();

    const interval = setInterval(formatDateTime, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {dateTime.time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {dateTime.date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
