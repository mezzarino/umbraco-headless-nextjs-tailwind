describe('NextJS demo site', () => {
  it('loads successfully', () => {
    cy.visit('https://umbraco-headless-nextjs-tailwind.vercel.app/');

    cy.percySnapshot();
  })
})