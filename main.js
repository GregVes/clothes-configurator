import {model} from './model.js'
import { Configurator } from './configurator.js';

const configurator = document.querySelector("clothes-configurator");
configurator.model = model;
customElements.define("clothes-configurator", Configurator);