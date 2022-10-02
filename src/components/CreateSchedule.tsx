import { useState } from "react";
import Palette from "./Palette";

const CreateSchedule = () => {
  const [currentPage, setCurrentPage] = useState("color");
  const [scheduleColor, setScheduleColor] = useState("");

  const onSubmit = () => {
    alert(`스케쥴 생성이 완료되었습니다.`);
  };

  const formRender = () => {
    switch (currentPage) {
      case "color": {
        return <Palette scheduleColor={scheduleColor} setScheduleColor={setScheduleColor} />;
      }
    }
    return null;
  };

  return (
    <div className="form__container">
      <form onSubmit={onSubmit}>{formRender()}</form>
    </div>
  );
};

export default CreateSchedule;
