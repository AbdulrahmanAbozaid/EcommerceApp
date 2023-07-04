import express from "express";
import { config } from "dotenv";
config();
const app = express();

// Server
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server Is Up and Running on ${process.env.PORT || 8080}`);
});

export default app;
