import React from "react";
import ReactDOM from "react-dom";

// NOTE: Brings in provider for the redux store
import {Provider} from "react-redux"
// NOTE: brings in the store file
import store from './store'

import "./index.css";

import App from "./App";

ReactDOM.render(
// NOTE: Provider is passed the store file
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById( 'root' )
);
