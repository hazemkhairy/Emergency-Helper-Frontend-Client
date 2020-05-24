import { useState,useEffect } from "react"

import backendAxios from '../services/backendAxios'

export const getAllSubjects = async () => {
  let res = await backendAxios.get('api/Account/AllSupportCategories')
  .then(res => {
      //console.log(res.data.payload.categories)
      return res.data.payload.categories;
  })
  .catch(err => { return err })
return res;
}

export const getAllTickets = async() =>
{
    let response = await backendAxios.get("api/Account/GetTickets")
    .then(response => {
      console.log(response.data.payload)
      return response.data.payload.formatedSupportTickets
    })
    .catch(error => {
      return error;
    });
  return response;
  
  // useEffect(() => {
  //   getAllTickets() 
  // }, []);
  // return [Tickets,getAllTickets]
};
export const InsertSupportCategory = async (name) => {
  let res = await backendAxios.post('api/Account/SupportCategory',
  {
   name
  }
  )
  .then(res => {
      //console.log(res.data.message)
      return res.data.message;
  })
  .catch(err => { return err })
return res;
}


export const NewSupportCategory = async (description,category) => {
  let res = await backendAxios.post('api/Account/CreateSupportTicket',
  {
     category,
     description,
  }
  )
  .then(res => {
      console.log('New'+res.data.message)
      return res.data.message;
  })
  .catch(err => { 
    console.log('New'+err)
    return err })
return res;
}
