import type { SkillItem } from "@/types/skillsConfig";
/** 等作者自行填写实际掌握程度。 */
export const skillsData: SkillItem[] = [];
export function getSkillsList(): SkillItem[] { return skillsData; }
