const { SuperMarketModel } = require("../models");
const mongoose = require("mongoose");
// const { databaseConnection } = require("../index")

const collection = mongoose.connection.collection("super-markets")
// const collection = mongoose.connection.db('super-market').collection("super-markets")


// console.log("dddddd :", collection.conn.collection('super-market'))


//Dealing with data base operations
class SuperMarketRepository {


    async CreateSuperMarket({ name, desc, options, price, banner }) {

        const product = new SuperMarketModel({
            name, desc, options, price, banner
        })

        //    return await SuperMarketModel.findByIdAndDelete('607286419f4a1007c1fa7f40');

        const productResult = await product.save();
        return productResult;
    }



    async FindSuperMarketById(id) {

        return await SuperMarketModel.findById(id);

    }


    async InsertCSVIntoDatabase(data) {
        return await SuperMarketModel.insertMany(data)
    }

    async getAllSuperMarketSales() {
        return await SuperMarketModel.find()
    }

    async getProductStats() {

        return await  SuperMarketModel.aggregate().group(
             { _id:  "$Product line" , count: { $sum: "$Quantity" } }  
        )
    }

    // total salles based on customer type and gender 
    async getTotalSalles() {

        return await  SuperMarketModel.aggregate().group(
             { 
                _id: { "Customer type": "$Customer type", "Gender": "$Gender" } , 
                total: { $sum: "$cogs" }
             }  
        )
    }

    // get average rating based on gender type 
    async getAvgRating(){
  
        return await SuperMarketModel.aggregate().group(
            {
                _id:  "$Gender", 
                avg : { $avg : "$Rating"}
            }
        )
    }


  
}

module.exports = SuperMarketRepository;
