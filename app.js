import app from "./src/config/server.js";
import { config } from "dotenv";
config();

// Server
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server Is Up and Running on ${process.env.PORT || 8080}`);
});

export default app;
