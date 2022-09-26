import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { env } from './config';

function Userview() {
    const params = useParams();
    console.log(params);
    const [searchParams, setSearchParams]= useSearchParams();
    console.log(...searchParams);

const[userData,setUserData]=useState({})
    useEffect(()=>{
      loadUser()
    },[])
    let loadUser = async () => {
      try{
        let user = await axios.get(`${env.api}/user/${params.id}`)
      setUserData(user.data)
      } catch(error){
        console.log(error)
      }
     
    }




    
  return (
    <>
    <h2>{userData.name}</h2>
    <h3>{userData.position}</h3>
    <h3>{userData.office}</h3>
    <h3>{userData.age}</h3>
    <h3>{userData.startDate}</h3>
    <h3>{userData.salary}</h3>

    </>
  )
}

export default Userview;