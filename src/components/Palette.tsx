import { memo, useEffect, useState } from "react";
import useControlRenderingByClick from "../hooks/useControlRenderingByClick";
import { colors } from "../shared/Constants";
import PaletteAffiliation from "./PaletteAffiliation";

interface PaletteProps {
  setColor: (color: string) => void;
}

const Palette = ({ setColor }: PaletteProps) => {
  let [baseColor, setBaseColor] = useState("");
  const {
    show: isShowAffiliation,
    setShow: setIsShowAffiliation,
    ref: affiliationRef,
  } = useControlRenderingByClick();

  const isAppearAffiliation = (color: string) => {
    if (color === baseColor) {
      setIsShowAffiliation(false);
      return;
    }
    setIsShowAffiliation(true);
    setBaseColor(color);
  };

  useEffect(() => {
    if (!isShowAffiliation) setBaseColor("");
  }, [isShowAffiliation]);

  return (
    <div className="palette__container">
      <div className="colors__container" ref={affiliationRef}>
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
      </div>
      {isShowAffiliation ? <PaletteAffiliation setColor={setColor} baseColor={baseColor} /> : null}
    </div>
  );
};

export default memo(Palette);
