import { db } from "../connect.js";


//------------------------------------------------------------------------------------------
//Get all books
//------------------------------------------------------------------------------------------

export const getBooks = (req,res)=>{
    const q = "SELECT * FROM test.books"
    db.query(q ,(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json(data);
    })
};
//------------------------------------------------------------------------------------------
//Get Specific book
//------------------------------------------------------------------------------------------

export const getBook = (req,res)=>{
    const id = req.params.id;
    const q = "SELECT * FROM test.books WHERE id=?"
    db.query(q ,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json(data);
    })
};
//------------------------------------------------------------------------------------------
//Add new Book
//------------------------------------------------------------------------------------------

export const addBook = (req,res)=>{
    const q = "INSERT INTO books (`title`, `descBook`,`image`, `author`, `year`,`path`,`price`,`isbn`,`publisher`,`pages`,`language`,`dimensions`,`inStock`,`descAuthor`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.descBook,
        req.body.image,
        req.body.author,
        req.body.year,
        req.body.path,
        req.body.price,
        req.body.isbn,
        req.body.publisher,
        req.body.pages,
        req.body.language,
        req.body.dimensions,
        req.body.inStock,
        req.body.descAuthor,
    ];
    db.query(q,[values],(err,data)=>{
        if(err){
          return res.json(err);
        } 
        return res.status(201).json("Book has been created successfully!");
    })
};
//------------------------------------------------------------------------------------------
//Delete Book
//------------------------------------------------------------------------------------------

export const deleteBook = (req, res) => {
    const bookId = req.params.id;
    const q = " DELETE FROM books WHERE `id` = ? ";
  
    db.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json('Book has been Deleted!');
    });
  };
//------------------------------------------------------------------------------------------
//Update existing Book
//------------------------------------------------------------------------------------------

export const updateBook = (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `image`= ?, `author`= ?, `year`= ?, `path`= ?, `price`= ? WHERE `id` = ?";

    const values = [

        req.body.title,
        req.body.desc,
        req.body.image,
        req.body.author,
        req.body.year,
        req.body.path,
        req.body.price,
    ];
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json("Book has been updated!");
    });
  };