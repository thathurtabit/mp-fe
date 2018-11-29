import React from 'react';
import uuidv1 from 'uuid/v1';

export const splitSpanString = str =>
  [...str].map((letter, index) => (
    <span
      key={uuidv1()}
      dangerouslySetInnerHTML={{ __html: letter }}
      className={`letter-${index + 1}`}
    />
  ));
