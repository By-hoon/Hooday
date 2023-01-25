import { useEffect, useRef, useState } from "react";
import { colors } from "../shared/Constants";
import { PaletteProps } from "../shared/Props";
import PaletteAffiliation from "./PaletteAffiliation";

const Palette = ({ scheduleColor, setScheduleColor }: PaletteProps) => {
  const [currentColor, setCurrentColor] = useState("");
  const [baseColor, setBaseColor] = useState("");
  const [isShowAffiliation, setIsShowAffiliation] = useState(false);

  const affiliationRef = useRef<HTMLInputElement>(null);

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

  const onClickOutSide = (e: any) => {
    if (isShowAffiliation && affiliationRef.current && !affiliationRef.current.contains(e.target)) {
      setIsShowAffiliation(false);
      setBaseColor("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutSide);
    return () => {
      document.removeEventListener("click", onClickOutSide);
    };
  });

  return (
    <div className="palette__container" ref={affiliationRef}>
      {colors.map((color, index) => (
        <div
          key={color}
          className={`color__container ${currentColor === color ? "display-color" : null}`}
          style={{ backgroundColor: color }}
          onMouseOver={() => {
            onMouseOverColor(color);
          }}
          onMouseLeave={() => {
            setCurrentColor("");
          }}
          onClick={() => {
            isAppearAffiliation(color);
          }}
        />
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
