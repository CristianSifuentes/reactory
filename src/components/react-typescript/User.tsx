import { useState } from "react"

interface User {
    uid:    string; 
    name:   string;
}

const tempUser: User = {
    uid: 'ABC123',  
    name: 'Fernando'        
}

export const User = () => {

  const [user, setUser] = useState<User>({
    uid: '',
    name: ''
  });

  const login = () => { 
    setUser({
      uid: 'ABC123',
      name: 'Fernando'
    });
  }

       
  return (
    <div className="mt-5">
        <h3>User: useState</h3>
        <button onClick={login} className="btn btn-outline-primary">login</button>

        {
            (!user)
             ? 
            <pre>Not found user:</pre> 
            : <pre>{ JSON.stringify(user) }</pre>
        }

       
    </div>
  )
}
