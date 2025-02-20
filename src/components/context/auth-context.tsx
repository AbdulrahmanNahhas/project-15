"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createClient } from "@/supabase/client";

const supabase = createClient(); // ✅ Move outside to prevent re-creation

export interface UserData {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  is_onboarded: boolean;
  role: string;
}

interface AuthContextType {
  user: UserData | null;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
      setUser(null);
    } else {
      const { data } = await supabase.from("users").select("*").eq("id", user.id).single();
      setUser(data || null);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });

    return () => subscription.unsubscribe();
  }, [fetchUser]);

  return (
    <AuthContext.Provider value={{ user, isLoading, refreshUser: fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUser must be used within an AuthProvider");
  }
  return context;
}