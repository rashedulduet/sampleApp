"use client"
import React, {useState} from 'react';

import {ErrorToast, IsEmpty, SuccessToast} from "./FormHelper";
import {useRouter} from "next/navigation";
import SubmitButton from './SubmitButton';


const FormComponent = () => {

    let [data,setData]=useState({hallName:"",requiredSeat:"",entryDate:"",exitDate:"",hallType:""})
    let [submit,setSubmit]=useState(false)
    let router=useRouter()
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]: value
        }))
    }
    const formSubmit=async ()=>{
                 console.log('abc')
        if(IsEmpty(data.hallName)){
            console.log('object')
            ErrorToast("hallName Required!")
        }
        else if(IsEmpty(data.requiredSeat)){
            
            ErrorToast("requiredSeat Required!")
        }
        else if(IsEmpty(data.entryDate)){
            ErrorToast("entryDate Required!")
        }
        else if(IsEmpty(data.exitDate)){
            ErrorToast("exitDate  Required!")
        }
        else if(IsEmpty(data.hallType)){
            ErrorToast("hallType Required!")
        }
        else {
            setSubmit(true);
            const options={method:'POST', body:JSON.stringify(data)}

            let res=await (await fetch("api/submitForm",options)).json();
            setSubmit(false);
            console.log(res);

            if(res['status']==="success"){
                SuccessToast("Request Success")
                router.push("/home")
            }
            else{
                ErrorToast("Invalid Request ! ")
            }

        }

    }

    console.log(data)
    return (
        <div>
            <div className="row h-100  justify-content-center center-screen">
                <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                    <div className="card container-fluid animated fadeIn p-5 gradient-bg">
                        <div className="row ">
                            <h5 className="mb-1 mx-0 px-0">Booking your Hall</h5>
                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">hallName</label>
                                <input value={data.hallName} onChange={(e)=>{inputOnChange("hallName",e.target.value)}} type="text" className="form-control"/>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">requiredSeat</label>
                                <input value={data.requiredSeat} onChange={(e)=>{inputOnChange("requiredSeat",Number(e.target.value))}} type="text" className="form-control"/>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">entryDate</label>
                                <input value={data.entryDate} onChange={(e)=>{inputOnChange("entryDate",e.target.value)}} type="date" className="form-control"/>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">exitDate</label>
                                <input value={data.exitDate} onChange={(e)=>{inputOnChange("exitDate",e.target.value)}} type="date" className="form-control"/>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">hallType</label>
                                <input value={data.hallType}  onChange={(e)=>{inputOnChange("hallType",e.target.value)}} type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <SubmitButton className="btn btn-danger w-100 mt-3" submit={submit} onClick={formSubmit} text="submit form"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;