import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/** Chisa 的公开资料；头像使用 GitHub 公共头像，随 GitHub 账户更新。 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "https://github.com/AsakiChisa.png",
	name: "Chisa",
	bio: "喜欢折腾服务器、网络、AI 和数码产品，也喜欢游戏和二次元。这里记录我的项目、技术笔记和日常生活。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/AsakiChisa",
		},
	],
});
