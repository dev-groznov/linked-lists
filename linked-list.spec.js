const LinkedList = require('./linked-list')

let list;

beforeEach(() => {
  list = new LinkedList();
});

describe('Basic Functions', () => {
  test('appends elements to the end of the list', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');

    expect(list.head().value).toBe('dog');
    expect(list.tail().value).toBe('parrot');
    expect(list.size()).toBe(3);
  });

  test('prepends an element to the beginning of the list', () => {
    list.append('cat');
    list.prepend('hamster');

    expect(list.head().value).toBe('hamster');
    expect(list.tail().value).toBe('cat');
    expect(list.size()).toBe(2);
  });

  test('returns the correct size of the list', () => {
    list.append('a');
    expect(list.size()).toBe(1);

    list.append('b');
    list.append('c');
    expect(list.size()).toBe(3);
  });

  test('returns the correct head and tail nodes', () => {
    list.append('dog');
    list.append('cat');

    expect(list.head().value).toBe('dog');
    expect(list.tail().value).toBe('cat');
  });

  test('returns the node at the given index', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');

    expect(list.at(0).value).toBe('dog');
    expect(list.at(1).value).toBe('cat');
    expect(list.at(2).value).toBe('parrot');
    expect(list.at(5)).toBeUndefined();
  });

  test('pops the first element and returns its value', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');

    expect(list.pop()).toBe('dog');
    expect(list.head().value).toBe('cat');
    expect(list.size()).toBe(2);
  });

  test('checks if a value exists in the list', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');

    expect(list.contains('cat')).toBe(true);
    expect(list.contains('hamster')).toBe(false);
  });

  test('returns the index of a value or -1 if not found', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');

    expect(list.findIndex('cat')).toBe(1);
    expect(list.findIndex('parrot')).toBe(2);
    expect(list.findIndex('hamster')).toBe(-1);
  });

  test('works with multiple animals', () => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');
    list.prepend('hamster');
    list.append('snake');
    list.append('turtle');

    expect(list.size()).toBe(6);
    expect(list.head().value).toBe('hamster');
    expect(list.tail().value).toBe('turtle');

    expect(list.contains('parrot')).toBe(true);
    expect(list.contains('hamster')).toBe(true);
    expect(list.contains('lion')).toBe(false);

    expect(list.findIndex('hamster')).toBe(0);
    expect(list.findIndex('dog')).toBe(1);
    expect(list.findIndex('cat')).toBe(2);
    expect(list.findIndex('parrot')).toBe(3);
    expect(list.findIndex('snake')).toBe(4);
    expect(list.findIndex('turtle')).toBe(5);
    expect(list.findIndex('lion')).toBe(-1);

    expect(list.at(0).value).toBe('hamster');
    expect(list.at(3).value).toBe('parrot');
    expect(list.at(5).value).toBe('turtle');

    expect(list.pop()).toBe('hamster');
    expect(list.head().value).toBe('dog');
    expect(list.size()).toBe(5);
  });
});

describe('insertAt', () => {
  beforeEach(() => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');
  });

  test('inserts a single value at the beginning (index 0)', () => {
    list.insertAt(0, 'hamster');

    expect(list.head().value).toBe('hamster');
    expect(list.at(1).value).toBe('dog');
    expect(list.size()).toBe(4);
  });

  test('inserts a single value in the middle', () => {
    list.insertAt(1, 'hamster');

    expect(list.at(0).value).toBe('dog');
    expect(list.at(1).value).toBe('hamster');
    expect(list.at(2).value).toBe('cat');
    expect(list.size()).toBe(4);
  });

  test('inserts a single value at the end', () => {
    list.insertAt(3, 'snake');

    expect(list.tail().value).toBe('snake');
    expect(list.size()).toBe(4);
  });

  test('inserts multiple values at once', () => {
    list.insertAt(1, 'hamster', 'snake');

    expect(list.at(0).value).toBe('dog');
    expect(list.at(1).value).toBe('hamster');
    expect(list.at(2).value).toBe('snake');
    expect(list.at(3).value).toBe('cat');
    expect(list.size()).toBe(5);
  });

  test('throws RangeError for negative index', () => {
    expect(() => list.insertAt(-1, 'hamster')).toThrow(RangeError);
  });

  test('throws RangeError for index greater than size', () => {
    expect(() => list.insertAt(10, 'hamster')).toThrow(RangeError);
  });
});

describe('removeAt', () => {
  beforeEach(() => {
    list.append('dog');
    list.append('cat');
    list.append('parrot');
    list.append('snake');
  });

  test('removes the first element (index 0)', () => {
    list.removeAt(0);

    expect(list.head().value).toBe('cat');
    expect(list.size()).toBe(3);
  });

  test('removes an element from the middle', () => {
    list.removeAt(1);

    expect(list.at(0).value).toBe('dog');
    expect(list.at(1).value).toBe('parrot');
    expect(list.size()).toBe(3);
  });

  test('removes the last element', () => {
    list.removeAt(3);

    expect(list.tail().value).toBe('parrot');
    expect(list.size()).toBe(3);
  });

  test('throws RangeError for negative index', () => {
    expect(() => list.removeAt(-1)).toThrow(RangeError);
  });

  test('throws RangeError for index equal to size', () => {
    expect(() => list.removeAt(4)).toThrow(RangeError);
  });

  test('throws RangeError for index greater than size', () => {
    expect(() => list.removeAt(10)).toThrow(RangeError);
  });
});