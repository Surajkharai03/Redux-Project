import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export const fetchPhotos = async(query,page=1,per_page=20) =>{      // cat ko receive kiya h as a queery
  const res = await axios.get("https://api.unsplash.com/search/photos",{
    params:{query,page,per_page},    // query pass krni h isme eg: like cat  and per page kitne element rhnege vo pass kiya 
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
  })                  // api ko easily fetch kr skte h
  return res.data
  

}

export const fetchVideos = async(query,limit=20) =>{
    const res = await axios.get("https://pixabay.com/api/videos/",{
        params:{q:query,key:PIXABAY_KEY,per_page:limit},
        
    })
      return res.data

}

export const fetchGIF = async(query,per_page=15) =>{
    const res = await axios.get("https://api.giphy.com/v1/gifs/search",{
        params:{
          api_key:GIPHY_KEY,
          q:query,
          limit:per_page
        }
    })
      return res.data
}