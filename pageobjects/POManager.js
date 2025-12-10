const {HomePage}=require('./HomePage');
const {ProductsPage}=require('./ProductsPage');

class POManager{

    constructor(page){
        this.page=page;
        this.homePage=new HomePage(this.page);
        this.productsPage=null;
    }

    getHomePage(){
        return this.homePage;
    }

    getProductsPage(){
        return this.productsPage;
    }

    async openProduct(){
        const[newPage]=await Promise.all([
            this.page.context().waitForEvent('page'),
            this.homePage.product.click()
            
        ]);
        this.productsPage=new ProductsPage(newPage);
        return this.productsPage;
    }


}

module.exports={POManager};