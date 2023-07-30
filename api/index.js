import express from "express";
import cors from "cors";
import bookRoutes from "./routes/books.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import orderRoutes from "./routes/orders.js";
import multer from "multer";
const app = express();


app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.json("Hello this is the backend");
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename : function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })

//For Uploading PDF and Image of Books.
const cpUpload = upload.fields([{ name: 'file' }, { name: 'img'}]);

app.post("/api/upload", cpUpload , async (req,res)=>{
    if(req.files){
        const uploadedFile = req.files['img'][0].path;
        const uploadedImg =  req.files['file'][0].path;
        res.status(200).json({uploadedFile,uploadedImg});
    }
    
});

app.use("/api/books/",bookRoutes);
app.use("/api/auth/",authRoutes);
app.use("/api/users/",userRoutes);
app.use("/api/orders/",orderRoutes);



app.listen(8800, ()=>{
    console.log("Backend server is running!");
})