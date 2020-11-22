import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';

const TableComponent = (props: TableProps<any>) => (
  <Table<any>
    pagination={{
      defaultCurrent: 1,
      defaultPageSize: 5,
      pageSizeOptions: ['5', '10', '20', '30', '40'],
      showSizeChanger: true,
      position: ['bottomCenter'],
      locale: { items_per_page: '' },
    }}
    scroll={{ x: 500 }}
    {...props}
  ></Table>
);

export { TableComponent };
