import { useState } from "react";
import useControlRenderingByClick from "../hooks/useControlRenderingByClick";
import Palette from "./Palette";

const CreateSchedule = () => {
  const [scheduleColor, setScheduleColor] = useState("058EE2");
  const { show: isOpenPalette, setShow: setIsOpenPalette, ref: createRef } = useControlRenderingByClick();

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
        <div className="schedule-color__container" ref={createRef}>
          <div className="schedule-color" style={{ backgroundColor: `#${scheduleColor}` }} />
          <div className="color-changer" onClick={openPalette}>
            변경
          </div>
          {isOpenPalette ? <Palette setColor={onSetScheduleColor} /> : null}
        </div>
      </form>
    </div>
  );
};

export default CreateSchedule;
