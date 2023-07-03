import { PlayerPosition } from "../enum/stats.enum";
import { Stats } from "../models/stats.model";
import { TreeNode } from "src/app/shared/models/tree-node.interface";

export const rowData: TreeNode<Stats>[] = [
    {
        data: {
            id: 1,
            first_name: "Stephen",
            last_name: "Curry",
            position: PlayerPosition.POINT_GUARD,
            points_per_game: 28,
            assists_per_game: 8.8,
            rebounds_per_game: 4.3
        },
    },
    {
        data: {
            id: 2,
            first_name: "Lebron",
            last_name: "James",
            position: PlayerPosition.SMALL_FOWARD,
            points_per_game: 24.5,
            assists_per_game: 8.8,
            rebounds_per_game: 10.3
        },
    },
    {
        data: {
            id: 3,
            first_name: "AL",
            last_name: "Holford",
            position: PlayerPosition.CENTER,
            points_per_game: 17,
            assists_per_game: 8.8,
            rebounds_per_game: 12
        },
    },
    {
        data: {
            id: 4,
            first_name: "Dwayne",
            last_name: "Wade",
            position: PlayerPosition.SHOOTING_GUARD,
            points_per_game: 26,
            assists_per_game: 5.8,
            rebounds_per_game: 4.3
        },
    },
    {
        data: {
            id: 5,
            first_name: "Karl",
            last_name: "Anthony Towns",
            position: PlayerPosition.CENTER,
            points_per_game: 22.5,
            assists_per_game: 13.8,
            rebounds_per_game: 4.3
        },
    }
];
