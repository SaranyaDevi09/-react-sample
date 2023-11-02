import React,{useState} from 'react'
import './style.css'

const Basic = () => {
    const[like,setlike]= useState(100)
    const[comment,setcomment]= useState(0)
    function incrementlike()
    {
        setlike(like+1);
    }
    function incrementcomment()
    {
        setcomment(comment+1);
    }
    
  return (
    <div>
        <div className="div">
        <h2>QUOTES</h2>
        </div>
        <p className="name">What sets you apart can sometimes feel like a burden and it's not. And a lot of the time, it's what makes you great.” — Emma Stone. ...
“In order to be irreplaceable one must always be different.” - Coco Chanel. ...
“Always remember that you are absolutely unique. Just like everyone else.Happiness begins with loving yourself, every beautiful inch, no matter what anyone else thinks—and forgiving yourself, too, so that you can grow. If you've been down on yourself lately, the concept of self-love may sound counterintuitive, but don't take our word for it.</p>
   <div className="mydiv">
   <div id="para">
   <p>like:{like}</p>
    <button onClick={incrementlike}>like</button>
    <p >comment:{comment}</p>
    <button onClick={incrementcomment}>comment</button>
    </div>
    </div> 
   </div>

    
  )
  
}

export default Basic