import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const Button = styled.button``

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled(Button)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Filter By NIC"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton type="button" onClick={onClear}>
            X
        </ClearButton>
    </>
)

const columns = [
    {
        name: 'NIC',
        selector: row => row.nic,
    },
    {
        name: 'Telephone Number',
        selector: row => row.telnumber,
    },
    {
        name: 'Date',
        selector: row => row.createdAt.split("T")[0],
    },
    {
        name: 'Time',
        selector: row => (row.createdAt.split("T")[1]).split(".")[0],
    },
];

export default function AirPort() {
    const [visitors, setVisitors] = useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = visitors.filter(
        item => item.nic && item.nic.toLowerCase().includes(filterText.toLowerCase()),
    );
    useEffect(() => {
        function getVisitors() {
            axios.get("http://localhost:8070/Polis/P").then((res) => {
                setVisitors(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getVisitors();
    }, [])

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div>
            <h1>All Visitors</h1>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                persistTableHead
            />
        </div>

    )
}


