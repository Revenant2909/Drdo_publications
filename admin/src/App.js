import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import OrderList from "./pages/orderList/OrderList";


function App() {
  // const admin =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  // .currentUser.isAdmin;
  return (
    <Router>
      <Switch>

      {/* {!admin && <Route path="/login">  <Login/>  </Route>}

      { admin && */}
        <>
       <Topbar/>
       <div className="container">
        <Sidebar/>
        <Route exact path="/">  <Home/>   </Route>
        <Route path="/books">  <ProductList/>   </Route>
         <Route path="/users">  <UserList/>   </Route>
        <Route path="/orders">  <OrderList/>   </Route>
        <Route path="/book/:bookId">  <Product/>   </Route>
        <Route path="/user/:userId">  <User/>   </Route>
        <Route path="/newbook">  <NewProduct/>   </Route>
      </div>
      </>
      </Switch>
      </Router>
  );
}

export default App;
