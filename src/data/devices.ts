import type { DeviceItem } from "@/types/devicesConfig";
/** 留空，等 Chisa 自己决定要公开哪些设备；页面功能保留。 */
export const devicesData: DeviceItem[] = [];
export function getDevicesList(): DeviceItem[] { return devicesData; }
