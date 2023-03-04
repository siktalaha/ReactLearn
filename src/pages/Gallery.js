import React ,{useEffect,useState}from 'react'
import Home from './Home';

const Gallery = () => {
    const[photos,setPhotos]=useState([]);
    const[loading,setLoading]=useState(true);
    const getPhotos= async ()=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/photos");
            setLoading(false);
            setPhotos(await response.json());
        }
        catch(error)
        {
            setLoading(false);
            console.log("Error detected");
        }
    }
    useEffect(()=>{
        getPhotos();
    },[]);
    if(loading)
    {
        return <Home />
    }
  return (
    <>
      <h2>Album to surf!!</h2>
      <div className='container-fluid mt-5'>
       <div className="row text-center">
       {

photos.map((curElem) => {

    const { albumId,id,title,url,thumbnailUrl} = curElem;
return (
      <div className="col-10 col-md-4 mt-5" key={id}>
<div className="card p-2">
        <div className="d-flex align-items-center">
                <div className="image"> <img src={ url } className="rounded" width="155" /> </div>
            <div className="ml-3 w-100">
                    <h4 className="mb-0 mt-0 textLeft">{title}</h4>
                 
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                            <span clarlssName="articles">Articles</span> <span className="number1">{thumbnailUrl}</span> </div>
                        <div className="d-flex flex-column">
                            <span className="followers">Followers</span> <span className="number2">980</span> </div>
                        <div className="d-flex flex-column">
                            <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                </div>
              
            </div>
     </div>
  </div>
</div>
)
})        

}


       </div>

      </div>
    
    </>
  )
}

export default Gallery