export interface ScheduleProps {
  id: string;
  color: string;
  name: string;
  detail: string;
  required: number;
}

export interface PaletteProps {
  scheduleColor: string;
  setScheduleColor: React.Dispatch<React.SetStateAction<string>>;
}
