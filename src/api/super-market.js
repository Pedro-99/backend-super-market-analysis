const SuperMarketService = require("../services/super-market-service");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


module.exports = (app) => {
  const service = new SuperMarketService();

  app.post("/superMarket/create", async (req, res, next) => {
    const { name, desc, banner, price, options } =
      req.body;

    // validation
    const { data } = await service.createSuperMarket({
      name,
      desc,
      price,
      options,
      banner,
    });
    return res.status(201).json(data);
  });

  app.post('/superMarket/insertFile', upload.single('csv'), async (req, res, next) => {
    console.log('file :', req.file);
    const csv = req.file.path;
    console.log('csv :', csv);

    const data = await service.insertCSVIntoDb(csv);

    console.log('data :', data)

    return res.status(201).json(data);
  })



  app.get("/superMarket/:id", async (req, res, next) => {
    const superMarketId = req.params.id;

    try {
      const { data } = await service.getSuperMarket(superMarketId);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ error });
    }
  });

  app.get("/all-sales", async (req, res, next) => {
    try {
      const  data = await service.superMarketSalles();
      
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ error });
    }

  })


  app.get("/stats", async (req, res, next) => {
    try {
      const  data  = await service.getProductStats();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ error });
    }

  })

  app.get("/total-salles", async (req, res, next) => {
    try {
      const  data  = await service.getTotalSalles();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ error });
    }

  })
  app.get("/avg", async (req, res, next) => {
    try {
      const  data  = await service.getAvgRatingByGender();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ error });
    }

  })



};
