import { v4 } from 'uuid';
import * as actions from './constants/actionTypes';

export default function reducer(state = [], action) {
	switch (action.type) {
		case actions.addedItem:
			return [
				...state,
				{
					id: v4(),
					title: action.payload.title,
					description: action.payload.description,
					done: false,
				},
			];

		case actions.removedItem: {
			return state.filter((item) => item.id !== action.payload.id);
		}

		case actions.markItem: {
			return state.map((item) => {
				if (item.id === action.payload.id) {
					item.done = !item.done;
				}
			});
		}
		default:
			return state;
	}
}
