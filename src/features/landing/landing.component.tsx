import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ColumnsType } from 'antd/lib/table';

import { RootState } from '&store/store';
import { landingActions } from './landing.slice';
import { employeesActions } from './employees/employees.slice';
import { applicationStateActions } from '../applicationState/applicationState.slice';
import { TableComponent } from '&styled/table/table.styled';

import { ReactComponent as EditIcon } from '&assets/images/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '&assets/images/trash-black-icon.svg';

type ReduxProps = ConnectedProps<typeof connector>;

const LandingComponent = (props: ReduxProps) => {
  const { getAllEmployees, setLoading, setApplicationState, employeesList } = props;

  const [employees, setEmployees] = useState(employeesList);

  const { t } = useTranslation(['landing']);

  const handleGetEmployees = async () => {
    setLoading(true);
    const { payload } = await getAllEmployees();
    setLoading(false);
    setEmployees(payload);
  };

  useEffect(() => {
    handleGetEmployees();
  }, []);

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
            console.log('Edit icon clicked');
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
          className='trash-icon'
          onClick={() => {
            console.log('Delete icon clicked');
          }}
        />
      ),
    },
  ];

  return (
    <div>
      <TableComponent
        columns={columns}
        dataSource={employees.map(({ _id: key, firstName, lastName, dob, phoneNumber, email, department, jobTitle, jobDescription }) => ({
          key,
          firstName,
          lastName,
          dob,
          phoneNumber,
          email,
          department,
          jobTitle,
          jobDescription,
        }))}
      />
    </div>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({
  employeesList: state.employees.employeesList,
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {
  // map your actions here ex:
  // increment : counterActions.increment
  getAllEmployees: employeesActions.getAllEmployees,
  setLoading: applicationStateActions.setIsLoading,
  setApplicationState: applicationStateActions.setApplicationState,
};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const LandingComponentRedux = connector(LandingComponent);

export { LandingComponentRedux as LandingComponent };
