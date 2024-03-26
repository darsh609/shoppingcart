// import { useState, useEffect } from "react";
// import Spinner from "../components/Spinner";
// import Product from "../components/Product";

// const Home = () => {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]);

//   async function fetchProductData() {
//     setLoading(true);

//     try{
//       const res = await fetch(API_URL);
//       const data = await res.json();

//       setPosts(data);
//     }
//     catch(error) {
//       console.log("Error aagya ji");
//       setPosts([]);
//     }
//     setLoading(false);
//   }

//   useEffect( () => {
//     fetchProductData();
//   },[])

//   return (
//     <div>
//       {
//         loading ? <Spinner />  :
//         posts.length > 0 ? 
//         (<div>
//           {
//             posts.map( (post) => (
//             <Product key = {post.id} post={post}/>
//           ) )
//           }
//         </div>) :
//         <div>
//           <p>No Data Found</p>
//         </div> 
//       }
//     </div>
//   );
// };

// export default Home;



import { useEffect,useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading,setLoading]=useState(false);
  const[posts,setPosts]=useState([]);


  async function fetchdata(){
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      
      const data= await res.json();
      console.log(data);
      setPosts(data);
    }
    catch(error){
      console.log("errorrrrrrrrrrrrrrr");
      setPosts([]);

    }

    setLoading(false);
  }
  useEffect(()=>{
    fetchdata();
  },[])


  return (
    
<div>
  {
  loading ? <Spinner />:
  posts.length > 0 ?
 (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
  {
  posts.map((post) => (
    <Product key={post.id} post={post}/>
  ))
  }
   
  </div> ):
  <div className="flex items-center justify-center">
      <p>No Data Found</p>
      </div>
      
      
      
      }
      </div>

    
    );
  
};

export default Home;