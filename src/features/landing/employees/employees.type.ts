export interface Employee {
  /** Identifier */
  _id?: string;

  firstName: string;

  lastName: string;

  /** Date of birth dd-mm-yyyy */
  dob: any;

  phoneNumber?: string;

  email?: string;

  department: string;

  jobTitle: string;

  address: string;

  jobDescription: string;

  /** Could be admin or employee */
  role: string;
}

export interface Employees {
  /** Array of employees */
  employeesList: Employee[];

  /** Holds data of currently selected employee (for add or update) */
  current: Employee;
}
