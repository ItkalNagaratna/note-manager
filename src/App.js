import React from "react";
import "./App.css";
import DefaultLayout from './component/DefaultLayout'
import Note from './component/Note'

class App extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <Note/>
      </DefaultLayout>
    )

  }
}

export default App;