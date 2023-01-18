import { createBrowserRouter } from "react-router-dom";
import AddPost from "../AddPost/AddPost";
import Detail from "../Detail/Detail";
import Product from "../Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/addpost",
    element: <AddPost />,
  },
]);

export default router