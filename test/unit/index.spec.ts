import { describe, expect, it, vi } from "vitest";
import { Application } from "../../src/index.js";
import type { ISettings } from "../../src/interfaces/ISettings.js";

class MockSettings implements ISettings {
  public configure(): void {
    return;
  }
}

const mockSettings = new MockSettings();

describe(Application, () => {
  it("should have a property app", () => {
    const application = new Application(new MockSettings());

    expect(application.app).toHaveProperty("listen");
    expect(application.app).toHaveProperty("get");
    expect(application.app).toHaveProperty("post");
    expect(application.app).toHaveProperty("use");
  });

  it("should call Settings object", () => {
    const spy = vi.spyOn(mockSettings, "configure");
    new Application(mockSettings);

    expect(spy).toHaveBeenCalledOnce();
  });
});
