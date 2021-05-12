import React, { Fragment } from 'react'

const BornDate = (props) => {

        const bornYear = () => {
          const yearNow = new Date().getFullYear()
          return yearNow - props.age
        }
    return (
      <Fragment>
        <div>
          <h1> Calculando la Edad</h1>
            <p>
             Hello {props.name}, you are {props.age} years old
            </p>
            <p>So you were probably born {bornYear()}</p>
        </div>
      </Fragment> 
    )
}

export default BornDate;
