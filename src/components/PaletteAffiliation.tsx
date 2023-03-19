import { colorsAffiliation } from "../shared/Constants";

interface AffiliationProps {
  setColor: (color: string) => void;
  baseColor: string;
}

const PaletteAffiliation = ({ setColor, baseColor }: AffiliationProps) => {
  return (
    <div className="palette-affiliation__container">
      <div className="affiliation-colors__container">
        {colorsAffiliation[baseColor].map((colorAffiliation) => {
          return (
            <div
              key={colorAffiliation}
              className={`affiliation-color__container`}
              style={{ backgroundColor: `#${colorAffiliation}` }}
              onClick={() => {
                setColor(colorAffiliation);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PaletteAffiliation;
