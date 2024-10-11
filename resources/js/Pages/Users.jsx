import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';

const Users = () => {
    return (
        <>
            <Head title="Users"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Showing users menu
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Users.layout = page => <AuthenticatedLayout
    header={<h2 className="text-xl font-semibold leading-tight text-gray-800">
        Users
    </h2>}
>{page}</AuthenticatedLayout>;

export default Users;
