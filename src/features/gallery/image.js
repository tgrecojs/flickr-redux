import React from 'react';
const listItemStyles = {
    width: '300px',
    padding: '1em',
    margin: '.5em 0 0 .5em',
    background: 'gainsboro',
    border: '2px dotted #000'
}
const Image = ({questionString, answer, _createdBy}) => {
  return (
      <li style={{...listItemStyles}}>
          <h3>Question: {questionString}</h3>
          <h4>Answer: {answer}</h4>
          <h5>Answered by: {_createdBy}</h5>
      </li>
  )
}
export default SingleQuestion

