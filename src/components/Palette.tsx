import { useState } from "react";
import { colors } from "../shared/Constants";
import { PaletteProps } from "../shared/Props";
import PaletteAffiliation from "./PaletteAffiliation";

const Palette = ({ scheduleColor, setScheduleColor }: PaletteProps) => {
  const [currentColor, setCurrentColor] = useState("");
  const [affiliationColor, setAffiliationColor] = useState("");
  const [isShowAffiliation, setIsShowAffiliation] = useState(false);

  const onMouseOverColor = (color: string) => {
    setCurrentColor(color);
  };

  const appearAffiliation = (color: string) => {
    setIsShowAffiliation(true);
    setAffiliationColor(color);
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
            appearAffiliation(color);
          }}
        ></div>
      ))}
      {isShowAffiliation ? (
        <PaletteAffiliation
          scheduleColor={scheduleColor}
          setScheduleColor={setScheduleColor}
          setIsShowAffiliation={setIsShowAffiliation}
          affiliationColor={affiliationColor}
        />
      ) : null}
    </div>
  );
};

export default Palette;
