import { useState } from "react";

export default function Question2(){
    const [data,setData]=useState({
        title:"",
        price:""
    })

    let handleChange=(e)=>{
        const {name,value}=e.target

        setData(prevData=>({
            ...prevData,[name]:value
    }))
    }

    const [formData,setFormData]=useState("");

    let handleSubmit=(e)=>{
        e.preventDefault();

        setFormData(data)
    }

    return(
        <>
        <h1>Expense Tracker</h1>
        <input type="text" value={setData.title} name="title" onChange={handleChange} />
        <input type="number" value={setData.price} name="price" onChange={handleChange} />
        <button onClick={handleSubmit}>Add Expense</button>

        {formData &&(
            <ul>
                <li>{formData.title}-{formData.price}</li>
            </ul>
        )}
        </>
    )
}