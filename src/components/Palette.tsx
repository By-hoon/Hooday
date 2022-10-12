import { useState } from "react";
import { colors } from "../shared/Constants";
import { PaletteProps } from "../shared/Props";
import PaletteAffiliation from "./PaletteAffiliation";

const Palette = ({ scheduleColor, setScheduleColor }: PaletteProps) => {
  const [currentColor, setCurrentColor] = useState("");
  const [baseColor, setBaseColor] = useState("");
  const [isShowAffiliation, setIsShowAffiliation] = useState(false);

  const onMouseOverColor = (color: string) => {
    setCurrentColor(color);
  };

  const isAppearAffiliation = (color: string) => {
    if (isShowAffiliation) {
      setIsShowAffiliation(false);
      setBaseColor("");
    } else {
      setIsShowAffiliation(true);
      setBaseColor(color);
    }
  };

  return (
    <div className="palette__container">
      {colors.map((color, index) => (
        <div
          key={color}
          className={`color__container ${color} ${currentColor === color ? "display-color" : null}`}
          onMouseOver={() => {
            onMouseOverColor(color);
          }}
          onMouseLeave={() => {
            setCurrentColor("");
          }}
          onClick={() => {
            isAppearAffiliation(color);
          }}
        ></div>
      ))}
      {isShowAffiliation ? (
        <PaletteAffiliation
          scheduleColor={scheduleColor}
          setScheduleColor={setScheduleColor}
          setIsShowAffiliation={setIsShowAffiliation}
          baseColor={baseColor}
        />
      ) : null}
    </div>
  );
};

export default Palette;
