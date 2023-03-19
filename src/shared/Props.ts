export interface ScheduleProps {
  id: string;
  color: string;
  name: string;
  detail: string;
  required: number;
}

export interface PaletteProps {
  setScheduleColor: React.Dispatch<React.SetStateAction<string>>;
}
