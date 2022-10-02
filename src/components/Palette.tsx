interface PaletteProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const Palette = ({ color, setColor }: PaletteProps) => {
  return (
    <div className="palette__container">
      <div className="color__container red"></div>
      <div className="color__container blue"></div>
      <div className="color__container green"></div>
      <div className="color__container yellow"></div>
    </div>
  );
};

export default Palette;
