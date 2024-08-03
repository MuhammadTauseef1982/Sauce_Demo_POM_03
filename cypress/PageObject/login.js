
import { baseClass } from "./baseClass";
const bs = new baseClass();
const selectors = "../fixtures/sauceData.json"

export class login 
{
    Valid_User(ValidUser){
        cy.fixture(selectors).then((val)=>{
            bs.url(val.baseURL.mainURL)
            cy.url().should('eq','https://www.saucedemo.com/v1/')
            cy.title().should('contain','Swag')
            bs.assertValue(val.Locators.multipeLoginLoc,val.Data.multipeLogindata)            
            bs.write(val.Locators.usernameLoc,val.Data.usernamedata)
            bs.write(val.Locators.passwordLoc,val.Data.passworddata)
            bs.click(val.Locators.loginLoc)

        })
    }
}
