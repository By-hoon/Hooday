import { useEffect, useState } from "react";
import { ScheduleProps } from "../shared/Props";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../firebase";

const Schedules = () => {
  const [schedules, setSchedules] = useState<ScheduleProps[]>([]);

  const getSchedules = async () => {
    const colRef = collection(dbService, "schedules");
    try {
      const docsSnap = await getDocs(colRef);
      if (docsSnap.docs.length > 0) {
        docsSnap.forEach((doc) => {
          setSchedules((_) => _.concat(doc.data() as ScheduleProps));
        });
      } else console.log("데이터가 존재하지 않습니다.");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSchedules();
  }, []);
  return <div className="schedules__container">{<>{console.log(schedules)}</>}</div>;
};

export default Schedules;
