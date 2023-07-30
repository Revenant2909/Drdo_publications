import React, { useEffect } from 'react'
import "./orderList.css";
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { deleteOrder,  getOrders  } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


export default function ProductList() {
    const dispatch = useDispatch();
    const orders = useSelector(state=>state.order.orders);

    useEffect(()=>{
        getOrders(dispatch);
        
    },[dispatch]);
  console.log(orders);

    const handleDelete = (id) =>{
        deleteOrder(id,dispatch);
    };
    const columns = [
        { field: 'id', headerName: 'Order ID', width: 100 },
        
        { field: 'userId', headerName: 'User Id', width: 100 },
        { field: 'fullName', headerName: 'Customer Name', width: 200 },
        { field: 'phone', headerName: 'Contact No.', width: 100 },
        { field: 'addressln1', headerName:  'Address Line 1', width: 150 },
        { field: 'addressln2', headerName: 'Address Line 2', width: 150 },
        { field: 'pincode', headerName: 'Pincode', width: 80 },
        { field: 'city', headerName: 'City', width: 120 },
        { field: 'state', headerName: 'State', width: 120 },
        { field: 'productId', headerName: 'productId', width: 120 },
        { field: 'price', headerName:  'Price', width: 80 },
        { field: 'paymentStatus', headerName:  'Payment Status', width: 150 },
        {
            field:"action",
            headerName:"Action",width:150,
            renderCell: (params)=> {
                return(
                    <DeleteOutline className="productListDelete"
                     onClick={()=>handleDelete(
                        params.row.id
                    )}/>
                );
            }
        },
      ];
  return (
    <div className='productList'>
        <DataGrid stickyHeader
        rows={orders} 
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
