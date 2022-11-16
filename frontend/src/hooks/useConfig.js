import { useContext } from 'react';
import AuthContext from '../context/AuthContext.js'

const useConfig = () => {
    const (token) = useContext(AuthContext)

    return{
        headers: {

        }
    };
    return config;
};

export default useConfig;