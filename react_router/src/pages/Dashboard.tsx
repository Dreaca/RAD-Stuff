import {useContext} from "react";
import {Customer} from "../models/Customer.ts";
import {CustomerContext} from "../store/CustomerProvider.tsx";

export function Dashboard() {

    const [customers, setCustomers] = useContext(CustomerContext);
    return (
        <>
            <h1 className="p-10 text-4xl font-bold mb-6 text-gray-900">Dashboard</h1>
            <table className="table-auto border-2 border-gray-900 w-full">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer: Customer) => (
                    <tr key={customer.email}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>

        </>
    );
}