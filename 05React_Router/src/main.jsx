import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Github, { LoaderGithub } from "./pages/Github/Github.jsx";
import Contact from "./pages/contact/Contact.jsx";
import User from "./pages/user/user.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<AboutUs />}/>
      <Route path="contact" element={<Contact />} />
      <Route  loader={LoaderGithub} path="github" element={<Github />} />
      <Route path="user/" element={<User />} >
        <Route path=":id" element={<User />}/>
      </Route>
      <Route path="*" element={<div>Not Found</div>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
