import React, {useState} from 'react'

export default function TextForm(props) {
  const countCharacters = (text) => {
    if (text == null || text === '') {
        return 0;
    }
    
    let count = 0;
    for (let c of text) {
        if (c !== ' ') {
            count++;
        }
    }
    return count;
}

  const onClickUpHandler=()=>{
    let newtext= text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted To UpperCase !", "success");
  }
  const onClickLowHandler=()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted To LowerCase !", "success");
  }
  const TextChangeHandler=(event)=>{
    settext(event.target.value);
  }
  const HandleCopy=()=>
  {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied !", "success");
  }
  function countWords(text) {
   const wordsArray = text.trim().split(/\s+/);
   const filteredWordsArray = wordsArray.filter(word => word.length > 0);
   return filteredWordsArray.length;
  }

  const [text, settext]= useState('');
  return ( 
  <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
        <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#4c446a', color: props.mode==='light'?'black':'white' }} value={text} onChange={TextChangeHandler} id="myBox" rows="10"></textarea>
        </div>
        {/* button.btn.btn-primary */}
        
        <button disabled={countCharacters(text)=== 0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-2`} onClick={onClickUpHandler}>convert to uppercase</button>
        <button disabled={countCharacters(text)=== 0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-2`} onClick={onClickLowHandler}>convert to lowercase</button>
        <button disabled={countCharacters(text)=== 0} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-2`} onClick={HandleCopy}>copy text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
    <p>
    {countWords(text)} words and {countCharacters(text)} characters
    </p>  
    </div>
  </>
  )
}
