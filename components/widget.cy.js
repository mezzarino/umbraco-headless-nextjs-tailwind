import React from "react";
import Widget from "./widget";

describe("<Widget />", () => {
  it("Widget renders correctly", () => {
    cy.mount(<Widget />);
  });

  it("Widget has an h2 present", () => {
    cy.mount(<Widget />);
    cy.get("h2").should("be.visible");

    cy.percySnapshot("Widget component");
  });
});
