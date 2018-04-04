export interface IComment {
  author: string;
  created: Date;
  updated: Date;
  message: string;
  subComments: [IComment]
};