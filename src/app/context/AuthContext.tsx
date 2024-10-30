import { createContext, ReactNode, useEffect, useState } from "react";
import { supabase } from "../../infrastructure/supabase/config";
import { Session } from "@supabase/supabase-js";

interface AuthContextType {
    session: Session | null;
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
          console.log('logged in?', session)
        })
  
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
          console.log('onAuthStateChange')

        })
  
        return () => subscription.unsubscribe()
      }, [])

      const logout = async () => {
        await supabase.auth.signOut()
      }

    return (
        <AuthContext.Provider value={{ session, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
