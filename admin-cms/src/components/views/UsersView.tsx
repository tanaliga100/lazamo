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
              <TableRow key={user._id} role={user.role}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </TableRow>
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

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const TableRow = styled.tr`
  ${(props) => props.role === "admin" && `color: red;`}
  ${(props) => props.role === "user" && `color: green;`}
`;
