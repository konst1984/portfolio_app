import IMG1 from "../assets/portfolio1.jpg";

export interface IClient {
  img: string;
  name: string;
  text: string;
}

export interface IPortfolio {
  id: number;
  image: string;
  title: string;
  github: string;
  demo: string;
}
