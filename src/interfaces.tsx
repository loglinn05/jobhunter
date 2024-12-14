export interface CompanyInterface {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

export interface JobInterface {
  id?: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: number[];
  company: CompanyInterface;
}
