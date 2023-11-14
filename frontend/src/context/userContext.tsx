import { ReactNode, useState, useEffect, useContext, createContext } from "react"


type UserContextProviderProps = {
  children: ReactNode
}

type UserContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}

export const UserProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('token')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.log('Error parsing user data', error);
      }
    }
  }, [])


  const contextValue: UserContextType = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}