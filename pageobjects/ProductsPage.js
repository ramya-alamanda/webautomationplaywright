const{expect}=require('@playwright/test');

class ProductsPage{

     constructor(page){
        this.page=page;
        this.productTitleName=page.locator("span#productTitle");
        this.addToCart=page.locator('[title="Add to Shopping Cart"]');
        this.addedToCartMessage=page.locator("//h1[normalize-space()='Added to cart']");
          
    }

    async productTitle(){   

        await this.productTitleName.waitFor({ state: 'visible' });
        await expect(this.productTitleName).toBeVisible();
        const productTitleText=await this.productTitleName.textContent();
        console.log(productTitleText);
        
    }

    async clickAddToCart(){
    await this.addToCart.scrollIntoViewIfNeeded();
    await this.addToCart.click();

    //valdidate added to cart message
    await expect(this.addedToCartMessage).toBeVisible();
    const addedToCartMessageText=await this.addedToCartMessage.innerText();
    console.log(addedToCartMessageText);
    }
    
}

module.exports={ProductsPage};