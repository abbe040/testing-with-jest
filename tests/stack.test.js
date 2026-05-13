const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('Skall kunna pusha och popa element i rätt ordning (LIFO)', () => {
    stack.push('Kaffe');
    stack.push('Kaka');
    expect(stack.pop()).toEqual('Kaka');
    expect(stack.pop()).toEqual('Kaffe');
});

test('Ska ge undefined om man försöker popa en tom stack', () => {
    // Vi popar tills stacken är helt tom
    while(stack.peek() !== undefined) {
        stack.pop();
    }
    expect(stack.pop()).toBeUndefined();
});