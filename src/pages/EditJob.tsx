import { useLoaderData } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import { JobInterface, CompanyInterface } from "../interfaces";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneNumberInput from "../components/page-parts/add-job/PhoneNumberInput";

interface EditJobProps {
  editJob: (id: string, job: JobInterface) => void;
}

const EditJob = ({ editJob }: EditJobProps) => {
  const job = useLoaderData() as JobInterface;

  const jobTypes = ["Full-Time", "Part-Time", "Remote", "Internship"];

  const validationSchema = Yup.object({
    title: Yup.string().required("Job title is required."),
    type: Yup.string().required("Job type is required."),
    description: Yup.string().required("Job description is required."),
    location: Yup.string().required("Job location is required."),
    salary: Yup.array()
      .test(
        "salary-is-defined",
        "Please provide at least 'From' value.",
        (value) => {
          if (!Array.isArray(value)) return false;

          return !!value[0];
        }
      )
      .test(
        "valid-salary-range",
        "The 'From' value must be less than the 'To' value.",
        (value) => {
          if (!Array.isArray(value)) return false;
          let from = Number(value[0] ?? 0);
          let to = Number(value[1] ?? 0);

          return to == 0 || from < to;
        }
      ),
    company: Yup.object({
      name: Yup.string().required("Company name is required."),
      description: Yup.string().required("Company description is required."),
      contactEmail: Yup.string()
        .email("Invalid email format")
        .required("Contact email is required."),
      contactPhone: Yup.string().required("Contact phone is required."),
    }),
  });

  let navigate = useNavigate();

  const handleSubmit = (values: JobInterface) => {
    editJob(job.id!, values);

    return navigate(`/jobs/${job.id}`);
  };

  return (
    <section className="bg-gray-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <Formik
            initialValues={{
              title: job.title,
              type: job.type,
              description: job.description,
              location: job.location,
              salary: job.salary,
              company: {
                name: job.company.name,
                description: job.company.description,
                contactEmail: job.company.contactEmail,
                contactPhone: job.company.contactPhone,
              } as CompanyInterface,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="flex flex-col gap-5">
                <h2 className="text-3xl text-center font-semibold">Add Job</h2>

                <div>
                  <label htmlFor="type">Job Type</label>
                  <Dropdown
                    id="jobType"
                    options={jobTypes}
                    placeholder="Select Job Type"
                    value={values.type}
                    className="w-full"
                    onChange={(e) => setFieldValue("type", e.value)}
                  />
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="title">Job Title</label>
                  <InputText
                    id="jobTitle"
                    value={values.title}
                    onChange={(e) => setFieldValue("title", e.target.value)}
                    placeholder="e.g., Senior React Developer"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description">Job Description</label>
                  <InputTextarea
                    id="description"
                    rows={5}
                    cols={30}
                    value={values.description}
                    onChange={(e) =>
                      setFieldValue("description", e.target.value)
                    }
                    placeholder="Job duties, expectations, requirements"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="salary">Salary</label>
                  <div className="p-inputgroup">
                    <InputNumber
                      id="salary[0]"
                      value={values.salary[0]}
                      onValueChange={(e) => setFieldValue("salary[0]", e.value)}
                      placeholder="From"
                    />
                    <span className="p-inputgroup-addon">-</span>
                    <InputNumber
                      id="salary[1]"
                      value={values.salary[1]}
                      onValueChange={(e) => setFieldValue("salary[1]", e.value)}
                      placeholder="To (optional)"
                    />
                  </div>
                  <ErrorMessage
                    name="salary"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="location">Location</label>
                  <InputText
                    id="location"
                    value={values.location}
                    onChange={(e) => setFieldValue("location", e.target.value)}
                    placeholder="1234 Sunset Blvd, Los Angeles, CA"
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <h3 className="text-2xl mt-4 mb-0">Company Info</h3>

                <div className="flex flex-col">
                  <label htmlFor="company.name">Company Name</label>
                  <InputText
                    id="company.name"
                    value={values.company.name}
                    onChange={(e) =>
                      setFieldValue("company.name", e.target.value)
                    }
                    placeholder="e.g., Tether Tech"
                  />
                  <ErrorMessage
                    name="company.name"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="company.description">
                    Company Description
                  </label>
                  <InputTextarea
                    id="company.description"
                    rows={5}
                    value={values.company.description}
                    onChange={(e) =>
                      setFieldValue("company.description", e.target.value)
                    }
                    placeholder="What does your company do?"
                  />
                  <ErrorMessage
                    name="company.description"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="company.contactEmail">Contact Email</label>
                  <InputText
                    id="company.contactEmail"
                    value={values.company.contactEmail}
                    onChange={(e) =>
                      setFieldValue("company.contactEmail", e.target.value)
                    }
                    placeholder="inbox@company.com"
                  />
                  <ErrorMessage
                    name="company.contactEmail"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col">
                  <PhoneNumberInput
                    id="company.contactPhone"
                    label="Contact Phone"
                    value={values.company.contactPhone}
                    setFieldValue={setFieldValue}
                  />
                  <ErrorMessage
                    name="company.contactPhone"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mt-4">
                  <Button label="Edit Job" type="submit" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default EditJob;
