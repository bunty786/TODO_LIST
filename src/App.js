import './App.css';
import { useState , useEffect} from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineEnter } from "react-icons/ai";






function App() {

  const TogetData = () =>{
    let list = localStorage.getItem('LISTS')
  
  if(list){
        return JSON.parse(localStorage.getItem('LISTS'));
  }else{
    return [];
  }
}
 
  const [text, setText] = useState('')
  const [item, setItem] = useState(TogetData())

  const OnChangeHandler =(event)=>{
    setText(event.target.value);
    
  }

  const ClickHandlerBtn = () =>{

      if(!text){

      }
      else{
        setItem([...item,text]);
        setText('');

      }
      // setItem((olditem)=>{
      //   return [...olditem,text];
      // })
  }
  const deleteHandler =(  id) =>{
      const upDatedData = item.filter((elem,ind)=>{
        
        return ind !== id ;

      })
      setItem(upDatedData);
  }

  useEffect(() => {
    
    localStorage.setItem('LISTS',JSON.stringify(item))
  }, [item])

  

  return (
    <div className="App">
      <div className='contClass' >
        <h1>What's Your Plan Today?</h1>
          <div className="InputF">
          <input  className='InputTextArea' type="text" onChange={OnChangeHandler}  value={text}  />
          <button  className='BtnSub' onClick={ClickHandlerBtn} >
          <AiOutlineEnter/>
            </button>  
          </div> 
          <ul className='oldiv'>
              {
              item.map((CurrElm,ind)=> {
                return(   <div key={ind}>
                           <li className='liSty' > {CurrElm}                        
                           <button  onClick={ ()=> deleteHandler(ind)} ><AiOutlineCheck/></button>
                           </li>  
                          </div>
                ) 
              })
            }
            
          </ul>
        
      </div>
    </div>
  );
}

export default App;


