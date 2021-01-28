export interface IModalState {
  isShowAlert: boolean,
  isShowRedirect: boolean,
  message: string | null
}

export interface IUserState {
  isLoggedIn: boolean,
  info: {
    fullName: string | null,
    email: string | null,
    phone: string | null
  }
}

export interface INoteState {
  [id: string]: {
    content: string,
    draft: string
  }
}
