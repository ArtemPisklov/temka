const heroForm = document.querySelector('.hero-text-form')
const heroInput = document.querySelector('.hero-text-input')

heroInput.addEventListener('focus', function(){
	heroForm.classList.add('hero-text-form--active')
	})

heroInput.addEventListener('blur', function(){
	heroForm.classList.remove('hero-text-form--active')
})
