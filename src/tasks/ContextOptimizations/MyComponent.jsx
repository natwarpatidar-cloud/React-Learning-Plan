import React, { useContext, useMemo } from 'react';

const MyContext = React.createContext({});

function useSelectedContext(selector) {
  const contextValue = useContext(MyContext);
  const selectedValue = useMemo(() => selector(contextValue), [contextValue, selector]);
  return selectedValue;
}

function MyComponent() {
  const username = useSelectedContext(state => state.user.username);

  return (
    <div>
      <p>Welcome, {username}!</p>
    </div>
  );
}

function App() {
  const contextData = {
    user: { username: 'John Doe', id: 123 },
    settings: { theme: 'dark', notifications: true }
  };

  return (
    <MyContext.Provider value={contextData}>
      <MyComponent />
    </MyContext.Provider>
  );
}