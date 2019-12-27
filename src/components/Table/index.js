/*
Пример того, как реализовать инкапсуляцию на уровне компонентов

Интерфейсом модуля выступает один компонент - Table 

Но внутри себя он использует TableItem / TableHeader,
о чем пользователям компонента Table знать не обязательно

Здесь же уникальные для компонента стили
*/

import Table from './Table';

export default Table;