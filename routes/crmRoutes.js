const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        // middleware
        console.log(`req from ${req.originalUrl}`);
        next();
      },
      (req, res, next) => {
        res.send("GET REQ");
      }
    )
    .post((req, res) => {
      res.send("Post REQ");
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

export default routes;
