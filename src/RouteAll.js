import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link
} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Product'
import ProductItem from './Components/ProductItem'
export default function RouteAll() {
    return (
        <div>
         <Router>
             <nav>
                 <ul>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/about">About</Link>
                     </li>
                     <li>
                         <Link to="/product">Product</Link>
                     </li>
                 </ul>
             </nav>
             <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route path="/about" component={About}/>
                 <Route exact path="/product" component={Product}/>
                 <Route path="/product/:id" component={ProductItem}/>
                 <Route path="*" component={()=><h2>Path Not Found</h2>}/>
             </Switch>
             </Router>   
        </div>
    )
}
