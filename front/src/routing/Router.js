import Add from "../pages/admin/Add/Add";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";

const Router=[{
path:'/',
element:<SiteRoot/>,

children:[{
    path:'',
    element:<Home/>
},
{
    path:'admin1988201019752020',
    element:<Add/>
}]

},

]

export default Router