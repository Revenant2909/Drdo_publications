import React, { useState } from 'react'
import "./userList.css";
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getUsers } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


export default function UserList() {

    const dispatch = useDispatch();
    const [userData, setUserData] = useState([]);
    const users = useSelector(state=>state.user.users);
    useEffect(()=>{
      getUsers(dispatch);
      setUserData(users);
    },[dispatch]);
    
    
    const handleDelete = (userId) =>{
        
        setUserData(userData.filter(item=>item.userId !==userId));
        
    };
    
    
    const columns = [
        { field: 'userId', headerName: 'UserID', width: 220 },
        { field: 'username', headerName: 'Username', width: 150,renderCell:(params)=>{
            return (
                <div className="userListUser">
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 180 },
        {
          field: 'isAdmin',
          headerName: 'is Admin',
          width: 70,
        },
        {
            field:"action",
            headerName:"Action",width:150,
            renderCell: (params)=> {
                return(<>
                <Link to={"/user/"+params.row.userId}>
                    <button className="userListEdit">Edit</button>
                </Link>
                    <DeleteOutline className="userListDelete"
                     onClick={ ()=>handleDelete(
                        params.row.userId
                    )}
                    />
                </>
                );
            }
        },
      ];
 
  return (
    <div className="userList">
         <DataGrid
        rows={userData} 
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row)=>row.userId }
        checkboxSelection
      />
    </div>
  )
}
