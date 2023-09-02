import GridViewIcon from '@mui/icons-material/GridView';
import PublishIcon from '@mui/icons-material/Publish';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FeedbackIcon from '@mui/icons-material/Feedback';

//students nav bar
export const navDataStudents = [
    {
        id: 0,
        icon: <GridViewIcon/>,
        text: "View Thesis Projects",
        link: "/view-thesis-projects"
    },
    {
        id: 1,
        icon: <PublishIcon/>,
        text: "Submit Thesis Preferences",
        link: "/submit-preferences"
    },
    {
        id: 2,
        icon: <SelfImprovementIcon/>,
        text: "Submit Self Proposed Preference",
        link: "/submit-selfproposed-preferences"
    },
    {
        id: 3,
        icon: <FeedbackIcon/>,
        text: "Feedback And Bug Tickets",
        link: "/submit-feedback"
    }
]