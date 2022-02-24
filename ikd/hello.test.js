import counter from './hello'

console.log(counter);

test('counter increment', () => {
    expect(counter(0, {type: 'INCREMENT'})).toBe(1)
});

test('counter increment', () => {
    expect(counter(1, {type: 'INCREMENT'})).toBe(2)
});

test('counter increment', () => {
    expect(counter(2, {type: 'DECREMENT'})).toBe(1)
});

test('counter increment', () => {
    expect(counter(1, {type: 'DECREMENT'})).toBe(0)
});

