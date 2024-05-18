import { NativeModules } from "react-native";

export type IconChangeOptions = {
  /** iOS only - prevents alert from appearing */
  useUnsafeSupressAlert?: boolean;
}

export const changeIcon = (iconName?: string, options?: IconChangeOptions): Promise<string> => NativeModules.ChangeIcon.changeIcon(iconName, options);
export const resetIcon = (options?: IconChangeOptions) => changeIcon(undefined, options);
export const getIcon = (): Promise<string> => NativeModules.ChangeIcon.getIcon();
