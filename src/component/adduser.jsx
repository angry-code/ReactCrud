import React, { useState } from 'react'
import {FormGroup , FormControl , InputLabel ,Input , Button , makeStyles} from '@material-ui/core'
import { addemp } from '../services/api'
import {useNavigate} from 'react-router-dom'
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
const Adduser = () => {
  const[user , setUser] = useState(initialValue); 
  const{name , username , email,phone}=user;
  const classes=useStyle(); 
  const navigate  = useNavigate();

  const onValueChange = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
  }


  const  addUserDetail =async ()=>{
     await addemp(user);
     navigate('/all')
  }

  return (
    <FormGroup className={classes.container}>
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
     <Button variant='contained' onClick={()=> addUserDetail()} color='primary' >Add USer</Button>
    </FormGroup>
  )
}

export default Adduser
