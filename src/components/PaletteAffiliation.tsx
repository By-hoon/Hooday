import { Icon } from "@iconify/react";
import { colorsAffiliation } from "../shared/Constants";
import { PaletteProps } from "../shared/Props";

interface AffiliationProps extends PaletteProps {
  setIsShowAffiliation: React.Dispatch<React.SetStateAction<boolean>>;
  baseColor: string;
}

const PaletteAffiliation = ({
  scheduleColor,
  setScheduleColor,
  setIsShowAffiliation,
  baseColor,
}: AffiliationProps) => {
  const disappearAffiliation = () => {
    setIsShowAffiliation(false);
  };
  const onSetScheduleColor = (colorAffiliation: string) => {
    setScheduleColor(colorAffiliation);
  };

  return (
    <div className="palette-affiliation__container">
      <div className="disappear-affiliation-icon__container">
        <span onClick={disappearAffiliation}>
          <Icon icon="bi:x-circle-fill" />
        </span>
      </div>
      <div className="affiliation-colors__container">
        {colorsAffiliation[baseColor].map((colorAffiliation) => {
          return (
            <div
              key={colorAffiliation}
              className={`affiliation-color__container ${colorAffiliation}`}
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
