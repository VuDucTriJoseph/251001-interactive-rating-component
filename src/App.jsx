import { useState } from "react";
import Rating from "../components/rating";
import Thanks from "../components/thanks";

function App() {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(true);
  if(isRated){
    return <Thanks rating={rating}/>
  }
  return(
    <Rating />
  );
}

export default App;