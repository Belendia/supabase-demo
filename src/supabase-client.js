import { createClient } from "@supabase/supabase-js";

let supabaseUrl = "http://localhost:8000";
let supabaseKey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzIwODU0MCwiZXhwIjoxOTc0MzYzNzQwfQ.7Q28DPa5rUF04uIWMjEDYxaLgG-eBt6SRnkQOYL6CwM";

let client = createClient(supabaseUrl, supabaseKey);

export default client;
