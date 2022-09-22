const fileInput = document.querySelector("input"),
    downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();//this prevents the form from submitting
    downloadBtn.innerText = 'Downloading file...'
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    //fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        //create a url for the passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        //passing file last name and extension as the download value of <a> tag
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);//adding <a> tag inside body
        aTag.click();//clicking the <a> tag so the file can download
        aTag.remove();//removing the <a> tag once file is downloaded
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = 'Download file'
    }).catch(() => {
        downloadBtn.innerText = 'Download file'
        alert('Failed to download file!');
    });
}