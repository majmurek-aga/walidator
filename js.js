const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

/^[0-9]{2}+-+[0-9]{3}$/

//kontakt@gmail.com

const showMsg = () => {
	if (
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.length > minValue &&
		pass.value.match(special)
	) {
		p.textContent = 'Masz bardzo dobre hasło';
		p.style.color = 'lime';
	} else if (pass.value.match(letters) && pass.value.match(numbers) && pass.value.length > minValue) {
		p.textContent = 'Masz dobre hasło';
		p.style.color = 'gold';
	} else {
		p.textContent = 'Masz słabe hasło';
		p.style.color = 'tomato';
	}
};

const checkPassword = () => {
	if (pass.value !== '') {
		showMsg();
	} else {
		p.textContent = 'Nie podałeś hasła';
		p.style.color = '';
	}
};

pass.addEventListener('keyup', checkPassword);
