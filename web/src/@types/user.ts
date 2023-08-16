export interface User {
  id: string
  name: string
}

export interface AuthState {
  token: string
  user: User
}

export interface SignInCredentials {
  email: string
  password: string
}
