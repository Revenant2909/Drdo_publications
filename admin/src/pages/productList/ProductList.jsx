import React, { useEffect } from 'react'
import "./productList.css";
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.product.products);

    useEffect(()=>{
        getProducts(dispatch);
        
    },[dispatch]);
  console.log(products);

    const handleDelete = (id) =>{
        deleteProduct(id,dispatch);
    };
    const columns = [
        { field: 'id', headerName: 'Product ID', width: 100 },
        
        { field: 'product', headerName: 'Book Name', width: 200,
        renderCell:(params)=>{
            return (
                <div className="productListItem">
                    <img src={params.row.image} alt="" className='productListImg' />
                    {params.row.title}
                </div>
            )
        } },
        { field: 'isbn', headerName: 'ISBN', width: 150 },
        { field: 'publisher', headerName: 'Publisher', width: 100 },
        { field: 'price', headerName:  'Price', width: 80 },
        { field: 'year', headerName:  'Year', width: 60 },
        { field: 'author', headerName: 'Author', width: 120 },
        { field: 'desc', headerName: 'Description', width: 80 },
        { field: 'pages', headerName: 'Pages', width: 80 },
        { field: 'language', headerName: 'Language', width: 80 },
        { field: 'dimension', headerName: 'Dimensions', width: 120 },
        { field: 'path', headerName:  'Path', width: 120 },
        { field: 'inStock', headerName: 'In Stock', width: 80 },
        {
            field:"action",
            headerName:"Action",width:150,
            renderCell: (params)=> {
                return(<>
                <Link to={{ pathname:"/book/"+params.row.id, product: params.row}}>
                    <button className="productListEdit">Edit</button>
                </Link>
                    <DeleteOutline className="productListDelete"
                     onClick={()=>handleDelete(
                        params.row.id
                    )}/>
                </>
                );
            }
        },
      ];
  return (
    <div className='productList'>
        <DataGrid stickyHeader
        rows={products} 
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row)=> row.id}
      />
    </div>
  )
}
