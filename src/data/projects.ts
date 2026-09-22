/** Chisa 的公开项目。新增项目可在此数组继续追加。 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "chisa-format",
		title: "飞鼠格式化站",
		summary: "在线文件、图片、音乐和文档格式转换工具。",
		category: "tools",
		phase: "building",
		technologies: ["文件转换", "Web"],
		icon: "material-symbols:deployed-code-outline-rounded",
		featured: true,
		website: "https://format.chisa.wiki",
	},
	{
		key: "chisa-nav",
		title: "Chisa 导航",
		summary: "整理常用网站、个人收藏与实用工具的导航主页。",
		category: "web",
		phase: "building",
		technologies: ["导航", "Web"],
		icon: "material-symbols:explore-rounded",
		featured: true,
		website: "https://nav.chisa.wiki",
	},
	{
		key: "chisa-status",
		title: "Chisa Server Status",
		summary: "基于 Komari 的服务器运行状态与监控页面。",
		category: "server",
		phase: "building",
		technologies: ["Komari", "服务器监控"],
		icon: "material-symbols:dns-rounded",
		featured: true,
		website: "https://status.chisa.wiki",
	},
];

export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
