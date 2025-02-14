'use client'

import { createClient } from "@/supabase/client"
import { useCallback, useEffect, useState } from "react"

export interface UserData {
  id: string,
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  avatar_url: string,
  cover_image_url: string,
  points: number,
}

interface UseUserReturn {
  user: UserData | null
  isLoading: boolean
  error: Error | null
  refresh: () => Promise<void>
}

export function useUser(): UseUserReturn {
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true)
      const supabase = createClient()
      
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user) {
        setUser(null)
        return
      }

      const { data, error } = await supabase
        .from('users')
        .select("*")
        .eq('id', session.user.id)
        .single()

      if (error) throw error
      setUser(data)
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'))
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUser()

    // Set up auth state change listener
    const supabase = createClient()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchUser()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [fetchUser])

  return {
    user,
    isLoading,
    error,
    refresh: fetchUser
  }
}