import { CompanyInterface } from "../../../interfaces";
import HR from "../../HR";

interface CompanyInfoProps {
  company: CompanyInterface;
}

const CompanyInfo = ({ company }: CompanyInfoProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-6">Company Info</h3>

      <h2 className="text-2xl">{company.name}</h2>

      <p className="mb-10">{company.description}</p>

      <HR />

      <h3 className="text-xl m-0 mt-10">Contact Email:</h3>

      <div className="max-w-full overflow-hidden my-2 bg-orange-100 p-2">
        <p className="m-0 p-0 font-bold overflow-hidden whitespace-nowrap text-ellipsis">
          {company.contactEmail}
        </p>
      </div>

      <h3 className="text-xl m-0 mt-7">Contact Phone:</h3>

      <p className="my-2 bg-orange-100 p-2 font-bold">{company.contactPhone}</p>
    </div>
  );
};

export default CompanyInfo;
