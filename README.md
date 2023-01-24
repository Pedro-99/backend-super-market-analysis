# backend-super-market-analysis


this project was deployed in heruko :
here is the link :
https://super-market-analysis-node-app.herokuapp.com/all-sales

these are the available endpoints :

method : POST 
description : import CSV file and insert it to database.
about this endpoint : you could use postman and in the body request, switch it to form-data, change the type of the "cvs" property to file type in order to select a file and type the following as key value pair "csv":"file.csv" .
https://super-market-analysis-node-app.herokuapp.com/superMarket/insertFile

method : GET
description : get all the data inserted from the CSV file
https://super-market-analysis-node-app.herokuapp.com/all-sales

method : GET
description : chart 1 / get gross volume based on product line
https://super-market-analysis-node-app.herokuapp.com/stats

method : GET
description : chart 2 / get sales based on cusomer type and gender
https://super-market-analysis-node-app.herokuapp.com/total-salles

method : GET
description : chart 3 / get average rating based on each gender
https://super-market-analysis-node-app.herokuapp.com/avg
