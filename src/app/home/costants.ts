import { Page } from "./home-page/page.model";

export enum ROUTES {
    HOME = 'home',
    MOVIES = 'movies-page',
}


export const  pages: Page[] = [
    {
      title: "Movies",
      description: "Movies page",
      routerLink: "/movies-page",
    },

  ];

