import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";

const Router=[{
path:'/',
element:<SiteRoot/>,

children:[{
    path:'',
    element:<Home/>
}]

},

]

export default Router