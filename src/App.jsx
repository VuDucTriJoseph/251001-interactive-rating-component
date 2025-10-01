import { useState } from "react";
import Rating from "../components/rating";
import Thanks from "../components/thanks";

function App() {
  const [rating, setRating] = useState(null);
  const [isRated, setIsRated] = useState(false);
  if(isRated){
    return <Thanks rating={rating}/>
  }
  return(
    <Rating setRating={setRating} setIsRated={setIsRated} rate={rating}/>
  );
}

export default App;