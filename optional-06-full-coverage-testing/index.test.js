import sum from "./index.js"; // Perbaiki import agar sesuai
import { test } from "node:test";
import assert from "node:assert";

test("sum function full coverage", () => {
  // Kasus normal
  assert.strictEqual(sum(1, 2), 3, "1 + 2 should be 3");
  assert.strictEqual(sum(5, 7), 12, "5 + 7 should be 12");

  // Kasus negatif
  assert.strictEqual(sum(-1, 5), 0, "-1 + 5 should return 0");
  assert.strictEqual(sum(5, -3), 0, "5 + -3 should return 0");
  assert.strictEqual(sum(-1, -2), 0, "-1 + -2 should return 0");

  // Kasus bukan angka
  assert.strictEqual(sum("1", 2), 0, "'1' + 2 should return 0");
  assert.strictEqual(sum(1, "2"), 0, "1 + '2' should return 0");
  assert.strictEqual(sum("a", "b"), 0, "'a' + 'b' should return 0");
  assert.strictEqual(sum(null, 5), 0, "null + 5 should return 0");
  assert.strictEqual(sum(5, undefined), 0, "5 + undefined should return 0");

  // Kasus nol
  assert.strictEqual(sum(0, 0), 0, "0 + 0 should be 0");
  assert.strictEqual(sum(0, 5), 5, "0 + 5 should be 5");
  assert.strictEqual(sum(5, 0), 5, "5 + 0 should be 5");
});

// normal case
test("1 + 2 should be 3 (normal case)", () => {
  assert.strictEqual(sum(1, 2), 3);
});
/*
test("5 + 7 should be 12 (normal case)", () => {
  assert.strictEqual(sum(5, 7), 12);
});
*/

// negative case
test("-1 + 5 should return 0 (negative case)", () => {
  assert.strictEqual(sum(-1, 5), 0);
});
/*
test("5 + -3 should return 0 (negative case)", () => {
  assert.strictEqual(sum(5, -3), 0);
});

test("-1 + -2 should return 0 (negative case)", () => {
  assert.strictEqual(sum(-1, -2), 0);
});
*/

// not number case
test("'1' + 2 should return 0 (not number case)", () => {
  assert.strictEqual(sum("1", 2), 0, "");
});
/*
test("1 + '2' should return 0 (not number case)", () => {
  assert.strictEqual(sum(1, "2"), 0);
});

test("'a' + 'b' should return 0 (not number case)", () => {
  assert.strictEqual(sum("a", "b"), 0);
});

test("null + 5 should return 0 (not number case)", () => {
  assert.strictEqual(sum(null, 5), 0);
});

test("5 + undefined should return 0 (not number case)", () => {
  assert.strictEqual(sum(5, undefined), 0);
});
*/

// zero case
test("0 + 0 should be 0 (zero case)", () => {
  assert.strictEqual(sum(0, 0), 0);
});
/*
test("0 + 5 should be 5 (zero case)", () => {
  assert.strictEqual(sum(0, 5), 5);
});

test("5 + 0 should be 5 (zero case)", () => {
  assert.strictEqual(sum(5, 0), 5);
});
*/
