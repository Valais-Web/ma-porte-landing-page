
-- Désactiver RLS pour la table ma-porte-leads car c'est un formulaire public
ALTER TABLE public."ma-porte-leads" DISABLE ROW LEVEL SECURITY;

-- Ou alternativement, si vous préférez garder RLS activé, 
-- créer une politique qui permet l'insertion publique :
-- ALTER TABLE public."ma-porte-leads" ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public insert on ma-porte-leads" ON public."ma-porte-leads"
--   FOR INSERT TO anon
--   WITH CHECK (true);
