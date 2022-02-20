import { React, useState } from 'react';

const Forms = () => {
    const [details, setDetails] = useState({ cName: "", phoneNumber: "" })
    const { cName, phoneNumber } = details
    const changeHandler = (args) => {
        setDetails(...details[args.target.name] = args.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(details);
    }
    return <div>
        <form onSubmit={submitHandler}>
            <input type="text" name="cName" onChange={changeHandler} value={cName}/>
            <input type="text" name="no" onChange={changeHandler}  value={phoneNumber}/>
            <input type='submit' value="Submit" />
        </form>
    </div>;
};

export default Forms;
