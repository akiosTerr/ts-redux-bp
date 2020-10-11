import store from './store';
import { itemAdded } from './actions';
import { createItemElement } from './utils/createElements';

console.log(store.getState());

console.log(createItemElement('titulo teste'));
const appElement = document.getElementById('app');

console.log(appElement);

const unsubscribe = store.subscribe(() => {
	appElement.innerHTML = '';
	console.log('Store changed!', store.getState());
	const state = store.getState();
	state.map((stateItem) => {
		const item = createItemElement(stateItem.title, stateItem.description);
		appElement.appendChild(item);
	});
});

store.dispatch(itemAdded('title1', 'description1'));
store.dispatch(itemAdded('title2', 'description2'));
store.dispatch(itemAdded('title3', 'penins vagina lorem ipsum'));
