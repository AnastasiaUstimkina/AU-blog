export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse{
  idToken: string
  expiresIn:string
}

export interface Post{
  id?: string
  title: string
  data: string
  text: string
  imgPath?: string 
}

export interface FbCreateResponse{
  name: string
}