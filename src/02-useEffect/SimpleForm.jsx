

export const SimpleForm = () => {
  return (
    <>
    <h1>Formulario simple</h1>
    <hr />
    <input 
    type="text" 
    className="form-control mt-2"
     placeholder="Username"
     name="username" />

<input 
    type="email" 
    className="form-control mt-2"
     placeholder="Email"
     name="email" />
    
    </>
  )
}
