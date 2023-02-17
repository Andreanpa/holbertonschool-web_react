import { getFullYear, getFooterCopy, getLatestNotification } from "./utils.js";

test("returns the correct year", () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test("Returns the correct string when the argument is true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("Returns the correct string when the argument is false", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returned string for getLatestNotification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
