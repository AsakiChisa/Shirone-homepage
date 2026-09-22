/** 友情链接数据；等你添加真实友链后再公开。 */
export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}
export const friendsData: FriendItem[] = [];
export function getFriendsList(): FriendItem[] { return friendsData; }
export function getShuffledFriendsList(): FriendItem[] { return [...friendsData]; }
