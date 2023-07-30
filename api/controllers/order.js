import { db } from "../connect.js";


//------------------------------------------------------------------------------------------
//Get all orders
//------------------------------------------------------------------------------------------

export const getOrders = (req,res)=>{
    const q = "SELECT * FROM test.orders"
    db.query(q ,(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json(data);
    })
};
//------------------------------------------------------------------------------------------
//Get Specific order
//------------------------------------------------------------------------------------------

export const getOrder = (req,res)=>{
    const id = req.params.id;
    const q = "SELECT * FROM test.orders WHERE id=?"
    db.query(q ,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json(data);
    })
};
//------------------------------------------------------------------------------------------
//Create new order
//------------------------------------------------------------------------------------------

export const createOrder = (req,res)=>{
    const q = "INSERT INTO orders (`userId`, `fullName`,`phone`, `addressln1`, `addressln2`,`pincode`,`city`,`state`,`productId`,`price`,`paymentStatus`) VALUES (?)"
    const values = [
        req.body.userId,
        req.body.fullName,
        req.body.phone,
        req.body.addressln1,
        req.body.addressln2,
        req.body.pincode,
        req.body.city,
        req.body.state,
        req.body.productId,
        req.body.price,
        req.body.paymentStatus,
    ];
    db.query(q,[values],(err,data)=>{
        if(err){
          return res.json(err);
        } 
        return res.status(201).json("Order placed successfully!");
    })
};
//------------------------------------------------------------------------------------------
//Delete Order
//------------------------------------------------------------------------------------------

export const deleteOrder = (req, res) => {
    const bookId = req.params.id;
    const q = " DELETE FROM orders WHERE `id` = ? ";
  
    db.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json('Order has been Deleted!');
    });
  };
