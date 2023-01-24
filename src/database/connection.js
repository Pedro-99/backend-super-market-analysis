const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    })
    .then((result) => {
   
      console.log('super market database connected successfully');
  })
  .catch((err) => {
      console.log('Error :', err)
  })
  } catch (error) {
    console.log("Error ============");
    console.log(error);
  }
};
