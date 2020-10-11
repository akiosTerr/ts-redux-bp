import * as actions from './constants/actionTypes';

export const itemAdded = (title, description) => ({
	type: actions.addedItem,
	payload: {
		title,
		description,
	},
});

export const itemRemoved = (id) => ({
	type: actions.removedItem,
	payload: {
		id,
	},
});

export const itemToggle = (id) => ({
	type: actions.toggleItem,
	payload: {
		id,
	},
});
