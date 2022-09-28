import { ScheduleList } from "../../../components/ScheduleList";

let scheduleShowPage = document.createElement("div");
let page = scheduleShowPage;

page.id = "page_schedule_show";
page.classList.add("fade-in-500ms");

// page.appendChild(ContentTitle("目前排程清單"));

let testProps = [
  {
    w: [1, 2, 4],
    time: "10:48",
    area: [2, 0, 5, 0, 0, 0],
  },
  {
    w: [1, 3, 7],
    time: "12:48",
    area: [30, 30, 30, 30, 30, 30, 30, 30],
  },
  {
    w: [1, 3, 7],
    time: "12:48",
    area: [30, 30, 30, 30, 30, 30, 30, 30],
  },
  {
    w: [1, 3, 7],
    time: "12:48",
    area: [30, 30, 30, 30, 30, 30, 30, 30],
  },
  {
    w: [1, 3, 7],
    time: "12:48",
    area: [30, 30, 30, 30, 30, 30, 30, 30],
  },
];

function removeSchedule(index) {
  alert("remove schedule: " + index);
}

page.appendChild(ScheduleList(testProps, removeSchedule));

export default scheduleShowPage;
