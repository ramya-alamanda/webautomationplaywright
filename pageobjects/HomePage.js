const { expect } = require('@playwright/test');
const {ProductsPage}= require('./ProductsPage');

class HomePage{
    constructor(page,expect){

        this.page=page;
        this.expect=expect;
        this.searchbar=page.locator('#twotabsearchtextbox');
        this.searchbutton=page.locator('#nav-search-submit-button');
        this.results=page.locator("//h2[normalize-space()='Results']");     
        this.brandName=page.getByText('Sony', { exact: true });
        this.brandCheckbox=page.locator('xpath=//span[text()="Sony"]/ancestor::a//input[@type="checkbox"]');
        this.product=page.locator("//span[contains(text(),'Sony')]").first();    
    }

    async goto(){
        await this.page.goto("https://www.amazon.in/");  
    }

    async verifyTitle(websitename){

           //fetch,assert and print title
            const title=await this.page.title();
            console.log("Title:",title);
            await expect(this.page).toHaveTitle(/amazon/i);
    }

    async searchProduct(productname){
        await this.searchbar.fill(productname);
        await this.searchbutton.click();

    }

    async verifyResults(){
        await expect(this.results).toBeVisible();
        console.log("Results visible");
    }

    async selectBrand(){
        await this.brandName.click();
        await expect(this.brandCheckbox).toBeChecked();
        console.log("Checked brand");
        
    }

    async selectProduct(){
        //scroll to the first product, assert and click
    
        await this.product.scrollIntoViewIfNeeded();
        await expect(this.product).toBeVisible();
        console.log("Product visible");
    }


}

module.exports={HomePage};