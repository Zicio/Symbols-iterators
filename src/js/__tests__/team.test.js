import Team from '../team';
import Person from '../person';

test('should add one Person', () => {
  const first = new Person({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
  const team = new Team();
  team.add(first);
  const expected = [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }];
  expect(team.toArray()).toEqual(expected);
});

test('should give an error when adding the same Person', () => {
  const first = new Person({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
  const team = new Team();
  team.add(first);
  expect(() => team.add(first)).toThrow(new Error('Вы уже добавили этого персонажа'));
});

test('should add some Persons', () => {
  const first = new Person({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
  const second = new Person({
    name: 'Демон',
    type: 'Daemon',
    health: 50,
    level: 2,
    attack: 50,
    defence: 10,
  });
  const team = new Team();
  team.addAll(first, second);
  const expected = [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }, {
    name: 'Демон',
    type: 'Daemon',
    health: 50,
    level: 2,
    attack: 50,
    defence: 10,
  }];
  expect(team.toArray()).toEqual(expected);
});
