import * as matchers from "@testing-library/jest-dom/matchers";
import { afterAll, beforeAll, expect } from "vitest";
import { server } from "./mockServer";

expect.extend(matchers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
