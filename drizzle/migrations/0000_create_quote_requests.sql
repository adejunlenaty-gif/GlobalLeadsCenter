CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  service text NOT NULL,
  target_country text NOT NULL,
  requirements text,
  details text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a quote request" ON public.quote_requests FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(full_name) BETWEEN 1 AND 100 AND char_length(email) BETWEEN 3 AND 255
  AND char_length(company) BETWEEN 1 AND 150 AND char_length(details) BETWEEN 10 AND 3000
  AND char_length(service) <= 100 AND char_length(target_country) <= 100
  AND (requirements IS NULL OR char_length(requirements) <= 1000)
);