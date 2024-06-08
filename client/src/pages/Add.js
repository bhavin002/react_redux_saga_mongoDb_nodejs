import React, { useState } from 'react'
import { toast, Toaster } from "react-hot-toast";
import "../style/Form.css";
import { useDispatch } from 'react-redux';
import { addCustomer } from '../redux/action';

const Add = () => {
    const dispatch = useDispatch();
    const [info, setInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        pnumber: "",
        nickName: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        })
    }

    const createCustomer = (e) => {
        e.preventDefault();
        const { fname, lname, email, pnumber, nickName } = info;
        if (!fname || !lname || !email || !pnumber || !nickName) {
            toast.error("All Fields Are Required");
        } else {
            dispatch(addCustomer(info))
            setInfo({ ...info, fname: "", lname: "", email: "", pnumber: "", nickName: "" })
            toast.success("Customer Add Successfully");
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <form className="form border m-4 p-5" autoComplete='off'>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='logo'>Create Customer</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='fname'>Enter your Fname</label>
                            <input type="text" className="form-control" onChange={handleChange} value={info.fname} name='fname' id='fname' placeholder="First name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='lname'>Enter your Lname</label>
                            <input type="text" className="form-control" onChange={handleChange} value={info.lname} name='lname' id='lname' placeholder="Last name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='email'>Email</label>
                            <input type="email" className="form-control" onChange={handleChange} value={info.email} name='email' id='email' placeholder="Email address" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='nickName'>Pnumber</label>
                            <input type="text" className="form-control" onChange={handleChange} value={info.pnumber} name='pnumber' id='pnumber' placeholder="Pnumber" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='nickName'>NickName</label>
                            <input type="text" className="form-control" onChange={handleChange} value={info.nickName} name='nickName' id='nickName' placeholder="nickName" />
                        </div>
                    </div>
                </div>
                <button className='btnRegister mt-3 w-100' onClick={createCustomer}>Create</button>
            </form>
            <Toaster />
        </div>
    )
}

export default Add;