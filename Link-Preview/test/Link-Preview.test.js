import { html, fixture, expect } from '@open-wc/testing';
import "../Link-Preview.js";

describe("Link-Preview test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <Link-Preview
        title="title"
      ></Link-Preview>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
