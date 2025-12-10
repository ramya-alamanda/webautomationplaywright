const {test,expect}=require('@playwright/test');
const {POManager}=require('../pageobjects/POManager');
const dataset=JSON.parse(JSON.stringify(require('../utils/addtocartTestData')));


test('Search from Amazon', async({browser})=>
{
    const context=await browser.newContext({
        //decline webpop up
        permissions:[],
    });
    //open a new page
    const page=await context.newPage();
    
    //create object for pOManager
    const pOManager=new POManager(page);
    const homePage=pOManager.getHomePage();

    await homePage.goto();
    await homePage.verifyTitle(dataset.websitename);
    await homePage.searchProduct(dataset.productname);
    await homePage.verifyResults();
    await homePage.selectBrand();
    await homePage.selectProduct();

    await pOManager.openProduct();

    // Get the ProductsPage object from POManager
    const productsPage = pOManager.getProductsPage();


    await productsPage.productTitle();
    await productsPage.clickAddToCart();

});