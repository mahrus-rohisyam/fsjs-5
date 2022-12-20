import React, { SyntheticEvent } from 'react';

type Props = {

}

const Contact = () => {
  const onSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    alert("Submitted!")
    
  }

  return (
    <>
      <h2>Contact Form</h2>
      <form onSubmit={(e) => {onSubmitForm(e)}}>
        <input type="submit" value="asdasd" />
      </form>
    </>
  )
}

export default Contact