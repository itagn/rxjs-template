import './scss/index.scss'
import { $ } from './js/util'
const Rx = require('rxjs/Rx')

const btn = $('#app')
Rx.Observable.fromEvent(btn, 'click')
  .scan(count => ++count, 0)
  .subscribe(count => btn.innerText = count)
