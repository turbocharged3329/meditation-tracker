import { defineStore } from 'pinia'
import { client } from '@/services/http.ts'
import type { AuthInterface, LoginResponse, RegisterResponse } from '@/interfaces/auth.interface.ts'

const TOKEN_LS_KEY = 'token_store_key'

export const useAuthStore = defineStore('auth', () => {
  function setToken(token: string) {
    localStorage.setItem(TOKEN_LS_KEY, token)
  }

  function getToken(): string | null {
    return localStorage.getItem(TOKEN_LS_KEY)
  }

  function clearToken() {
    localStorage.removeItem(TOKEN_LS_KEY)
  }

  async function register(userData: AuthInterface) {
    try {
      const { data, status } = await client().post<RegisterResponse>('auth/register', {
        email: userData.email,
        password: userData.password,
        username: userData.username,
      })

      if (data && status == 200) {
        return true
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function login(userData: AuthInterface) {
    try {
      const { data, status } = await client().post<LoginResponse>('auth/login', {
        username: userData.username,
        password: userData.password,
      })

      if (data && status == 200) {
        setToken(data.data.token)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return {
    login,
    register,
    setToken,
    getToken,
    clearToken,
  }
})
