function Rating({setRating,setIsRated,rate}){
    const handleRating= (e) => {
        // e.preventDefault();
        // if (e.target.tagname !== "INPUT") return;
        setRating(e.target.value);
    }
    const handleSubmit = () =>{
        if(!rate) return; 
        
        setIsRated(true);
    }
    return(
        <section>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            <h1>
                How did we do?
            </h1>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!
            </p>
            <form onChange={handleRating} onSubmit={handleSubmit} >
                <div className="rating">  
                <input type="radio" name="rating" value="1" id="r1"/>
                <label for="r1">1</label>
                <input type="radio" name="rating" value="2" id="r2"/>
                <label for="r2">2</label>       
                <input type="radio" name="rating" value="3" id="r3"/>
                <label for="r3">3</label>
                <input type="radio" name="rating" value="4" id="r4"/>
                <label for="r4">4</label>
                <input type="radio" name="rating" value="5" id="r5"/>
                <label for="r5">5</label>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </section>
    )
}
export default Rating;