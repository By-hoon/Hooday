import { useCallback, useState } from "react";
import { Icon } from "@iconify/react";
import useControlRenderingByClick from "../hooks/useControlRenderingByClick";
import Palette from "./Palette";
import { timeOptions } from "../shared/Constants";
import { ScheduleProps } from "../shared/Props";

import { collection, addDoc } from "firebase/firestore";
import { dbService } from "../firebase";
import { uuidv4 } from "@firebase/util";

const CreateSchedule = () => {
  const [scheduleColor, setScheduleColor] = useState("058EE2");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState(10);
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
    const targetTime = Math.floor(Number(e.target.value));
    setTime(targetTime);
  }, []);

  const changeTimeByButton = (option: number) => {
    if (time + option < 10 || time + option > 600) {
      alert("소요 시간은 10분 ~ 600분으로 설정 가능합니다.");
      return;
    }
    setTime((currentTime) => currentTime + option);
  };

  const onSubmit = () => {
    const scheduleData: ScheduleProps = {
      id: uuidv4(),
      color: scheduleColor,
      title,
      content,
      time,
    };
    addDoc(collection(dbService, "schedules"), scheduleData)
      .then(() => {
        alert(`스케쥴 생성이 완료되었습니다.`);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <input
            className="time__input"
            min={10}
            max={600}
            type="number"
            value={time}
            onChange={changeTime}
            required
          />
          <div className="time-options__container">
            {timeOptions.map((timeOption) => (
              <div className="time-option__container" key={timeOption}>
                <button
                  type="button"
                  className="time-option__button"
                  onClick={() => changeTimeByButton(timeOption)}
                >
                  <Icon icon="material-symbols:keyboard-arrow-up-rounded" />
                </button>
                <div className="time-option">{timeOption}</div>
                <button
                  type="button"
                  className="time-option__button"
                  onClick={() => changeTimeByButton(-timeOption)}
                >
                  <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="submit__container">
          <input type="submit" value="등록" />
        </div>
      </form>
    </div>
  );
};

export default CreateSchedule;
