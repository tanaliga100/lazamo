import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../features/hooks";
import { updateUser } from "../features/users/userSlice";

const EditUserModal = ({ onClose, user }: any) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // do something with updated user information
    try {
      await dispatch(updateUser());
      setTimeout(() => {
        onClose();
      }, 1000);
      setName("");
      setEmail("");
      console.log({ name, email });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>Edit User</ModalHeader>
        <form onSubmit={handleSubmit}>
          <Label>
            Name:
            <Input type="text" value={name} onChange={handleNameChange} />
          </Label>
          <Label>
            Email:
            <Input type="email" value={email} onChange={handleEmailChange} />
          </Label>
          <Button type="submit">Save Changes</Button>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const ModalHeader = styled.h2`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  padding: 3px;
`;

const Input = styled.input`
  display: block;
  width: 95%;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 1rem;
  text-align: center;
  padding: 0.8rem;
  background-color: tan;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a8865a;
  }
`;

export default EditUserModal;
