export interface ProfileResponse {
  data: {
    user: {
      email: string
      id: number
      last_login_at: string
      username: string
    }
  }
  status: string
}

export interface UserProfile {
  email: string
  id: number
  last_login_at: string
  username: string
}
