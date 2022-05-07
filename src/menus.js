import Data from './data';
import { useState } from 'react';
import Menu from './menu';
const Menus=()=>{
    const [menus,setMenus]=useState(Data);
    const choose1 =()=>{
        setMenus(Data);
    }
    const choose2=((index)=>{
    const newMenu= Data.filter((menu)=>menu.category==="breakfast")
    setMenus(newMenu)

     })  
     const choose3=((index)=>{
        const newMenu= Data.filter((menu)=>menu.category==="lunch")
        setMenus(newMenu)
    
         })    
         const choose4=((index)=>{
            const newMenu= Data.filter((menu)=>menu.category==="shakes")
            setMenus(newMenu)
        
             })    
    
    return(
        <div className='menus'>
            <h2>Our Menu</h2>
            <ul>
                <li><button onClick={choose1} >All</button></li>
                <li><button onClick={choose2}>Breakfast</button></li>
                <li><button onClick={choose3}>Lunch</button></li>
                <li><button onClick={choose4}>Shakes</button></li>
            </ul>
            <div className='foods'>
                {menus.map((menu)=>{
                    return(
                        <Menu key={menu.id} {...menu} />
                    )
                })}
            </div>
        </div>
    )
}
export default Menus;