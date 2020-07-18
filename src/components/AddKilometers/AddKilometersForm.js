import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import useForm from '../utils/useForm'
import TransportationTypes from '../TransportationTypes/TransportationTypes'
import SportTypes from '../SportTypes/SportTypes'

export default function AddKilometersForm({
  paragraph,
  type,
  updateData,
  getKilometers,
}) {
  const [values, handleChange, handleSubmit] = useForm(getKilometers)

  const getSelectionTemplate = (type) => {
    switch (type) {
      case 'sportsType':
        return (
          <SportTypes
            name="sporType"
            updateSportsType={updateData}
          ></SportTypes>
        )

      default:
        return (
          <TransportationTypes
            updateTransportationType={updateData}
            data-test="child"
            name="transportationType"
          ></TransportationTypes>
        )
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        {getSelectionTemplate(type)}
        <p>{paragraph}</p>
        <label>
          Kilometers
          <KilometerInput
            required
            value={values.distance || ''}
            type="tel"
            name="distance"
            onChange={(event) => handleChange(event)}
          ></KilometerInput>
        </label>
        <Button
          disabled={values.distance >= 1 ? false : true}
          text="Add"
        ></Button>
      </StyledForm>
    </>
  )
}

const StyledForm = styled.form`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  color: var(--sand);
  margin-bottom: 50px;

  h2 {
    color: var(--seafoam);
    font-family: var(--headlineFont);
    font-size: 32px;
    padding: 25px 0 20px 0;
    margin: 0;
  }
  p {
    width: 315px;
    margin: 0;
    padding-bottom: 10px;
  }
`

const KilometerInput = styled.input`
  border: none;
  border-radius: 3px;
  width: 315px;
  background: var(--sand);
  color: var(--dusk);
  margin: 25px 0;
  padding: 5px;
`
