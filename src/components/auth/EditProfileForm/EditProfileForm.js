import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../Button/Button'

export default function EditProfileForm({
  updateUserProfileFirebase,
  userData,
  setUserData,
  errorMessage,
}) {
  const [editProfile, setEditProfile] = useState(false)

  return (
    <>
      <StyledForm>
        <label>
          Name
          <input
            name="displayName"
            disabled={editProfile ? false : true}
            type="text"
            value={userData.displayName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            disabled={editProfile ? false : true}
            type="text"
            value={userData.email}
            onChange={handleChange}
          />
          {errorMessage && (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          )}
        </label>
      </StyledForm>

      <Button
        onClick={() => handleClick(!!editProfile)}
        text={editProfile ? 'Save' : 'Edit'}
        color="var(--woodland)"
      />
    </>
  )
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  function handleClick(shouldSave) {
    setEditProfile(!editProfile)
    if (shouldSave) {
      updateUserProfileFirebase(userData)
    }
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 0 0;
  font-family: var(--headlineFont);
  font-weight: 500;
  font-size: 18px;

  label {
    padding: 20px 0;
  }
  input {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    margin-left: 20px;
    border: none;
    font-size: 16px;
    color: var(--dust);
    width: 220px;
  }
  input:disabled {
    background: var(--sand);
  }
`

const StyledErrorMessage = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: var(--sunset);
  margin: 10px 0 0;
`
