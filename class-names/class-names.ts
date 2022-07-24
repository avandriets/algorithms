const classNames = [
  'header', 'menu', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link', 'link',
];

const map: { [key: string]: number; } = classNames.reduce((acc: { [key: string]: number; }, c: string) => {
  acc[c] = (acc[c] ?? 0) + 1;
  return acc;
}, {});

console.log('###', map);
console.log('###', Object.keys(map).sort((a, b) => map[b] - map[a]));
