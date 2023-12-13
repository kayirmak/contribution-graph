import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import Cell from "./Cell";
import DaysOfWeek from "./DaysOfWeek";
import MonthsHead from "./MonthsHead";

import "./graph.css";
import { getAllData } from "../../api/api";

function Graph() {
  const [cells, setCells] = useState(Array.from(new Array(357)));

  useEffect(() => {
    transformData();
  }, []);

  const transformData = async () => {
    const currentDate = dayjs();

    const startOfWeek = currentDate.startOf("week");

    const startDate = startOfWeek.subtract(50, "week").add(1, "day");
    const data = await getAllData();

    const newCells = cells.map((_, index) => {
      const evDay = startDate.add(index, "day").format("YYYY-MM-DD");
      return { date: evDay, contr: data[evDay] || 0 };
    });

    setCells(newCells);
  };

  return (
    <div className="graph">
      <div className="graph-months">
        <MonthsHead />
      </div>
      <div className="graph-wrap">
        <div className="graph-day-names">
          <DaysOfWeek />
        </div>
        <div className="graph-contribution">
          {cells.map((cell, index) => (
            <Cell cell={cell} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graph;
