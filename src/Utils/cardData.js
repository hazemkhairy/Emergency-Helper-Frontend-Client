import { useState } from "react"
import {AsyncStorage} from 'react-native'
import backendAxios from '../services/backendAxios'

export const getAllSubjects = async () => {
  let res = await backendAxios.get('')
  .then(res => {
   
      return res.data.payload;
  })
  .catch(err => { return err })
return res;
}

