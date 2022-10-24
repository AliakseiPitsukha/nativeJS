import {mult, sum} from "./01";

test('sum should be correct', () => {
    const a = 3;
    const b = 5;
    const c = 6;

    const result1 = sum(a, b);
    const result2 = sum(b, c);

    expect(result1).toBe(8)
    expect(result2).toBe(11)
})

test('multiply should be correct', () => {
    const a = 3;
    const b = 5;
    const c = 6;

    const result1 = mult(a, b);
    const result2 = mult(b, c);

    expect(result1).toBe(15)
    expect(result2).toBe(30)
})