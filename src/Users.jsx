import React from 'react';
import { useSearchParams } from 'react-router-dom';

const users = ['shakil', 'Raju', 'Python', 'Javascript', 'Apple'];

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('name') || '';

    const handelChange= event=> {
        const name = event.target.value;
        if(name) {
            setSearchParams({name})
        } else{setSearchParams({})}
    }
  return (
    <div className=' text-center mt-10'>
        <h1 className=' text-3xl my-5'>Users</h1>
        <input className=' border-1 border-blue-900 bg-blue-500/30' type="text" value={searchTerm} placeholder='search....' onChange={handelChange} />
        <ul>
            {users.filter(user=> user.toLowerCase().includes(searchTerm.toLowerCase())).map((user, i)=> (
                <li key={i}>{user}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users