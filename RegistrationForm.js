import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/userSlice';
import styled from 'styled-components';

const FormWrapper = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.list);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password || !confirmPassword) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        if (users.some((user) => user.username === username)) {
            setError('Это имя пользователя уже занято');
            return;
        }

        dispatch(addUser({ username, password }));
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        alert('Регистрация прошла успешно');
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <div>
                <label>Имя пользователя:</label>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Пароль:</label>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Подтвердите пароль:</label>
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>

            {error && <p>{error}</p>}

            <Button type="submit">Зарегистрироваться</Button>
        </FormWrapper>
    );
};

export default RegistrationForm;