import { Page } from "./home-page/page.model";

export enum ROUTES {
    HOME = 'home',
    CONTATTI = 'contatti-page',
}


export const  pages: Page[] = [
    {
      title: "HTTP SERVICE",
      description: "Test sui service e http client",
      routerLink: "/http-service-page",
    },
    {
      title: "PIPE",
      description: "Test sulle pipe",
      routerLink: "/pipes-page"
    }
  ];

