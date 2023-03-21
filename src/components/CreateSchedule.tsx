import { useCallback, useState } from "react";
import useControlRenderingByClick from "../hooks/useControlRenderingByClick";
import Palette from "./Palette";

const CreateSchedule = () => {
  const [scheduleColor, setScheduleColor] = useState("058EE2");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState(0);
  const { show: isOpenPalette, setShow: setIsOpenPalette, ref: createRef } = useControlRenderingByClick();

  const openPalette = () => {
    setIsOpenPalette(true);
  };
  const onSetScheduleColor = (color: string) => {
    setScheduleColor(color);
    setIsOpenPalette(false);
  };

  const changeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);
  const changeContent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);
  const changeTime = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(Number(e.target.value));
  }, []);

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
        <div className="title-input__container">
          <div className="input-title">제목</div>
          <input
            className="title__input"
            type="text"
            value={title}
            placeholder="제목을 입력해 주세요."
            onChange={changeTitle}
            required
          />
        </div>
        <div className="content-input__container">
          <div className="input-title">내용</div>
          <textarea
            className="content__input"
            placeholder="내용을 입력해 주세요."
            value={content}
            onChange={changeContent}
            required
          />
        </div>
        <div className="time-input__container">
          <div className="input-title">
            소요 시간 <span>단위: 분</span>
          </div>
          <input className="time__input" type="number" value={time} onChange={changeTime} required />
        </div>
        <div className="submit__container">
          <input type="submit" value="등록" />
        </div>
      </form>
    </div>
  );
};

export default CreateSchedule;
