import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Router from "./routing/Router";

const routes=createBrowserRouter(Router)
function App() {
  return (
    <>
   <RouterProvider router={routes}/></>
  );
}

export default App;
