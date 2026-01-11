import "./styles.css";
import { Restaurant } from "./restaurant.js";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

const home = new Home();
home.addTitle();
home.addReview();
home.addScheduleList();
home.displayAddress();