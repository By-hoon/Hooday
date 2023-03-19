import { useState } from "react";
import Palette from "./Palette";

const CreateSchedule = () => {
  const [scheduleColor, setScheduleColor] = useState("058EE2");
  const [isOpenPalette, setIsOpenPalette] = useState(false);

  const openPalette = () => {
    setIsOpenPalette(true);
  };
  const onSetScheduleColor = (color: string) => {
    setScheduleColor(color);
    setIsOpenPalette(false);
  };

  const onSubmit = () => {
    alert(`스케쥴 생성이 완료되었습니다.`);
  };

  return (
    <div className="create-schedule__container">
      <form onSubmit={onSubmit}>
        <div className="schedule-color__container">
          <div className="schedule-color" style={{ backgroundColor: `#${scheduleColor}` }} />
          <div className="color-changer" onClick={openPalette}>
            변경
          </div>
        </div>
        {isOpenPalette ? <Palette setColor={onSetScheduleColor} /> : null}
      </form>
    </div>
  );
};

export default CreateSchedule;
