import { describe, it, expect } from "vitest";
import { waLink } from "./whatsapp";

describe("waLink", () => {
  it("builds a bare link with no message", () => {
    expect(waLink()).toMatch(/^https:\/\/wa\.me\/\d+$/);
  });
  it("appends a url-encoded message", () => {
    const url = waLink("Hola, quiero una cita");
    expect(url).toContain("?text=");
    expect(url).toContain("Hola%2C%20quiero%20una%20cita");
  });
});
