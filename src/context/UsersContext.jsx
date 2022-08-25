import React, {
  createContext, useMemo, useState, useEffect,
} from 'react';

export const UsersContext = createContext({});

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const UsersProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const abortController = new AbortController();

  const getUsers = async () => {
    setLoading(true);
    try {
      const usersRes = await fetch(USERS_URL, { signal: abortController.signal });
      const usersJSON = await usersRes.json();
      setUsers(usersJSON);
      setError('');
    } catch (error) {
      setUsers([]);

      if (abortController.signal.aborted) {
        setError('Request Canceled');
      } else {
        setError('Something went wrong went getting all users');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

  const usersValue = useMemo(() => {
    return {
      error,
      loading,
      users,
      getUsers,
    };
  }, [error, loading, users]);

  return (
    <UsersContext.Provider value={usersValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
