import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(<HelloWorld />, el)
const el = document.getElementById("app")
const HelloWorld = () => {
	return <h1>Hello World</h1>;
}