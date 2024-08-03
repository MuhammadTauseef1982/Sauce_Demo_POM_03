/// <reference types="cypress"/>
import { baseClass } from "../PageObject/baseClass";
import { login } from "../PageObject/login";
import { shopping } from "../PageObject/shopping";
import { customerInfo } from "../PageObject/customerInfo";


describe('Sauce Demo POM',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    const loginObj = new login()
    const shopObj = new shopping()
    const customerObj = new customerInfo()

    it('valid credential',()=>{
        loginObj.Valid_User()
        shopObj.shoppingDetails()
        customerObj.customerDetails()

        
    })
})
