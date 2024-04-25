import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleChange} 
      />
      <ReactMarkdown children={markdown} />
    </div>
  );
}

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const names = data.map(item => item.name);

console.log(names); // [ 'John', 'Jane', 'Bob' ]