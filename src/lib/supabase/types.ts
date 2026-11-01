export interface Lead {
  id?: string;
  name: string;
  email: string;
  message: string;
  // Legacy columns are retained for existing lead records during migration.
  company?: string | null;
  website?: string | null;
  consent?: boolean | null;
  created_at?: string;
}
