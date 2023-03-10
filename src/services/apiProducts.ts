import axios from 'axios'

export const apiProducts = axios.create({
  baseURL: 'https://api.npoint.io/4024a3d3effa40f597f5',
})
