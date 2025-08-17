import { createDOM } from "@builder.io/qwik/testing";
import { expect, describe, beforeEach, it, beforeAll, vi, afterAll } from "vitest";
import AboutMe from "./AboutMe";
import { ABOUT_ME } from "~/config/constants";


describe("[AboutMe Component]", () => {
  let screen: Awaited<ReturnType<typeof createDOM>>["screen"];
  let userEvent: Awaited<ReturnType<typeof createDOM>>["userEvent"];

  let originalGtag: typeof globalThis.gtag;
  
  beforeAll(() => {
    originalGtag = globalThis.gtag;
    // Mock gtag function to prevent ReferenceError
    globalThis.gtag = vi.fn();
  });

  afterAll(() => {
    globalThis.gtag = originalGtag;
  });

  beforeEach(async () => {
    const { render, screen: _screen, userEvent: _userEvent } = await createDOM();
    await render(<AboutMe />);

    screen = _screen;
    userEvent = _userEvent
  });

  it("should render the short description by default", () => {
    const description = getDescriptionText();
    const expected = ABOUT_ME.short;

    expect(description).toContain(expected);
  });

  it("should show the medium description when clicking 'Go Deeper'", async () => {
    await showMore();

    const description = getDescriptionText();
    const expected = ABOUT_ME.medium;

    expect(description).toContain(expected);
  });

  it("should show the long description when clicking 'Time to Breathe' twice", async () => {
    await showMore();
    await showMore();

    const description = getDescriptionText();
    const expected = ABOUT_ME.long;

    expect(description).toContain(expected);
  });

  describe("when showing the long description", () => {
    beforeEach(async () => {
      await showMore();
      await showMore();
    });

    it("should show the medium description when clicking 'Time to Breathe'", async () => {
      await showLess();

      const description = getDescriptionText();
      const expected = ABOUT_ME.medium;

      expect(description).toContain(expected);
    });

    it("should show the short description when clicking 'Time to Breathe' twice", async () => {
      await showLess();
      await showLess();

      const description = getDescriptionText();
      const expected = ABOUT_ME.short;

      expect(description).toContain(expected);
    });
  });

  function getDescriptionText() {
    return screen.querySelector("[aria-label='description']")!.textContent!;
  }

  async function showMore() {
    const button = screen.querySelector("button[aria-label='Go Deeper']") as HTMLButtonElement;
    await userEvent(button, "click");
  }

  async function showLess() {
    const button = screen.querySelector("button[aria-label='Time to Breathe']") as HTMLButtonElement;
    await userEvent(button, "click");
  }
});