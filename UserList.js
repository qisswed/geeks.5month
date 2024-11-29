import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ListWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const UserList = () => {
    const users = useSelector((state) => state.users.list);

    return (
        <ListWrapper>
            <h2>Зарегистрированные пользователи</h2>
            {users.length === 0 ? (
                <p>Пользователи ещё не зарегистрированы</p>
            ) : (
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user.username}</li>
                    ))}
                </ul>
            )}
        </ListWrapper>
    );
};

export default UserList;