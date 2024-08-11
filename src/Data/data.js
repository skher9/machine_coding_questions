import GridLights from "../Grid Lights/GridLights";
import TictacToe from "../Tic_Tac_Toe/TictacToe";

const projectData = [
    {
        name: "Grid Lights",
        path: "/TicTacToe/",
        component: <GridLights />
    },
    {
        name: "Tic Tac Toe",
        path: "/GridLights",
        component: <TictacToe />
    }
];

export default projectData;
