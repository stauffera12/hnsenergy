
export interface IUser {
    id?: string;
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
    token?: string;
    remember?: boolean;

  }
  
  export interface Auth {
    email: string;
    password: string;
  }
  export interface RequireLogin {
    email: boolean;
    password: boolean;
  }
  export interface IUser {
    id?: string;
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?:string;
    token?: string;
    remember?: boolean;
  }




  
  
  
  