import React from 'react'
import Child1 from './Child1';
import Child2 from './Child2';
import { useLocation } from 'react-router-dom';


function ChildContainer() {
    // console.log(match)
    // const { key } = match.params.key;

    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const key = params.get('key');
    console.log(key)

    switch (key) {
        case 'child1':
            return <Child1 />;
        case 'child2':
            return <Child2 />;
        default:
            return null;
    }
}

export default ChildContainer