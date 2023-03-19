import { useEffect, useRef, useState } from "react";
import { colors } from "../shared/Constants";
import { PaletteProps } from "../shared/Props";
import PaletteAffiliation from "./PaletteAffiliation";

const Palette = ({ setScheduleColor }: PaletteProps) => {
  const [baseColor, setBaseColor] = useState("");
  const [isShowAffiliation, setIsShowAffiliation] = useState(false);

  const affiliationRef = useRef<HTMLInputElement>(null);
  const isAppearAffiliation = (color: string) => {
    if (color === baseColor) {
      setIsShowAffiliation(false);
      setBaseColor("");
      return;
    }
    setIsShowAffiliation(true);
    setBaseColor(color);
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
      {colors.map((color) => (
        <div
          key={color}
          className={`color__container`}
          style={{ backgroundColor: `#${color}` }}
          onClick={() => {
            isAppearAffiliation(color);
          }}
        />
      ))}
      {isShowAffiliation ? (
        <PaletteAffiliation setScheduleColor={setScheduleColor} baseColor={baseColor} />
      ) : null}
    </div>
  );
};

export default Palette;
