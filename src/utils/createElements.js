export const createItemElement = (item, description) => {
	const pwrap = wrap('p', 'item-p');
	const divwrap = wrap('div', 'item');

	const btnRemove = wrap('button', 'btn btn-rem')('removeItem');
	const btnDone = wrap('button', 'btn btn-done')('done');

	const buttons = [btnDone, btnRemove];
	const raw = pwrap(item) + pwrap(description) + buttons;
	const elementRaw = divwrap(raw);
	const doc = new DOMParser().parseFromString(elementRaw, 'text/html');

	return doc.documentElement.querySelector('div');
};

const wrap = (tag, className = '') => (item) =>
	`<${tag} class="${className}">${item}</${tag}>`;

const createBtn = (title, classBtn, action) => {
	let btn = document.createElement(title);
	btn.className = classBtn;
	btn.addEventListener('click', action);
};
