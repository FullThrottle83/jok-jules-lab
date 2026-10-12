import test from "node:test";
import assert from "node:assert/strict";
import { inventoryTotal } from "../src/inventory-total.mjs";
import { formatName } from "../src/format-name.mjs";
import { rangeInclusive } from "../src/range-inclusive.mjs";
import { sumBy } from "../src/sum-by.mjs";
import { parseCsvLine } from "../src/csv-line.mjs";
import { orderTotal } from "../src/order-total.mjs";

 test("inventoryTotal multiplies quantity by unit price", () => {
  assert.equal(inventoryTotal([{ quantity: 2, priceCents: 125 }, { quantity: 1, priceCents: 50 }]), 300);
});

test("formatName omits empty parts", () => {
  assert.equal(formatName("Ada", "Lovelace"), "Ada Lovelace");
  assert.equal(formatName("Ada", ""), "Ada");
});

test("rangeInclusive includes the endpoint", () => {
  assert.deepEqual(rangeInclusive(2, 5), [2, 3, 4, 5]);
});

test("sumBy ignores missing or non-numeric values", () => {
  assert.equal(sumBy([{ n: 2 }, {}, { n: "3" }, { n: "x" }], "n"), 5);
});

test("parseCsvLine handles quoted commas and escaped quotes", () => {
  assert.deepEqual(parseCsvLine('one,"two,three","say ""hi"""'), ["one", "two,three", 'say "hi"']);
});

test("orderTotal applies quantity and tier discount", () => {
  assert.equal(orderTotal([{ quantity: 2, unitCents: 6_000 }]), 10_800);
  assert.equal(orderTotal([{ quantity: 2, unitCents: 10_000 }]), 17_000);
});
