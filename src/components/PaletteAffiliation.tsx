import { PaletteProps } from "../shared/Props";

interface AffiliationProps extends PaletteProps {
  setIsShowAffiliation: React.Dispatch<React.SetStateAction<boolean>>;
  affiliationColor: string;
}

const PaletteAffiliation = ({
  scheduleColor,
  setScheduleColor,
  setIsShowAffiliation,
  affiliationColor,
}: AffiliationProps) => {
  const disappearAffiliation = () => {
    setIsShowAffiliation(false);
  };

  return (
    <div className="palette-affiliation__container">
      <div className="disappear-affiliation-icon__container">
        <span onClick={disappearAffiliation}>X</span> {/* 추후 아이콘으로 변경 */}
      </div>
      <div className="affiliation-color__container"></div>
      {/* Constant 파일에 계열색 배열 추가하여 맵핑 */}
      {/* 마찬가지로 Scss 파일에도 추가 */}
    </div>
  );
};

export default PaletteAffiliation;
