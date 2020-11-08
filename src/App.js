import React from 'react';
import BasicTable from './components/Table/BasicTable';
import FilteringTable from './components/Table/FilteringTable';
import PaginationTable from './components/Table/PaginationTable';
import Query from './components/Query/Query';
export default function App() {
  return (
    <div>
      {/* <PaginationTable /> */}
      <Query />
    </div>
  )
}
