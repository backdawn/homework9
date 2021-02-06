let cout = 0;
let b = 0;
function clickSubmit() {
	let name = document.getElementById('name');
	let lastName = document.getElementById('lastName');

	if (name.value.trim() !== "" && lastName.value.trim() !== "") {
		alert('Привет ' + name.value + ' ' + lastName.value);
		cout = 0;
	} else{
		cout++;
		b = 3 - cout;
		if (b===2) {
			alert('Если не введешь имя и фамилию будет хуже' + '\nУ тебя осталось ' + b + ' попытки');
		} else if(b===1){
			alert('Если не введешь имя и фамилию будет хуже' + '\nУ тебя осталось ' + b + ' попытка');
		} else{
			alert('А я предупреждал')
			window.close();
		}
	}
}