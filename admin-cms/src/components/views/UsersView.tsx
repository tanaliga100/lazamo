import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { getAllUsers } from "../../features/users/userSlice";

const UsersView = () => {
  const listOfUsers = useAppSelector((state) => state.users.users);

  const loading = useAppSelector((state) => state.users.loading);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(getAllUsers());
    }, 2000);
  }, []);
  if (loading) {
    return <div>LOADING...</div>;
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsers &&
            listOfUsers.map((user: any) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersView;

const Container = styled.main`
  padding: 1rem;
  background-color: transparent;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
