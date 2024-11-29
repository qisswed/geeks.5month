import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList';
import GlobalStyle from './styles/GlobalStyle';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <h1>Регистрация</h1>
            <RegistrationForm />
            <UserList />
        </div>
    );
}

export default App;