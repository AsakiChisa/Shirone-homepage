import type { TimelineItem } from "@/types/timelineConfig";
/** 已清除演示职业/学校/时间线；保留供日后添加真实记录。 */
export const timelineData: TimelineItem[] = [];
export function getTimelineList(): TimelineItem[] { return timelineData; }
