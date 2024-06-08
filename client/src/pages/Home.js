import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, removeCustomer } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers.customers.data);
    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);
    const deleteCustomer = (id) => {
        removeCustomer(id);
        dispatch(fetchCustomers());
    }
    const updateCustomer = (id) => {
        navigate(`/update/${id}`);
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-around">
                {
                    customers && customers.map((customer) => {
                        return (
                            <div className="col-3 p-2 border my-3" key={customer._id}>
                                <p><span className='lead'>Fname : </span>{customer.fname}</p>
                                <p><span className='lead'>Lname : </span>{customer.lname}</p>
                                <p><span className='lead'>Email : </span>{customer.email}</p>
                                <p><span className='lead'>Pnumber : </span>{customer.pnumber}</p>
                                <p><span className='lead'>NickName : </span>{customer.nickName}</p>
                                <button className='btn btn-danger mx-3' onClick={() => { deleteCustomer(customer._id) }}>Remove</button>
                                <button className='btn btn-primary' onClick={() => { updateCustomer(customer._id) }}>Update</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;