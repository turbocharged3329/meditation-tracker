export interface Profile {
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
