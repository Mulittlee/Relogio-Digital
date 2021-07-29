import '../primeiroPasso/src/styles/generic/reset.css'
import '../primeiroPasso/src/styles/setting/color.css'
import '../primeiroPasso/src/styles/elements/base.css'
import './style.css'

import headerTitulo from './src/components/header'
import sectionHora from './src/components/section'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforeend',/*html*/`
    ${headerTitulo('Horario atual de Brasilia')}
    ${sectionHora()}
  ` 
) 