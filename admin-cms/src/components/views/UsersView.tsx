import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { deleteUser, getAllUsers } from "../../features/users/userSlice";
import EditUserModal from "../../pages/ModalPage";

const UsersView = () => {
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState([]);
  const listOfUsers = useAppSelector((state) => state.users.users);
  const loading = useAppSelector((state) => state.users.loading);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);

  const handleModal = (user: any) => {
    setIsOpen(true);
    setSelectedUser(user);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDelete = async (userId: string) => {
    await dispatch(deleteUser(userId));
    await dispatch(getAllUsers());
  };

  if (loading) {
    return <div>LOADING...</div>;
  }

  return (
    <>
      {isOpen && (
        <EditUserModal user={selectedUser} onClose={handleModalClose} />
      )}
      <Container>
        <Table>
          <thead>
            <tr className="head">
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers &&
              listOfUsers.map((user: any) => (
                <TableRow key={user._id} role={user.role}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="actions">
                    <button
                      className="delete"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete User
                    </button>
                    <button
                      className="details"
                      onClick={() => handleModal(user)}
                    >
                      Edit User
                    </button>
                  </td>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default UsersView;

const Container = styled.main`
  padding: 1rem;
  background-color: transparent !important;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  .actions {
    display: flex;
    justify-content: space-around;
  }

  .delete {
    padding: 0.3rem;
    background-color: #2c030b86;
    border-radius: 2px;
    color: white;
    border: none;
  }

  .details {
    padding: 0.3rem;
    background-color: tan;
    border-radius: 2px;
    color: white;
    border: none;
  }

  td {
    padding: 0.3rem;
    margin: 0.1rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
    padding: 1rem 0;
  }
`;

const TableRow = styled.tr`
  ${(props) => props.role === "admin" && `color: red;`}
  ${(props) => props.role === "user" && `color: green;`}
`;
