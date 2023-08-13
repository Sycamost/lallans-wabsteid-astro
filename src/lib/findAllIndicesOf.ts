export default function (searchFor: string, searchIn: string): number[] {
  const indices: number[] = [];

  let index = -1;
  while (index !== searchIn.length - 1) {
    index = searchIn.slice(index + 1).indexOf(searchFor) + index + 1;
    if (index === -1) {
      break;
    }
    indices.push(index);
  }

  return indices;
}
