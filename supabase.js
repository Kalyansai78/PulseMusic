const SUPABASE_URL = 'https://ufzdfrenfkhnsqjhuaop.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_n-pgbyeofGO8ALWqYXS-Xg_wKH03a20';

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log('PulseMusic Supabase connected:', supabaseClient);