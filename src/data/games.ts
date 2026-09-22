import type { GameItem } from "@/types/gamesConfig";
/** 不公开杜撰的游戏时长与评分；日后自行添加。 */
export const gamesData: GameItem[] = [];
export function getGamesList(): GameItem[] { return gamesData; }
