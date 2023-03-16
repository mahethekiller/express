import initModels from "../models/init-models.js";
import sequelizeDb from "../dbConfig/index.js";

export class WeightLoss {
  constructor() {
    // this.test = this.test.bind(this);
  }

  models = initModels(sequelizeDb);

  getAll(req, res, next) {
    this.models.weight_loss
      .findAll()
      .then((data) => {
        // console.log("All users:", JSON.stringify(data));
        res.send(data);
      })
      .catch((error) => {
        console.error("Failed to retrieve data : ", error);
        res.json(error);
      });
  }

  getById(req, res, next) {
    this.models.weight_loss
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((data) => {
        data ? res.send(data) : res.json("not found");
      })
      .catch((error) => {
        console.error("Failed to retrieve data : ", error);
      });
  }
}
