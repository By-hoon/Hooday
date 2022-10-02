import { useState } from "react";
import { colors } from "../shared/Contants";

interface PaletteProps {
  scheduleColor: string;
  setScheduleColor: React.Dispatch<React.SetStateAction<string>>;
}

const Palette = ({ scheduleColor, setScheduleColor }: PaletteProps) => {
  const [currentColor, setCurrentColor] = useState("");
  const onMouseOverColor = (color: string) => {
    setCurrentColor(color);
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
        ></div>
      ))}
    </div>
  );
};

export default Palette;
