// import { range } from './utils';

function StarRating({ rating }) {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= rating; i++) {
    const starClassName = i <= maxStars;
    //const isFilled = i <= rating;
    if(rating == 5){
      const maxStars = 5;
      stars.push(
        <img 
        key={i}
        className={starClassName}
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
  
      
      );
    }
    else if (rating == 4){
      const maxStars = 4;
      stars.push(
        <img 
        key={i}
        className={starClassName}
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      );

    }

    else if (rating == 3){
      const maxStars = 3;
      stars.push(
        <img 
        key={i}
        className={starClassName}
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      );
    }

    else if (rating == 2){
      const maxStars = 2;
      stars.push(
        <img 
        key={i}
        className={starClassName}
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      );
    }
    
  }

  
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */
 

  return <div className="star-wrapper">
    {stars}
  </div>;
}
  

export default StarRating;
