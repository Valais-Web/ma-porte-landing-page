
-- Supprimer l'ancienne colonne name si elle existe encore
ALTER TABLE public."ma-porte-leads" DROP COLUMN IF EXISTS name;

-- S'assurer que la colonne first_name existe (au cas où elle n'aurait pas été créée)
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'ma-porte-leads' 
                   AND column_name = 'first_name') THEN
        ALTER TABLE public."ma-porte-leads" ADD COLUMN first_name character varying;
    END IF;
END $$;
