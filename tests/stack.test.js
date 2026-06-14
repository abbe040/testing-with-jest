const stack = require('../src/stack'); // <--- DENNA RAD SAKNAS

test('pop removes the top element', () => {
    stack.push("först");
    stack.push("sist");
    expect(stack.pop()).toBe("sist");
    expect(stack.peek()).toBe("först");
});