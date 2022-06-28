import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
//linking react app to HTML page by root id
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
