//<script src="https://unpkg.com/imask"></script>

const element = document.querySelector('.phone-mask')
const maskOptions = {
  mask: '+{38}(000)000-00-00'
};
const mask = IMask(element, maskOptions);