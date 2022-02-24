const {addCounter, removeCounter, incrementCounter} = require("./main4");
import { deepFreeze } from './util'

test('addCounter should add 0', () => {
    const listBefore = [];
    const listAfter = [0];
    deepFreeze(listBefore);
    expect(addCounter(listBefore)).toEqual(listAfter);
});

test('removeCounter should remove item at index', () => {
    const listBefore = [10, 20, 30];
    const listAfter = [10, 30];
    deepFreeze(listBefore);
    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
});


test('incrementCounter should increment item at index', () => {
    const listBefore = [10, 20, 30];
    const listAfter = [10, 21, 30];
    deepFreeze(listBefore);
    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
});

