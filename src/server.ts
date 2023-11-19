// getting-started.js
import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(
        `Example app listening on port that not working wring now ${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
main();
