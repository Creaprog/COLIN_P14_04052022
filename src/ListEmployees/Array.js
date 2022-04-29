import React from 'react'
import styled from 'styled-components'
import { useTable, useAsyncDebounce, useGlobalFilter, useSortBy, useFilters } from 'react-table'
// import Moment from 'react-moment';
// import { matchSorter } from 'match-sorter'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
// function fuzzyTextFilterFn(rows, id, filterValue) {
//   return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
// }

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  // const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        // placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
        }}
      />
    </span>
  )
}


function Array(props) {

  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      // {
      //     Header: 'Start Date',
      //     accessor: row => new Date(row.startDate),
      // },
      {
        Header: 'Department',
        accessor: 'department',
      },
      // {
      //     Header: 'Date of Birth',
      //     accessor: row => new Date(row.startDateBirth),
      // },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'stateUS',
      },
      {
        Header: 'Zip Code',
        accessor: 'zip',
      },
    ],
    []
  );
  const data = React.useMemo(() => props.employees, [props.employees])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    preGlobalFilteredRows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({
    columns,
    data,
  },
    useFilters,
    useGlobalFilter,
    useSortBy
  )

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <Styles>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </Styles>
    </>
  )
}

export default Array;