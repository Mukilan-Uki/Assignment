import { useState } from "react";

export default function Application(){
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        address:"",
        comment:""
    });
    const [submittedList,setSubmittedList] = useState([]);

    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData((prevData) => ({
            ...prevData,[name]:value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        setSubmittedList((prevList) => [...prevList,formData]);

        setFormData({firstName:"",lastName:"",email:"",gender:"",address:"",comment:""});
    }
    return(
        <>
        <form className="container">
            <h1>Application Form</h1>
            <div className="form-floating m-3">
                <input type="text" name="firstName" className="form-control" placeholder="name" value={formData.firstName} onChange={handleChange}></input>
                <label className="form-label">First Name</label>
            </div>
            <div className="form-floating m-3">
                <input type="text" name="lastName" className="form-control" placeholder="em" value={formData.lastName} onChange={handleChange}></input>
                <label className="form-label">Last Name</label>
            </div>
            <div className="form-floating m-3">
                <input type="text" name="email" className="form-control" placeholder="name" value={formData.email} onChange={handleChange}></input>
                <label className="form-label">Email</label>
            </div>
            <label className="mx-3">Gender:</label><br/>
            <div class="form-check form-check-inline mx-3">
                <input type="radio" className="form-check-input" id="gender" name="gender" value='male' onChange={handleChange}/>
                <label for="radio" className="form-label">Male</label>
            </div>
            <div class="form-check form-check-inline m-3">
                <input type="radio" class="form-check-input" id="gender" name="gender" value='female' onChange={handleChange}/>
                <label for="radio" class="form-label">female</label>
            </div>
            <div className="form-floating m-3">
                <input type="text" name="address" className="form-control" placeholder="name" value={formData.address} onChange={handleChange}></input>
                <label className="form-label">Address</label>
            </div>
            <textarea cols={60} rows={10} name="comment" className="m-3" value={formData.comment} onChange={handleChange}></textarea>
            <input type="submit" className="btn btn-success" onClick={handleSubmit}/>
        </form>

            
            <table border={1} className="table table-bordered m-3">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Description</th>
                </tr>

                {submittedList.map((item)=>(

                 <tr>
                 <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td>{item.comment}</td>
                 </tr>
          
            ))}
            
            
            </table> 
        </>
    )
}