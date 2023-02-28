const express = require("express");
const dbConnnect = require("./db");

const app = express();
const port = 5000;
const host = "http://localhost";
dbConnnect();

// const storage = multer.diskStorage({
//   destination:(req,file,cd)=>{
//     cd(null,"uploads")
//   },
//   filename:(req,file,cd)=>{
//     cd(null,file.originalname)
//   },
// })

// const upload = multer({storage:storage})
// module.exports = upload
// fixing "413 Request Entity Too Large" errors
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-headers",
    "Origin, X-Requested-With,Content-Type,auth-token,Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.use("/auth", require("./router/auth"));
app.use("/blog", require("./router/blog"));
app.use("/user", require("./router/userData"));
app.listen(port, () => {
  console.log(`server Start at port ${host}:${port}`);
});
