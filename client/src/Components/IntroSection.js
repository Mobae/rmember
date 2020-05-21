import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'


const IntroSection = () => {
  return (
    <section style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
      
      <h1> Here We Can Write Main Slogan or Something for our Application. </h1>
      <p> Then some Deatils for our app.Rmember's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way. </p>
      <Form inline>
        <FormControl type="text" placeholder="Email" className="mr-sm-2" />
        <Button variant="success">Sign Up For Free</Button>
      </Form>
   
    </section>
  )

}

export default IntroSection