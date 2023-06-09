import CityTile from "../../City/CityTile/Citytile";

describe('<Citytile />', () => {
  beforeEach(() => {
    cy.mount(
      <CityTile
        cityName="Tokyo"
        iconCode="01d"
        celsius="34"
      />
    );
  });

  it('should render the CityTile component', () => {
    cy.get('[data-cy="city-tile"]').should('have.css', 'width', '250px');
    cy.get('h2').should('contain.text', 'Tokyo');
    cy.get('img').should('be.visible');
  });
});