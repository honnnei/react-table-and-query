import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { Table } from 'reactstrap';
import GlobalFilter from './GlobalFilter';


export default function FilteringTable() {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
    },
        useGlobalFilter,
        useSortBy);

    const { globalFilter } = state;


    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <div>
                <Table {...getTableProps()} >
                    <thead>

                        {headerGroups.map((headerGroup) => (

                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}

                                            {column.isSorted ? (column.isSortedDesc ? <span> &darr;</span> : <span> &uarr;</span>) : ''}

                                        </th>
                                    ))
                                }
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell) => {
                                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </Table>
            </div >
        </>
    )
}
