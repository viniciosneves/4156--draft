import { createContext, ReactNode, useEffect, useState } from "react";
import { supabase } from "../../infrastructure/supabase/config";
import { Session } from "@supabase/supabase-js";

interface AuthContextType {
    session: Session | null;
    logout: () => Promise<void>
    login: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        supabase.auth.getSession()
          .then(({ data: { session } }) => {
            setSession(session)
            console.log('logged in?', session)
          })
          .finally(() => {
            setLoading(false)
          })
  
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
          if (event != "INITIAL_SESSION") {
            setSession(session)
          }
          console.log('onAuthStateChange', event)

        })
  
        return () => subscription.unsubscribe()
      }, [])

      const logout = async () => {
        await supabase.auth.signOut()
      }

      const login = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            throw error
        }
        
      }

    return (
        <AuthContext.Provider value={{ session, logout, login }}>
            {loading ? 'carregando' : children}
            {/* {children} */}
        </AuthContext.Provider>
    );
};
