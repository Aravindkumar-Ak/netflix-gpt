export const validate=(name,email,password)=>{

    const isNameValid= /^[a-zA-Z0-9]+$/.test(name)
    const isEmailValid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if(!isNameValid) return "Please Enter a Valid Name"
    if(!isEmailValid) return "Please Enter Valid Email"
    if(!isPasswordValid) return "please Enter valid Password"

    return null;
}