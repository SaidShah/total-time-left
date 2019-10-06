import { add, total } from "../components/TotalDaysContainer";

// unit testing, testing one thing
test("add 2 numbers together", () => {
    expect(add(2,3)).toBe(5);
    expect(add(2,5)).toBe(7);
});

// integration testing, testing multiple dependencies and multiple parts
test("expect the subtotal to show the total of the amounts", () => {
    expect(total(2,5)).toBe("total: $7");
});