import { baseClass } from "./baseClass";
const bs = new baseClass();
const selectors = "../fixtures/sauceData.json"

export class shopping {
    shoppingDetails(Shop) {
        cy.fixture(selectors).then((val) => {
            cy.url().should('include', 'inventory.html')
            cy.wait(2000)
            bs.assertValue(val.Locators.inventPageHeaderLoc, val.Data.inventPageHeaderdata)
            bs.select(val.Locators.sortingCartLoc, val.Data.sortingCartdata)
            //this is for single item to select
            //bs.click(val.Locators.addCartLoc)
            //bs.click(val.Locators.CartLoc)

            // this is to loop all items
            bs.looping(val.Locators.allitem, val.Locators.allAddtoCart)
            bs.click(val.Locators.shopCartLoc)
            //cy.pause()
            bs.assertValue(val.Locators.yourCartLoc, val.Data.yourCartdata)
            cy.url().should('include','v1/cart.html')
            bs.click(val.Locators.CheckoutLoc)
           // bs.assertValue(val.Locators.yourCartLoc, val.Data.yourCartdata)
            



        })
    }
}