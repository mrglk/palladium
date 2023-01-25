export function initCustomSelect() {
    const selectInputs = document.querySelectorAll('.js-select')
    if (!selectInputs) {
        return
    }

    selectInputs.forEach((select) => {
        initSelect(select)
    })

    function initSelect(selectElement) {
        selectElement.style.display = 'none';

        const options = [...selectElement.options].map(option => option.innerText);

        const selectHtml = renderSelect(options)


        selectElement.after(selectHtml)

        selectHtml.addEventListener('click', clickElement)
    }

    function clickElement(e) {
        const option = e.target.closest('.js-select-option')
        const select = e.currentTarget

        if (!option) {
            return
        }

        const currentElement = select.querySelector('.js-select-current')

        currentElement.innerText = option.innerText

    }

    function renderSelect(options) {
        const selectWrapper = document.createElement('div')

        selectWrapper.classList.add('select');

        const optionsHtml = options.map((option) => {
            return `<div class="select__option js-select-option">${option}</div>`
        }).join('')

        selectWrapper.innerHTML = `
    	<div class="select__currentValue js-select-current">${options[0]}</div>
      <div class="select__options">
      		${optionsHtml}
      </div>
  `

        return selectWrapper
    }
}