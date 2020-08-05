import backendAxios from '../services/backendAxios';

export const createRequest = async (description, location, category) => {
    const res = await backendAxios.post('api/request', { description, location, category })
    return res;
}
export const rateRequest = async (rate,feedback,requestId) => {
    const res = await backendAxios.post('api/Request/RateRequest',
    {
      rate,
      feedback,
      requestId
    }
    )
    .then(res => {
        return true;
    })
    .catch(err => { 
    
      return false })
    
  return res;
  }
  