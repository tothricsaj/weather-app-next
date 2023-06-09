import Icon, { IconTypes } from "../../Icon/Icon";

describe('<Icon />', () => {
  it('should be render Icon as search icon', () => {
    cy.mount(<Icon type={IconTypes.SEARCH} />);

    cy.get('img').should('have.attr', 'src', '/search.png');
  });

  it('should be rendered as weather', () => {
    cy.mount(<Icon type={IconTypes.WEATHER} iconCode="02d" />);   

    cy.get('img').should('have.attr', 'src', 'https://openweathermap.org/img/wn/02d@2x.png');
  });

  it('should be set dimension', () => {
    cy.mount(<Icon type={IconTypes.WEATHER} iconCode="02d" dimension={32} />);   

    cy.get('img')
      .should('have.attr', 'src', 'https://openweathermap.org/img/wn/02d@2x.png')
      .and('have.attr', 'width', '32')
      .and('have.attr', 'height', '32');
  });
});