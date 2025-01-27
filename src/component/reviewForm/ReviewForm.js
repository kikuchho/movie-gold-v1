import React from 'react'
import {Form, Button} from 'react-bootstrap'

const ReviewForm = ({handleSubmit, revText, labelText,defaultValue }) => { 
    //refer revtext as textarea 
  return (
    <Form>
        <Form.Group  className='mb-3' controlId='exampleForm.ControlTextArea1' >
            <Form.Label>
                {labelText}
            </Form.Label>
            <Form.Control ref={revText} as="textarea" rows ={3} defaultValue={defaultValue} /> 
        </Form.Group>
        <Button variant='outline-info' onClick={handleSubmit}> submit </Button>
    </Form>
  )
}

export default ReviewForm