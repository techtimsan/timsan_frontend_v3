import { create } from "zustand"
import { persist } from "zustand/middleware"

type User = {
  id: string
  firstName: string
  lastName: string
  email: string
}

type AuthState = {
  user: User | null
  authState: "logged in" | "logged out" | null
}

type AuthActions = {
  login: (user: User) => void
  logout: (user: User) => void
}

const initialState: AuthState = {
  user: null,
  authState: null,
}

const useAuth = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      user: initialState.user,
      authState: initialState.authState,
      login: (user: User) => {
        set({
          user: user,
          authState: "logged in",
        })
      },
      logout: (user: User) => {
        set({
          user: null,
          authState: "logged out",
        })
      },
    }),
    {
      name: "timsan_auth",
      // defaults to localStorage
    }
  )
)

export default useAuth
