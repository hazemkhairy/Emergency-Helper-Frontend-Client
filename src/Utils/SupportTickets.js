import backendAxios from '../services/backendAxios'

export const getAllSubjects = async () => {
  let res = await backendAxios.get('api/Account/AllSupportCategories')
  .then(res => {
     
      return res.data.payload.categories;
  })
  .catch(err => { return err })
return res;
}

export const getAllTickets = async() =>
{
    let response = await backendAxios.get("api/Account/GetTickets")
    .then(response => {
      return response.data.payload.formatedSupportTickets
    })
    .catch(error => {
      return error;
    });
  return response;
};

export const NewSupportSupportTicket = async (description,category) => {
  let res = await backendAxios.post('api/Account/CreateSupportTicket',
  {
     category,
     description,
  }
  )
  .then(res => {
      console.log('New'+res.data.message)
      return true;
  })
  .catch(err => { 
    console.log('New'+err)
    return false })
return res;
}
export const getTicketsMessages = async (id) => {
  let response = await backendAxios.get(`api/Account/GetTicketMsgs/${id}`)
    .then((response) => {
      var data=response.data.payload
      var ar = [];
      for(var item in data){
         ar.push(data[item]);
       }
      console.log(ar)
      return ar;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const addMessage = async (ticketID,message) => {
  let res = await backendAxios.post('api/Account/AddMessage',
  {
    ticketID,
    message,
  }
  )
  .then(res => {
      console.log('New'+res.data.message)
      return true;
  })
  .catch(err => { 
    console.log('New'+err)
    return false })
return res;
}
