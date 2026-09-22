import type { ProjectsConfig } from "@/types/projectsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const projectsConfig: ProjectsConfig = withUserConfig("projects", {
	enable: true,
	title: "$t:projects",
	description: "$t:projectsBanner",
	categories: [
		{ key: "tools", label: "实用工具", icon: "material-symbols:build-rounded" },
		{ key: "web", label: "网站项目", icon: "material-symbols:language-rounded" },
		{ key: "server", label: "服务器", icon: "material-symbols:dns-rounded" },
	],
});
