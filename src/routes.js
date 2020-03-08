import Home from "./components/Home";
import About from "./components/About";
import Advices from "./components/Advices";
import Post from "./components/Post";

export const routes = [
  {path: '/', component: Home, name: 'Home'},
  {path: '/about', component: About, name: 'About'},
  {path: '/advices', component: Advices, name: 'Advices'},
  {path: '/post/:id', component: Post, name: 'Post'},
];
