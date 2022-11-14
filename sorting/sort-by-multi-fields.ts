const array = [
  { routine: false, name: 'abc' },
  { routine: false, name: 'bac' },
  { routine: false, name: 'cab' },
  { routine: true, name: 'bac' },
  { routine: true, name: 'cab' },
  { routine: true, name: 'abc' },
];

console.log('###', array);

array.sort((a, b) => {
  return (Number(b.routine) - Number(a.routine)) || (a.name ?? '').localeCompare(b.name ?? '')
});

console.log('###', array);
