import axios from 'axios';

// const searchImages = (term)=>{
//
// }


export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization : 'Client-ID 34b88cbe5d90743ad6e6bc7df299420f1e8fc3dcf0c636784fe3e38657a04d70'
  }
});
