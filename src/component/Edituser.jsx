import React, { useEffect, useState } from 'react'
import {FormGroup , FormControl , InputLabel ,Input , Button , makeStyles , Typography} from '@material-ui/core'
import { addemp, getUsers , editemp } from '../services/api'
import {useNavigate , useParams} from 'react-router-dom'
const useStyle = makeStyles({
  container:{
    width:'50%',
    margin:'5% 0 0 25%',
    '$ >*':{
      marginTop: 50
    }
  }
})

const initialValue ={
  name:'',
  username:'',
  email:'',
  phone:''
}
const Edituser = () => {
  const[user , setUser] = useState(initialValue); 
  const{name , username , email,phone}=user;
  const {id} = useParams()
  const classes=useStyle(); 
  const navigate  = useNavigate();

  useEffect(()=>{
      loadUserData();
  },[]);

  const loadUserData = async ()=>{
      const response = await getUsers(id);
      setUser(response.data)
  }

  const onValueChange = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
  }


  const  editUserDetail =async ()=>{
     await editemp(id , user);
     navigate('/all')
  }

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h2">EDIT</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='username' value={username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)}  name='phone' value={phone} />
      </FormControl>
     <Button variant='contained' onClick={()=> editUserDetail()} color='primary' >Edit USer</Button>
    </FormGroup>
  )
}

export default Edituser
