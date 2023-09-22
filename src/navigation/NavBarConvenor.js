import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GradingIcon from "@mui/icons-material/Grading";
import PublishIcon from '@mui/icons-material/Publish';

//Convenor nav bar
export const navDataConvenor = [
  {
    id: 0,
    icon: <GridViewIcon />,
    text: "View Thesis Projects",
    link: "/view-thesis-projects-academic",
  },
  {
    id: 1,
    icon: <AddIcon />,
    text: "Add Thesis Project",
    link: "/add-thesis-project",
  },
  {
    id: 2,
    icon: <EditIcon />,
    text: "Edit Thesis Project",
    link: "/edit-thesis-project",
  },
  {
    id: 3,
    icon: <CalendarMonthIcon />,
    text: "View Presentation Timetable",
    link: "/view-presentation-timetable-aca",
  },
  {
    id: 4,
    icon: <EventAvailableIcon />,
    text: "Academic Availabilities",
    link: "/view-academic-availabilities",
  },
  {
    id: 5,
    icon: <GradingIcon />,
    text: "Grade Students",
    link: "/grade-students",
  },
  {
    id: 6,
    icon: <FeedbackIcon />,
    text: "Feedback And Bug Tickets",
    link: "/submit-feedback",
  },
  {
    id: 7,
    icon: <GridViewIcon/>,
    text: "Presentation Display",
    link: "/presentation-display",
  },
  {
    id: 8,
    icon: <PublishIcon/>,
    text: "Project Allocation",
    link: "/project-allocations",
  },
];