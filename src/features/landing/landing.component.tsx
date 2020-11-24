import React, { useEffect, useState, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ColumnsType } from 'antd/lib/table';
import { Layout, Row, Col, Form } from 'antd';
import { FormInstance } from 'antd/lib/form';

import { RootState } from '&store/store';
import { employeesActions } from './employees/employees.slice';
import { applicationStateActions } from '../applicationState/applicationState.slice';
import { TableComponent } from '&styled/table/table.styled';
import { FormInputSearch } from '&styled/form/formInput/formInput.styled';
import { FormButton } from '&styled/form/formButton/formButton.styled';
import { Employee } from './employees/employees.type';
import { EmployeeModal } from '&styled/modal/modal.styled';
import { EmployeesComponent } from './employees/employees.component';

import { ReactComponent as EditIcon } from '&assets/images/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '&assets/images/trash-black-icon.svg';

type ReduxProps = ConnectedProps<typeof connector>;

const LandingComponent = (props: ReduxProps) => {
  const {
    getAllEmployees,
    setLoading,
    employeesList,
    setCurrentEmployee,
    currentEmployee,
    resetCurrentEmployee,
    editEmployeeByEmail,
    deleteEmployeeById,
    addEmployee,
  } = props;

  const [employees, setEmployees] = useState(employeesList);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [currentEmail, setCurrentEmail] = useState<string>('');
  const [currentdob, setdob] = useState<string>('01-01-2000');

  const { t } = useTranslation(['landing', 'common']);

  const handleGetEmployees = async () => {
    setLoading(true);
    const { payload } = await getAllEmployees();

    /** IF API failed set employees to empty array */
    const allEmployees = payload?.length !== undefined ? payload : [];

    setEmployees(allEmployees);
    setLoading(false);
  };

  useEffect(() => {
    setEmployees(employeesList);
  }, [employeesList]);

  useEffect(() => {
    handleGetEmployees();
  }, []);

  const filterResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    /** Search value entered by the user */
    const query = e?.target?.value?.toLowerCase();

    setEmployees(
      employeesList.filter(
        (employee: Employee) =>
          employee?.firstName?.toLowerCase().includes(query) ||
          employee?.lastName?.includes(query) ||
          employee?.dob?.toLowerCase().includes(query) ||
          employee?.email?.toLowerCase().includes(query) ||
          employee?.phoneNumber?.toLowerCase().includes(query) ||
          employee?.department?.toLowerCase().includes(query) ||
          employee?.jobTitle?.toLowerCase().includes(query) ||
          employee?.jobDescription?.toLowerCase().includes(query) ||
          query === '',
      ),
    );
  };

  const { Content } = Layout;

  const columns: ColumnsType<any> = [
    {
      title: t('FIRSTNAME'),
      dataIndex: 'firstName',
      key: 'firstName',
      align: 'center',
      width: 80,
      ellipsis: true,
      sorter: (a: any, b: any) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: t('LASTNAME'),
      dataIndex: 'lastName',
      key: 'lastName',
      align: 'center',
      width: 80,
      ellipsis: true,
      sorter: (a: any, b: any) => a.lastName?.localeCompare(b.lastName),
    },
    {
      title: t('DOB'),
      dataIndex: 'dob',
      key: 'dob',
      align: 'center',
      ellipsis: true,
      width: 80,
      sorter: (a: any, b: any) => a.dob.localeCompare(b.dob),
    },
    {
      title: t('MOBILE'),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      align: 'center',
      ellipsis: true,
      width: 80,
      sorter: (a: any, b: any) => a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      title: t('EMAIL'),
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      width: 150,
      ellipsis: true,
      sorter: (a: any, b: any) => a.email.localeCompare(b.email),
    },
    {
      title: t('ADDRESS'),
      dataIndex: 'address',
      key: 'address',
      align: 'center',
      width: 200,
      ellipsis: true,
      sorter: (a: any, b: any) => a.address.localeCompare(b.address),
    },
    {
      title: t('DEPARTMENT'),
      dataIndex: 'department',
      key: 'department',
      align: 'center',
      width: 100,
      ellipsis: true,
      sorter: (a: any, b: any) => a.department.localeCompare(b.department),
    },
    {
      title: t('JOB_TITLE'),
      dataIndex: 'jobTitle',
      key: 'jobTitle',
      align: 'center',
      width: 100,
      ellipsis: true,
      sorter: (a: any, b: any) => a.jobTitle.localeCompare(b.jobTitle),
    },
    {
      title: t('JOB_DESCRIPTION'),
      dataIndex: 'jobDescription',
      key: 'jobDescription',
      align: 'center',
      width: 200,
      ellipsis: true,
      sorter: (a: any, b: any) => a.jobDescription.localeCompare(b.jobDescription),
    },
    {
      title: t('EDIT_HEADER'),
      dataIndex: 'edit',
      key: 'edit',
      align: 'center',
      width: 60,
      render: (value, row) => (
        <EditIcon
          className='edit-icon'
          onClick={() => {
            /** Find employee by id */
            const { key: _id } = row;
            const employee = employeesList.find((employee: Employee) => employee._id === _id);

            setCurrentEmployee(employee);
            setCurrentEmail(employee?.email ?? '');
            setModalVisibility(true);
          }}
        />
      ),
    },
    {
      title: t('DELETE_HEADER'),
      dataIndex: 'delete',
      key: 'delete',
      align: 'center',
      width: 60,
      render: (value, row) => (
        <DeleteIcon
          className='delete-icon'
          onClick={() => {
            /** Find employee by id */
            const { key: _id } = row;
            const employee = employeesList.find((employee: Employee) => employee._id === _id);
            handleDeleteEmployee(employee?._id);
          }}
        />
      ),
    },
  ];

  const formRef = useRef<FormInstance>(null);
  const formEmpRef = useRef<FormInstance>(null);

  const closeModal = () => {
    setModalVisibility(false);
    resetCurrentEmployee();
  };

  const handleSubmitForm = async (values: Employee) => {
    /** If current email is empty it means we are adding a new employee else editing an existing one */

    delete values.dob;
    values.dob = currentdob;
    const { payload } =
      currentEmployee.email !== '' ? await editEmployeeByEmail({ body: values, email: currentEmail }) : await addEmployee(values);

    if (payload?.status === 201) {
      getAllEmployees();
    }
    closeModal();
  };

  const handleDeleteEmployee = async (id: any) => {
    const { payload } = await deleteEmployeeById(id);

    if (payload?.status === 201) {
      getAllEmployees();
    }
  };

  return (
    <Content>
      {/* Modal when Edit or Add buttons are clicked  */}
      {isModalVisible ? (
        <EmployeeModal visible={isModalVisible} borderlessHandler={closeModal} buttonHandler={handleSubmitForm}>
          <p className='employee-modal-title'>{currentEmployee.email !== '' ? t('EDIT_FORM_TITLE') : t('common:ADD_EMPLOYEE')}</p>
          <Form ref={formEmpRef} name='Employee Form' layout='vertical' initialValues={currentEmployee} onFinish={handleSubmitForm}>
            <EmployeesComponent closeModal={closeModal} setdob={setdob}></EmployeesComponent>
          </Form>
        </EmployeeModal>
      ) : null}
      <Row>
        <Col xs={1} sm={1} md={2} lg={2} xl={2}></Col>
        <Col xs={22} sm={22} md={20} lg={20} xl={20} className='search-form-container'>
          <Form name='employeesList' ref={formRef}>
            <Row justify='start' align='middle' className='row-add-search-container'>
              <Col xs={24} sm={24} md={16} lg={16} xl={18}>
                <Form.Item name='search'>
                  <FormInputSearch onChange={filterResults} placeholder={t('SEARCH_PLACEHOLDER')} />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={3} lg={3} xl={2}></Col>

              <Col xs={24} sm={24} md={5} lg={5} xl={4}>
                <FormButton
                  onClick={() => {
                    resetCurrentEmployee();
                    setModalVisibility(true);
                  }}
                  className='add-emoployee'
                >
                  {t('common:ADD_EMPLOYEE')}
                </FormButton>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col xs={1} sm={1} md={2} lg={2} xl={2}></Col>
      </Row>

      <Row>
        <Col span={24}>
          {employees.length > 0 ? (
            <TableComponent
              columns={columns}
              dataSource={employees?.map(
                ({ _id: key, firstName, lastName, dob, phoneNumber, email, department, jobTitle, jobDescription, address }) => ({
                  key,
                  firstName,
                  lastName,
                  dob,
                  phoneNumber,
                  email,
                  department,
                  jobTitle,
                  jobDescription,
                  address,
                }),
              )}
            />
          ) : (
            <TableComponent columns={columns} />
          )}
        </Col>
      </Row>
    </Content>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({
  employeesList: state.employees.employeesList,
  currentEmployee: state.employees.current,
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {
  // map your actions here ex:
  // increment : counterActions.increment
  getAllEmployees: employeesActions.getAllEmployees,
  setLoading: applicationStateActions.setIsLoading,
  setCurrentEmployee: employeesActions.setCurrentEmployee,
  resetCurrentEmployee: employeesActions.resetCurrentEmployee,
  editEmployeeByEmail: employeesActions.editEmployeeByEmail,
  deleteEmployeeById: employeesActions.deleteEmployeeById,
  addEmployee: employeesActions.addEmployee,
};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const LandingComponentRedux = connector(LandingComponent);

export { LandingComponentRedux as LandingComponent };
