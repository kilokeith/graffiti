import mongoose from "mongoose";

// connect to database
mongoose.Promise = global.Promise;

if (mongoose.connection.readyState !== 1) {
  let options = {
    promiseLibrary: global.Promise
  };
  mongoose.connect(process.env.MONGODB_URI, options);

  mongoose.connection.on("error", function(err) {
    console.error("connection error:");
    console.error(err);
    process.exit();
  });

  mongoose.connection.once("open", () =>
    console.info("MongoDB connected".green)
  );
}

export default mongoose;
