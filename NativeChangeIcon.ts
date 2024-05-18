import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type IconChangeOptions = {
  /** iOS only - prevents alert from appearing */
  useUnsafeSupressAlert?: boolean;
}
export interface Spec extends TurboModule {
    readonly getConstants: () => {};
    changeIcon: (iconName?: string, options?: IconChangeOptions) => Promise<string>;
    resetIcon: (optionsv: IconChangeOptions) => Promise<string>;
    getIcon: () => Promise<string>;
}

export default TurboModuleRegistry.get<Spec>('ChangeIcon');