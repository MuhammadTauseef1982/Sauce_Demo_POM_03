/// <reference types="cypress"/>
import { baseClass } from "./baseClass"
const bs = new baseClass();
const selectors = "../fixtures/sauceData.json"

export class customerInfo 

{
    customerDetails(customer){
        cy.fixture(selectors).then((val)=>{
            bs.assertValue(val.Locators.custInfoPageLoc, val.Data.custInfoPagedata)
            cy.url().should('include','checkout-step-one.html')
            bs.write(val.Locators.firstnameLoc,val.Data.firstnamedata)
            bs.write(val.Locators.lastnameLoc,val.Data.lastnamedata)
            bs.write(val.Locators.postalcodeLoc,val.Data.postalcodedata)
            bs.click(val.Locators.confirmationLoc)
            bs.assertValue(val.Locators.custInfoPageLoc, val.Data.checkoutCompdata)
            bs.click(val.Locators.completeShoppingLoc)           
            bs.assertValue(val.Locators.EndshoppingLoc,val.Data.Endshoppingdata)           

   
   
   
        })
    }

}