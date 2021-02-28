describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then( $el => {
        expect($el).to.have.value(75);
      }
    );
  });

  it('Volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then( $el => {
        expect($el).to.have.value(33);
      }
    );
  });

  it('Volume of audio element changes when slider does', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then( $el => {
        expect($el).to.have.prop('volume', 0.33);
      }
    );
  });

  it('Image source changes when radio party horn is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then( $el => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg");
      }
    );
  });

  it('Sound source changes when radio party horn is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then( $el => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3");
      }
    );
  });

  it('Volume image changes when increasing volume 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then( $el => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg");
      }
    );
  });

  it('Volume image changes when increasing volume 1', () => {
    cy.get('#volume-number').clear().type('10');
    cy.get('#volume-image').then( $el => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg");
      }
    );
  });

  it('Volume image changes when increasing volume 2', () => {
    cy.get('#volume-number').clear().type('40');
    cy.get('#volume-image').then( $el => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg");
      }
    );
  });

  it('Volume image changes when increasing volume 3', () => {
    cy.get('#volume-number').clear().type('80');
    cy.get('#volume-image').then( $el => {
        expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg");
      }
    );
  });

  it('Honk button disabled when textbox empty', () => {
    cy.get('#volume-number').clear().type(' ');
    cy.get('#honk-btn').then( $el => {
      expect($el).to.have.attr('disabled', 'disabled');
      }
    );
  });
  it('Honk button disabled when textbox invalid', () => {
    cy.get('#volume-number').clear().type('df');
    cy.get('#honk-btn').then( $el => {
      expect($el).to.have.attr('disabled', 'disabled');
      }
    );
  });
});
