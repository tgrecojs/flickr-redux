import React from 'react'
import Image from './image';
const questionListStyles = {
  listStyleType: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

const IterateQuestions = ({questions}) => {
  return (
    <ul style={{...questionListStyles}}>
      {questions.map((q, i) => 
        <Image key={i} {...q} />
        )}
    </ul>
  )
}

export default IterateQuestions