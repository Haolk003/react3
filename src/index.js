import React from 'react';
import ReactDOM from 'react-dom';
import Menus from './menus';
import './index.scss'
const App =()=>{
    
return (
<div className='menu'>
<Menus />
</div>
)
}
ReactDOM.render(<App />,document.getElementById('root'))