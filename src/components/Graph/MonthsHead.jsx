import dayjs from "dayjs";
import { useEffect, useState } from "react";

function MonthsHead() {
  const [allMonths, setAllMonths] = useState([]);

  useEffect(() => {
    getMonths();
  }, []);

  const getMonths = () => {
    const months = Array.from(new Array(12));

    const currentDate = dayjs();
    const startOfWeek = currentDate.startOf("week");
    let startDate = startOfWeek.subtract(50, "week").add(1, "day");

    const updatedMonths = months.map((_, index) =>
      startDate.add(index, "month")
    );

    setAllMonths(updatedMonths);
  };

  return (
    <>
      {allMonths.map((month, index) => (
        <p style={{ paddingLeft: "45px" }} key={index}>
          {dayjs(month).locale("ru").format("MMM")}
        </p>
      ))}
    </>
  );
}

export default MonthsHead;
