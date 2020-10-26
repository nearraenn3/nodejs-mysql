module.exports = app => {
  const users = require('../controllers/controller');

  // Simple route like Homepage
  app.get('/', (req, res) => {
    res.send('hello');
  })

  // Create a new Customer
  app.post("/users", users.create);

  // Retrieve all Customers
  app.get("/users", users.findAll);
};