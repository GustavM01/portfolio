import snakeImg from "../assets/projects/games/snake.webp";
import ticTacToeImg from "../assets/projects/games/tictactoe.webp";
import connectFourImg from "../assets/projects/games/connect-four.webp";

import webshopImg from "../assets/projects/webshop/webshop.webp";
import webshopProductImg from "../assets/projects/webshop/webshop-product.webp";
import adminOrderImg from "../assets/projects/webshop/admin-order.webp";
import adminProductImg from "../assets/projects/webshop/admin-product.webp";

import travelExplorerHome from "../assets/projects/travel-explorer/travel-explorer-home.webp";
import travelExplorerSaved from "../assets/projects/travel-explorer/travel-explorer-saved.webp";
import travelExplorerCompare from "../assets/projects/travel-explorer/travel-explorer-compare.webp";

export const projects = [
  {
    id: 1,
    title: "Games Collection",
    images: [ticTacToeImg, snakeImg, connectFourImg],
    description:
      "A games website with 3 games, classic snake, TicTacToe where you can challange a friend or a bot and Connect Four where you can challange a friend.",
    technologies: ["React"],
    github: "https://github.com/GustavM01/Games",
    live: "https://gustavm01.github.io/Games/",
    featured: true,
  },

  {
    id: 2,
    title: "E-Commerce Store",
    images: [webshopImg, webshopProductImg, adminOrderImg, adminProductImg],
    description:
      "An e-commerce store with stripe checkout and an admin panel where you can see and manage orders and products.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Stripe",
      "Firebase",
      "Google Auth",
    ],
    github: "https://github.com/GustavM01/Webshop",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "Travel-Explorer",
    images: [travelExplorerHome, travelExplorerSaved, travelExplorerCompare],
    description:
      "A page where you can learn things about diffirent countries before visiting. Using different APIs to get relevant information.",
    technologies: [
      "React",
      "JavaScript",
      "Rest-Countries API",
      "Pexels API",
      "Weather API",
    ],
    github: "https://github.com/GustavM01/travel-explorer",
    live: "",
    featured: true,
  },
  //   {
  //     id: 4,
  //     title: "Australien Blog",
  //     images: [],
  //     description: "...",
  //     technologies: ["React", "Firebase", "Google Auth"],
  //     github: "...",
  //     live: "...",
  //     featured: true,
  //   },
];
