function DaysOfWeek() {
  const dayNames = {
    1: "Пн",
    3: "Ср",
    5: "Пт",
  };

  const weekDays = Array.from(new Array(7));

  return (
    <>
      {weekDays.map((_, index) => (
        <div className="graph-day-names-item" key={index + 1}>
          {dayNames[index + 1]}
        </div>
      ))}
    </>
  );
}

export default DaysOfWeek;
