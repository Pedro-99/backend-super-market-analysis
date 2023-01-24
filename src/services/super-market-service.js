const { SuperMarketRepository } = require("../database");
const { FormateData } = require("../utils");
const fs = require('fs');
const csv = require('csv-parser');


// All Business logic will be here
class SuperMarketService {

    constructor() {
        this.repository = new SuperMarketRepository();
    }


    async createSuperMarket(productInputs) {

        const productResult = await this.repository.CreateProduct(productInputs)
        return FormateData(productResult);
    }




    async getSuperMarket(productId) {

        const product = await this.repository.FindById(productId);
        return FormateData(product)
    }


    async insertCSVIntoDb(csvFile) {
        console.log('csv :', csvFile)
        const results = [];

        fs.createReadStream(csvFile)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async() => {
                console.log(results);
                // insert results into MongoDB here
                const response = await this.repository.InsertCSVIntoDatabase(results)
                return FormateData(response)
            });
   
    }

    async superMarketSalles(){

            const results = await this.repository.getAllSuperMarketSales();
   
            return  results
            
        
    }


    async getProductStats(){
        const results = await this.repository.getProductStats();
        return results
       
    }

    async getTotalSalles(){
        const results = await this.repository.getTotalSalles();
        return results
       
    }

    async getAvgRatingByGender(){
        const results = await this.repository.getAvgRating();
        return results
       
    }


}

module.exports = SuperMarketService;
