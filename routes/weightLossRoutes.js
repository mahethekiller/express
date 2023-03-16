import { WeightLoss } from "../controllers/weightLossController.js";

let wl = new WeightLoss();
const weightLossRoutes = (app) => {
  app
    .route("/weightLoss/getAll")
    .get((req, res, next) => {
      wl.getAll(req, res, next);
    })
    .post((req, res) => {
      res.send("Post REQ");
    });

  app.route("/weightLoss/getById/:id").get((req, res, next) => {
    wl.getById(req, res, next);
  });

  app
    .route("/contact/:contactId")
    .put((req, res) => {
      res.send("PUT REQ");
    })
    .delete((req, res) => {
      res.send("DELETE REQ");
    });
};

export default weightLossRoutes;
