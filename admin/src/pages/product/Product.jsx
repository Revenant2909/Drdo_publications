import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Publish } from "@mui/icons-material";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  // const [pStats, setPStats] = useState([]);
  // const product = useSelector((state)=>state.product.products[0]);
  const product = useSelector((state) =>
    state.product.products.find((item) => item.id === productId)
    );
  
    console.log(product);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get("orders/income?pid=" + productId);
  //       const list = res.data.sort((a,b)=>{
  //           return a._id - b._id
  //       })
  //       list.map((item) =>
  //         setPStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], Sales: item.total },
  //         ])
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getStats();
  // }, [productId, MONTHS]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Update Book</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <div className="productFormItem">
            <label>Title</label>
            <input type="text" placeholder={product.title} />
            </div>
            <div className="productFormItem">
            <label>About the Book</label>
            <input type="text" placeholder={product.descBook} />
            </div>
            <div className="productFormItem">
            <label>Price</label>
            <input type="text" placeholder={product.price} />
            </div>
            <div className="productFormItem">
            <label>Author Name</label>
            <input type="text" placeholder={product.author} />
            </div>
            <div className="productFormItem">
            <label>Year</label>
            <input type="text" placeholder={product.year} />
            </div>
            <div className="productFormItem">
            <label>About the Author</label>
            <input type="text" placeholder={product.descAuthor} />
            </div>
            
            <div className="productFormItem">
            <label>ISBN</label>
            <input type="text" placeholder={product.isbn} />
            </div>
            <div className="productFormItem">
            <label>Publisher</label>
            <input type="text" placeholder={product.publisher} />
            </div>
            <div className="productFormItem">
            <label>Pages</label>
            <input type="text" placeholder={product.pages} />
            </div>
            <div className="productFormItem">
            <label>Language</label>
            <input type="text" placeholder={product.language} />
            </div>
            <div className="productFormItem">
            <label>Dimensions</label>
            <input type="text" placeholder={product.dimensions} />
            </div>
            <div className="productFormFile">
            <label>Book Pdf</label>
            <input type="file" />
            </div>
            <div className="productFormFile">
            <label>Book Image</label>
            <input type="file" />
            </div>
            <div className="productFormItem">
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}