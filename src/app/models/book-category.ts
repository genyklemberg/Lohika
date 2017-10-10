export interface IBookCategory {
  caption: string;
  id: string;
  hash: string;
  categories?: IBookCategory[];
 }
