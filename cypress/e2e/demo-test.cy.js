describe("NextJS demo site", () => {
  it("homepage loads successfully", () => {
    cy.visit("https://umbraco-headless-nextjs-tailwind.vercel.app/");

    cy.percySnapshot("Homepage");
  });

  it("example brand page loads successfully", () => {
    cy.visit("https://umbraco-headless-nextjs-tailwind.vercel.app/");

    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/umbraco-nextjs-tailwind/tbrand"]').click();
    /* ==== End Cypress Studio ==== */
    cy.percySnapshot("Brand page");
  });
});
