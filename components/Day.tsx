'use client'

import classNames from "classnames";
import React, { useState } from "react";

type Props = {
    day: string
    number: number
    weekend: boolean
    className?: string;
    isFiltered: boolean
};

const Day = ({ day, number, weekend, className, isFiltered}: Props) => {
  const [dismiss, setDismiss] = useState(false);
  return (
    <button
      className={classNames(
        "w-full p-2 flex flex-col border-2 hover:text-reddish",
        className,
        (dismiss || isFiltered) && "invisible",
        !weekend && "bg-white border-highlight",
        weekend && "bg-highlight border-white"
      )}
      onClick={() => setDismiss(true)}
    >
      <div className="w-10/12 text-left p-1">
        <div className="font-semibold text-xs md:text-sm mb-3">{day}</div>
        <div className=" text-right font-bold text-4xl">{number}</div>
      </div>
    </button>
  );
};
export default Day;
