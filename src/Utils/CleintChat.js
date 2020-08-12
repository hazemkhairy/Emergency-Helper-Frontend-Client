import backendAxios from '../services/backendAxios'

export const allMessages = async () => {
    let response = await backendAxios.get('api/Chat/GetMsgs')
      .then((response) => {
       
        return response.data.payload.messages
      
      })
      .catch((error) => {
        return error;
      });
    return response;
  };
  
export const sendMessage = async (message) => {
    let res = await backendAxios.post('api/Chat/SendMessage',
    {
      message
    }
    )
    .then(res => {
        return true;
    })
    .catch(err => { 
      return false })
  return res;
  }

  