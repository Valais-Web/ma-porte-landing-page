
-- Rename the budget column to housing_type to better reflect the new question
ALTER TABLE "ma-porte-leads" 
RENAME COLUMN budget TO housing_type;

-- Add a comment to clarify what this column stores
COMMENT ON COLUMN "ma-porte-leads".housing_type IS 'Type of housing: Maison individuelle, Immeuble, Commerce, or Autre';
