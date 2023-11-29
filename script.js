const controlNames = ['search', 'button', 'select', 'textarea'];
var parameter = 0;

function showInterface(element) {
    const interfaces = document.querySelectorAll('.element-interface');
    interfaces.forEach(interface => {
        interface.classList.remove('active-interface');
    });


    const selectedInterface = document.getElementById(`${element}-interface`);
    selectedInterface.classList.add('active-interface');

    parameter = controlNames.indexOf(element);
}

const searchVariantSelect = document.getElementById('search-variant');
const searchSizeSelect = document.getElementById('search-size');
const searchColorSelect = document.getElementById('search-color');
const resultSearch = document.getElementById('resultSearch');
const coloredSearch = document.getElementById('coloringSearch');

const buttonVariantSelect = document.getElementById('button-variant');
const buttonSizeSelect = document.getElementById('button-size');
const buttonColorSelect = document.getElementById('button-color');
const resultButton = document.getElementById('resultButton');
const coloredButton = document.getElementById('coloringButton');

const selectVariantSelect = document.getElementById('select-variant');
const selectSizeSelect = document.getElementById('select-size');
const selectColorSelect = document.getElementById('select-color');
const resultSelect = document.getElementById('resultSelect');
const coloredSelect = document.getElementById('coloringSelect');

const textareaVariantSelect = document.getElementById('textarea-variant');
const textareaSizeSelect = document.getElementById('textarea-size');
const textareaColorSelect = document.getElementById('textarea-color');
const resultTextarea = document.getElementById('resultTextarea');
const coloredTextarea = document.getElementById('coloringTextarea');

const allVariant = [searchVariantSelect, buttonVariantSelect, selectVariantSelect, textareaVariantSelect];
const allSize = [searchSizeSelect, buttonSizeSelect, selectSizeSelect, textareaSizeSelect];
const allColor = [searchColorSelect, buttonColorSelect, selectColorSelect, textareaColorSelect];
const allResult = [resultSearch, resultButton, resultSelect, resultTextarea];
const allParent = [coloredSearch, coloredButton, coloredSelect, coloredTextarea];
const allDisabled = ['searchDisabled', 'buttonDisabled', 'selectDisabled', 'textareaDisabled'];
const allDisabledConst = [searchDisabled, buttonDisabled, selectDisabled, textareaDisabled];
const allCode = ['codeSnippetSearch', 'codeSnippetButton', 'codeSnippetSelect', 'codeSnippetTextarea'];

function update(p) {
    const selectedVariant = allVariant[p].value;
    const selectedSize = allSize[p].value;
    const selectedColor = allColor[p].value;
    allResult[p].className = `${selectedVariant} ${selectedSize}`;
    allParent[p].className = `${selectedColor}`;
}

update(parameter);

function disabledFunc(p) {
    var checkBox = document.getElementById(allDisabled[p]);

    if (checkBox.checked == true) {
        allResult[p].setAttribute('disabled', '');
    } else {
        allResult[p].removeAttribute('disabled');
    }
}

let codeStringSearch = ""; 
let codeStringButton = "";
let codeStringSelect = "";
let codeStringTextarea = "";

function applyClasses(p) {
    const codeSnippet = document.getElementById(allCode[p]);
    const resultClasses = Array.from(allResult[p].classList);
    const parentClasses = Array.from(allParent[p].classList);
    var checkBox = document.getElementById(allDisabled[p]);
    var strDisabled = '';
    if (checkBox.checked == true) {
        strDisabled = 'disabled';
    }
    if (p === 0) {
        codeStringSearch = `<div id="coloringSearch" class="${parentClasses.join(' ')}"><input ${strDisabled} id="resultSearch" class="${resultClasses.join(' ')}" type="search" placeholder="Please enter text"></div>`;
        codeSnippet.textContent = codeStringSearch;
    } else if (p === 1) {
        codeStringButton = `<div id="coloringButton" class="${parentClasses.join(' ')}"><button ${strDisabled} id="resultButton" class="${resultClasses.join(' ')}" type="button">Button</button></div>`;
        codeSnippet.textContent = codeStringButton;
    } else if (p === 2) {
        codeStringSelect = `<div id="coloringSelect" class="${parentClasses.join(' ')}"><select ${strDisabled} id="resultSelect" class="${resultClasses.join(' ')}" ></select></div>`;
        codeSnippet.textContent = codeStringSelect;
    } else if (p == 3) {
        codeStringTextarea = `<div id="coloringTextarea" class="${parentClasses.join(' ')}"><textarea ${strDisabled} id="resultTextarea" class="${resultClasses.join(' ')}" placeholder="Enter text"></textarea></div>`
        codeSnippet.textContent = codeStringTextarea;
    }
}

function copyCode (p) {
    if (p == 0) {navigator.clipboard.writeText(codeStringSearch);}
    else if (p == 1) {navigator.clipboard.writeText(codeStringButton);}
    else if (p == 2) {navigator.clipboard.writeText(codeStringSelect);}
    else if (p == 3) {navigator.clipboard.writeText(codeStringTextarea);}
}

applyClasses(parameter);

var checkBox = document.getElementById(allDisabled[parameter]);

allVariant.forEach(variant => {
    variant.addEventListener('change', function () {
        update(allVariant.indexOf(variant))
    });
    variant.addEventListener('change', function () {
        applyClasses(allVariant.indexOf(variant))
    });
});
allSize.forEach(size => {
    size.addEventListener('change', function () {
        update(allSize.indexOf(size))
    });
    size.addEventListener('change', function () {
        applyClasses(allSize.indexOf(size))
    });
});
allColor.forEach(color => {
    color.addEventListener('change', function () {
        update(allColor.indexOf(color))
    });
    color.addEventListener('change', function () {
        applyClasses(allColor.indexOf(color))
    });
});
allDisabledConst.forEach(dis => {
    dis.addEventListener('change', function () {
        applyClasses(allDisabledConst.indexOf(dis))
    });
});


  /*function refresh() {
    selectTags = document.getElementsByTagName("select");

    for(var i = 0; i < selectTags.length; i++) {
      selectTags[i].selectedIndex = 0;
    }
  }*/
