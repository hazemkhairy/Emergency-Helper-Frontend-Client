import backendAxios from '../services/backendAxios'

export const allMessages = async () => {
    let response = await backendAxios.get('api/Chat/GetMsgs')
      .then((response) => {
       
        var data=response.data.payload.messages
        var arr = [];
        for(var item in data){
           arr.push(data[item]);
         }
        return arr.reverse();
      
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

  