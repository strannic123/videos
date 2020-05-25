import axios from "axios";


const KEY = 'AIzaSyAbNYA4OpLnwkSKoBnWNhjjHF7nA6LSW3Q';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})