import React, { useEffect,useState } from 'react'
function Home() {
  const [movies, setMovies] = useState([]);
   const [error, setError] = useState(null);
   const [page, setPage] = useState(1);
 
   useEffect(() => {
     const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`;
     const options = { method: 'GET', headers: { accept: 'application/json' } };
 
     fetch(url, options)
       .then((res) => {
         if (!res.ok) {
           throw new Error(`HTTP error! status: ${res.status}`);
         }
         return res.json();
       })
       .then((data) => {
         setMovies(data.results || []);
       })
       .catch((err) => {
         setError(err.message);
       });
   }, [page]);
 
   const handlePreviousPage = () => {
     if (page > 1) setPage((prev) => prev - 1);
   };
 
   const handleNextPage = () => {
     setPage((prev) => prev + 1);
   };
 
   return (
     <>
     <div className="container-fluid bg-dark text-light ">
       <h1 className='text-center'>All Movies</h1>
       {error && <p>Error: {error}</p>}
       <div className="card-container row gap-5 justify-content-center animate__animated animate__backInRight">
         {movies.map((movie) => (
           <div key={movie.id} className="card col-4 ">
             <img
               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
               alt={movie.title}
               class="card-img-top " 
             />
             <div className="card-body">
               <h4 className="card-title">{movie.title}</h4>
               <p className="card-text">Release Date: {movie.release_date}</p>
               
             </div>
           </div>
         ))}
          <div  className="prev-next d-flex gap-3 mt-2 mb-3 justify-content-center">
       <div onClick={handlePreviousPage} className="btn btn-secondary">⬅️{page-1}prev</div>
       <div onClick={handleNextPage} className="btn btn-secondary ">Next{page+1}➡️</div>
       </div>
       </div>
      
     </div>
     </>
   );
 
}

export default Home
