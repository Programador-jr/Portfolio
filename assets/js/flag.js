function changeImage() {
	let displayImage = document.getElementById('image')
	if (displayImage.src.match('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/290px-Flag_of_the_United_States.svg.png')) {
		displayImage.src = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg'
	} else {
		displayImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/290px-Flag_of_the_United_States.svg.png'
	}
}