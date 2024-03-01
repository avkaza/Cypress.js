describe('Длинный автотест', function () {
    
    it('Оформить заказ на testqastudio.me', function () {
       cy.visit('https://testqastudio.me/');
       cy.get('.post-11344 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Олег');
       cy.get('#billing_last_name').type('Олежоа');
       cy.get('#billing_address_1').type('ул Олега дом 1');
       cy.get('#billing_city').type('Moscow');
       cy.get('#billing_state').type('Moscow');
       cy.get('#billing_postcode').type('123456');
       cy.get('#billing_phone').type('89123456987');
       cy.get('#billing_email').type('oleg@ya.ru');
       cy.get('#place_order').click();
       cy.contains('Ваш заказ принят. Благодарим вас.');
    })  
})