const checkPassword = require("./main").checkPassword;

test ("Sanity check", () => {
    expect(1).toBe(1);
});

test ("Password 1234567 has strength 1", () => {
    expect(checkPassword("1234567")).toBe(1);
}); 
test("Password 12345678 has strength 2", () => {
    expect(checkPassword("12345678")).toBe(2);
});