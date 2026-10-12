import test from "node:test";
import assert from "node:assert/strict";
import { clamp } from "../src/clamp.mjs";
import { slugify } from "../src/slugify.mjs";
import { chunk } from "../src/chunk.mjs";
import { dedupe } from "../src/dedupe.mjs";
import { retryDelay } from "../src/retry-delay.mjs";
import { parsePort } from "../src/parse-port.mjs";

 test("clamp respects both bounds", () => {
  assert.equal(clamp(-3, 0, 10), 0);
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(17, 0, 10), 10);
});

test("slugify collapses punctuation and whitespace", () => {
  assert.equal(slugify("  Hello,   World!  "), "hello-world");
  assert.equal(slugify("Smörgås"), "smorgas");
});

test("chunk retains a partial tail", () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test("dedupe preserves first-seen order", () => {
  assert.deepEqual(dedupe([3, 1, 3, 2, 1]), [3, 1, 2]);
});

test("retryDelay is exponential but capped", () => {
  assert.equal(retryDelay(0, { baseMs: 100, capMs: 500 }), 100);
  assert.equal(retryDelay(10, { baseMs: 100, capMs: 500 }), 500);
});

test("parsePort enforces TCP port range", () => {
  assert.equal(parsePort("443"), 443);
  assert.throws(() => parsePort("0"), RangeError);
  assert.throws(() => parsePort("65536"), RangeError);
});
