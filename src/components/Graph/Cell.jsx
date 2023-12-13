import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";

function Cell({ cell }) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => setShowTooltip(false));
  }, []);

  const setColor = (contr) => {
    if (contr <= 0) return;
    if (contr < 10) {
      return "blue1";
    }
    if (contr < 20) {
      return "blue2";
    }
    if (contr < 30) {
      return "blue2";
    }
    if (contr >= 30) {
      return "blue4";
    }
  };

  if (!cell) {
    return "...Загрузка";
  }

  return (
    <div
      onClick={() => setShowTooltip(true)}
      className={`cell ${setColor(cell.contr)} ${
        showTooltip ? "cell-active" : ""
      }`}
    >
      <div className={`tooltip ${showTooltip ? "" : "non-display"}`}>
        <div className="triangle"></div>
        <h2>{cell.contr} contributions</h2>
        <p>{dayjs(cell.date).locale("ru").format("dddd, MMMM D, YYYY")}</p>
      </div>
    </div>
  );
}

export default Cell;
