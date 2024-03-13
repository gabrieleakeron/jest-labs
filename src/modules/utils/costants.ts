import { Page } from "../home/home-page/models/page.model";

export enum ROUTES {
    HOME = 'home',
    CONTATTI = 'contatti-page',
}


export const  pages: Page[] = [
    {
      title: "SHORTEN PIPE",
      description: "Test sulle pipe",
      routerLink: "/pipes-page",
    }
  ];

