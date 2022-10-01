interface PaletteProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const Palette = ({ color, setColor }: PaletteProps) => {
  return <div className="palette__container">palette</div>;
};

export default Palette;
