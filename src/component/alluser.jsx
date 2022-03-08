import React, { useEffect, useState} from "react";
import { getUsers , deleteUser } from "../services/api";
import {TableCell , TableHead , Table , TableRow ,TableBody , makeStyles, Button, Typography} from '@material-ui/core'
import { Link } from "react-router-dom";
const useStyle = makeStyles({
  table:{
    width:'90%',
    margin:'50px 0 0 50px'
  },
  thead:{
    '$ > *':{
      background:'#000000',
      color:'#FFFFFF'
    }
  }
})

const Alluser = () => {


  useEffect(() => {
    getalluser();
  }, []);

  const classes = useStyle(); 

  const [users , setUsers] = useState([])

  const getalluser = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data)
  };

  const deleteUserData = async(id)=>{
     await deleteUser(id);
     getalluser();
  };
  return (
    <Table className ={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell> </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=> deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ) )
        }
      </TableBody>
    </Table>
  );
};

export default Alluser;
