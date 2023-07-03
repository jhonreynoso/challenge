import { FormControl } from "@angular/forms";
import { StatsEntity } from "../enum/stats.enum";

export interface Stats {
    [StatsEntity.ID]?: number;
    [StatsEntity.FIRST_NAME]?: string;
    [StatsEntity.LAST_NAME]?: string;
    [StatsEntity.POSITION]?: string;
    [StatsEntity.POINTS_PER_GAME]?: number;
    [StatsEntity.ASSISTS_PER_GAME]?: number;
    [StatsEntity.REBOUNDS_PER_GAME]?: number;
}

export interface StatsForm {
    [StatsEntity.ID]?: FormControl<number | null>;
    [StatsEntity.FIRST_NAME]?: FormControl<string | null>;
    [StatsEntity.LAST_NAME]?: FormControl<string | null>;
    [StatsEntity.POSITION]?: FormControl<string | null>;
    [StatsEntity.POINTS_PER_GAME]?: FormControl<number | null>;
    [StatsEntity.ASSISTS_PER_GAME]?: FormControl<number | null>;
    [StatsEntity.REBOUNDS_PER_GAME]?: FormControl<number | null>;
}
