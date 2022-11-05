import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});
test('Number of items  to be greater than = 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('There is a JS in this title', () => {
  expect(dataTest).toMatch(/JS/);
});

test('The Title contains React', () => {
  expect(dataTest).toMatch(/React/);
});

// test('The Title contains Angular', () => {
//   expect(dataTest).toMatch(/Angular/);
// });

// Arrays

const data2 = ['React Native', 'React'];

test('The List of courses contains React Native and React', () => {
  expect(['React Native', 'React', 'Meteor JS']).toEqual(
    expect.arrayContaining(data2)
  );
});

// Object

test('The first courses to have a property title', () => {
  expect(data[0]).toHaveProperty('title');
});
