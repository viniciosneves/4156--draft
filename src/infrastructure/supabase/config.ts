import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = import.meta.env.SUPABASE_URL
const supabaseKey: string = import.meta.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

