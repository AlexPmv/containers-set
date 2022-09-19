import Team from '../team';
import Character from '../character';

test('Try to add repeating character in team using team.add()', () => {
  const team = new Team();

  const valera = new Character('Valera', 'mage');
  const stas = new Character('Stas', 'warrior');
  const alex = new Character('Alex', 'archer');

  team.add(valera);
  team.add(stas);
  team.add(alex);

  expect(() => team.add(valera)).toThrow('Valera already contains in team');
});

test('Adding multiple characters in team, using team.addAll(), trying to add only 3 unique characters', () => {
  const team = new Team();

  const valera = new Character('Valera', 'mage');
  const stas = new Character('Stas', 'warrior');
  const alex = new Character('Alex', 'archer');

  team.addAll(valera, stas, alex, valera, alex);

  expect(team.members.size).toBe(3);
});

test('Should return Array from Set property using team.toArray()', () => {
  const team = new Team();

  const valera = new Character('Valera', 'mage');
  const stas = new Character('Stas', 'warrior');
  const alex = new Character('Alex', 'archer');

  team.addAll(valera, stas, alex);

  expect(team.toArray()).toEqual([
    { name: 'Valera', type: 'mage' },
    { name: 'Stas', type: 'warrior' },
    { name: 'Alex', type: 'archer' },
  ]);
});
