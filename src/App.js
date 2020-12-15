
import './sass/App.sass';
import React, { useState } from 'react';
// import QuoteTemplate from './QuoteTemplate';
import Editor from './Editor'
import Previewer from './Previewer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);


function App() {
  const [inputText, setInputText] = useState('')

  const update = (val) => {
    setInputText(val)
  }
  return (
    <div className='App'>
      <Editor addText={update} />
      <Previewer text={inputText} />
    </div>
  );
}

export default App;
