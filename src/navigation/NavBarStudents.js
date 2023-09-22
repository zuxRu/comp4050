import GridViewIcon from "@mui/icons-material/GridView";
import PublishIcon from "@mui/icons-material/Publish";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PreviewIcon from '@mui/icons-material/Preview';

//students nav bar
export const navDataStudents = [
  {
    id: 0,
    icon: <GridViewIcon />,
    text: "View Thesis Projects",
    link: "/view-thesis-projects",
  },
  {
    id: 1,
    icon: <FormatListNumberedIcon />,
    text: "Submit Thesis Preferences",
    link: "/submit-preferences",
  },
  {
    id: 2,
    icon: <SelfImprovementIcon />,
    text: "Submit Self Proposed Preference",
    link: "/submit-selfproposed-preferences",
  },
  {
    id: 3,
    icon: <PreviewIcon />,
    text: "Review Project Preferences",
    link: "/review-project-preferences",
  },
  {
    id: 4,
    icon: <CalendarMonthIcon />,
    text: "View Presentation Timetable",
    link: "/view-presentation-timetable-students",
  },
  {
    id: 5,
    icon: <FeedbackIcon />,
    text: "Feedback And Bug Tickets",
    link: "/submit-feedback",
  },
];
