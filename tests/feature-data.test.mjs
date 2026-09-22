import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
	filterByDisabledKeys,
	resolveDevicesData,
	resolveProjectsData,
	resolveSkillsData,
	resolveTimelineData,
} from "../src/utils/feature-data.ts";

// Each resolver receives isolated fixtures; none of the site's published data is
// required, so the checks still work when Chisa has not published personal data.
describe("Feature Data & Resolver Tests", () => {
	it("filterByDisabledKeys correctly filters items by key/id/name/title", () => {
		const items = [
			{ key: "item-1", name: "One" },
			{ key: "item-2", name: "Two" },
			{ key: "item-3", name: "Three" },
		];
		const filtered = filterByDisabledKeys(items, ["item-2"]);
		assert.deepEqual(filtered.map((i) => i.key), ["item-1", "item-3"]);
	});

	it("resolveProjectsData applies disabledKeys and individual enable flags", () => {
		const items = [
			{ key: "visible-one", enable: true },
			{ key: "hidden-project", enable: true },
			{ key: "visible-two" },
			{ key: "disabled-project", enable: false },
		];
		const resolved = resolveProjectsData(
			{ enable: true, categories: [], disabledKeys: ["hidden-project"] },
			items,
		);
		assert.deepEqual(resolved.map((p) => p.key), ["visible-one", "visible-two"]);
	});

	it("resolveSkillsData applies disabledNames and individual enable flags", () => {
		const items = [
			{ name: "Visible skill" },
			{ name: "Hidden skill" },
			{ name: "Disabled skill", enable: false },
		];
		const resolved = resolveSkillsData(
			{ enable: true, categories: [], disabledNames: ["Hidden skill"] },
			items,
		);
		assert.deepEqual(resolved.map((s) => s.name), ["Visible skill"]);
	});

	it("resolveTimelineData applies disabledTitles and ascending order", () => {
		const items = [
			{ title: "New event", date: "2026.08" },
			{ title: "Hidden event", date: "2025.01" },
			{ title: "Old event", date: "2020.09" },
		];
		const resolved = resolveTimelineData(
			{ enable: true, categories: [], order: "asc", disabledTitles: ["Hidden event"] },
			items,
		);
		assert.deepEqual(resolved.map((t) => t.title), ["Old event", "New event"]);
	});

	it("resolveTimelineData sorts correctly by date in desc and asc order", () => {
		const customItems = [
			{ title: "Old", date: "2021.05" },
			{ title: "Recent", date: "2024.10" },
			{ title: "Present", date: "2025.01 - Present" },
			{ title: "Middle", date: "2023.01" },
		];
		const descRes = resolveTimelineData({ order: "desc" }, customItems);
		assert.deepEqual(descRes.map((i) => i.title), ["Present", "Recent", "Middle", "Old"]);
		const ascRes = resolveTimelineData({ order: "asc" }, customItems);
		assert.deepEqual(ascRes.map((i) => i.title), ["Old", "Middle", "Recent", "Present"]);
	});

	it("resolveDevicesData applies disabledIds and individual enable flags", () => {
		const items = [
			{ id: "visible-device" },
			{ id: "hidden-device" },
			{ id: "disabled-device", enable: false },
		];
		const resolved = resolveDevicesData(
			{ enable: true, categories: [], disabledIds: ["hidden-device"] },
			items,
		);
		assert.deepEqual(resolved.map((d) => d.id), ["visible-device"]);
	});
});
