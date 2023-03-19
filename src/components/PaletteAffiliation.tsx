import { colorsAffiliation } from "../shared/Constants";
import { PaletteProps } from "../shared/Props";

interface AffiliationProps extends PaletteProps {
  baseColor: string;
}

const PaletteAffiliation = ({ setScheduleColor, baseColor }: AffiliationProps) => {
  const onSetScheduleColor = (colorAffiliation: string) => {
    setScheduleColor(colorAffiliation);
  };

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
                onSetScheduleColor(colorAffiliation);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PaletteAffiliation;
