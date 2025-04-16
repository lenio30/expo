import { type Options as AndroidRunOptions } from '../../run/android/resolveOptions';
import { type Options as IosRunOptions } from '../../run/ios/XcodeBuild.types';
import { hasDirectDevClientDependency } from '../../start/detectDevClient';

export function isDevClientBuild({
  runOptions,
  projectRoot,
}: {
  runOptions: AndroidRunOptions | IosRunOptions;
  projectRoot: string;
}) {
  if (!hasDirectDevClientDependency(projectRoot)) {
    return false;
  }

  if ('variant' in runOptions && runOptions.variant) {
    return runOptions.variant === 'debug';
  }
  if ('configuration' in runOptions && runOptions.configuration) {
    return runOptions.configuration === 'Debug';
  }

  return true;
}
