import GridLights from "../Grid Lights/GridLights";
import Pagination from "../Pagination/Pagination";
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
    },
    {
        name: "Pagination",
        path: "/Pagination",
        component: <Pagination />
    }
];

export default projectData;
