interface SalaryProps {
  salary: number[];
  pClass?: string;
}

const Salary = ({ salary, pClass = "" }: SalaryProps) => {
  let SalaryComponent: JSX.Element = <></>;
  if (salary.length == 1) {
    SalaryComponent = <p className={pClass}>{salary[0]}$</p>;
  } else {
    SalaryComponent = (
      <p className={pClass}>
        {salary[0]}$ - {salary[1]}$
      </p>
    );
  }
  return SalaryComponent;
};

export default Salary;
