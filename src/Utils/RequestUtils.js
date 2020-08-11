import backendAxios from '../services/backendAxios';

export const createRequest = async (description, location, category) => {
  const res = await backendAxios.post('api/request', { description, location, category })
  return res;
}
export const rateRequest = async (rate, feedback) => {
  let res = await backendAxios.post('api/Request/RateRequest',
    {
      rate: Number(rate),
      feedback
    }
  )
    .then(res => {
      return true;
    })
    .catch(err => {
      return false
    })
    .catch(err => { 
      
      return false })
  return res;
}
