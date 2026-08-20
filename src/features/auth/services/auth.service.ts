import { supabase } from "@/lib/supabase/client";
import type { AuthCredentials, SignUpData } from "../types/auth.types";

export const authService = {
  async signUp({ email, password, name }: SignUpData) {
    return supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
  },

  async signIn({ email, password }: AuthCredentials) {
    return supabase.auth.signInWithPassword({
      email,
      password,
    });
  },

  async signOut() {
    return supabase.auth.signOut();
  },

  async getSession() {
    return supabase.auth.getSession();
  },
};
