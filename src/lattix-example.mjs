import assert from 'node:assert/strict';
import { ExplorerApiClient } from '@x12i/lattix/client';
const calls = [];
const client = new ExplorerApiClient({ baseUrl: 'https://explorer.example.invalid', fetch: async url => {
  assert(new URL(url).pathname.endsWith('/health'));
  calls.push(String(url));
  return Response.json({ ok: true, service: 'fixture-explorer' });
} });
const health = await client.health();
assert.equal(health.ok, true);
assert.equal(calls.length, 1);
console.log({ health, calls });
// This exercises the public client subpath. It does not mount the browser graph component.
