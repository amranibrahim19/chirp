import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

export default function Index({ auth, chirps }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Table</h2>}
        >
            <DataTable
                className="table-auto"
                columns={columns}
                data={data}
            />
        </AuthenticatedLayout>
    );
}

