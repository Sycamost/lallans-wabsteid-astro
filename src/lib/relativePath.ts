export default function (currentPath: string, relativePath: string) {
  if (relativePath.length > 2 && relativePath.slice(0, 3) === '../') {
    throw new Error('Cannot calculate relative path because it goes up a directory.');
  }

  if (currentPath.at(-1) !== '/') {
    currentPath = currentPath + '/';
  }
  relativePath = relativePath.replace(/^\.?\//, '');

  return currentPath + relativePath;
}
