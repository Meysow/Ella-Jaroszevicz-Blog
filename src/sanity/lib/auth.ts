import { supabase } from "@/lib/supabaseClient";

export const signInWithMagicLink = async (email: string) => {
  const { error } = await supabase.auth.signInWithOtp({ email });
  if (error) throw error;
  return { message: "Check your email for the magic link!" };
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
