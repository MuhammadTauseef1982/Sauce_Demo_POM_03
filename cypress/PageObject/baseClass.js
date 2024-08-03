export class baseClass {
    write(Loc, input) {
        try {
            cy.get(Loc).type(input)
        }
        catch (error) {
            (error, "Locator or Data is not found")
        }
    }
    click(Loc) {
        try {

            cy.get(Loc).click()
        } catch (error) {
            (error, "Locator is not defined...")
        }
    }
    select(Loc, input) {
        try {
            cy.get(Loc).select(input)
        }
        catch (error) {
            (error, "Locator or Data is not found")
        }
    }
    assertValue(Loc, expectedValue) {
        try {
            cy.get(Loc).should('have.text', expectedValue)
        } 
        catch (error) {
            (error, 'Assertion failed: Expected ${Loc} to have value ${expectedValue}')
        }
    }
    url(Loc) {
        try {

            cy.visit(Loc)
        } 
        catch (error) {
            (error, "Locator is not defined...")
        }
    }

    looping(allitem, allAddtoCart) {
        try {
            cy.get(allitem).each(($el) => {
                cy.wrap($el).find(allAddtoCart).click()
            })
        }
        catch (error) {
            (error, "Locators are not found")
        }
    }
}