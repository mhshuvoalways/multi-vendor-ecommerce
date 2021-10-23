const mongoose = require("mongoose");
const chalk = require("chalk");
const port = process.env.PORT || 5000;

module.exports = (app) => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      app.listen(port, () => {
        if (
          process.env.firstName &&
          process.env.lastName &&
          process.env.adminPhone &&
          process.env.adminEmail &&
          process.env.adminPassword &&
          process.env.storeName
        ) {
          console.log(chalk.green(`App listening at : ${port}`));
        } else {
          console.log(
            chalk.red(
              `If you want to run this app you must provide all the env of admin`
            )
          );
        }
      });
    })
    .catch(() => {
      console.log("Server error occurred");
    });
};
