const textarea = document.querySelector('textarea');
fileNameInput = document.querySelector('.file-name input');
selectMenu = document.querySelector('.save-as select');
saveBtn = document.querySelector('.save-btn');

selectMenu.addEventListener('click', () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
})

saveBtn.addEventListener('click', () => {
    const blob = new Blob([textarea.value], { type: selectMenu.value })
    //create a url that represents the object passed
    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement('a');//creating an <a> tag
    link.download = fileNameInput.value;
    link.href = fileUrl;//passing fileUrl as href value of the link
    link.click();//clicking the link so the file can download
})
