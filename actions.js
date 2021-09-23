applyButton.onclick = function() {

    let bgColor = document.getElementById("bgColorInput").value;
    let fontColor = document.getElementById("fontColorInput").value;
    let fontSize = document.getElementById("fontSizeInput").value;
    let fontWeight = document.getElementById("fontWeightInput").value;
    let padding = document.getElementById("paddingInput").value;
    let borderRadius = document.getElementById("borderRadiusInput").value;
    let borderWidth = document.getElementById("borderWidthInput").value;
    let textarea = document.getElementById("text");
    let customButton = document.getElementById("customButton");

    
    customButton.style.backgroundColor = bgColor;
    customButton.style.color = fontColor;
    customButton.style.fontSize = fontSize + "px";
    customButton.style.fontWeight = fontWeight;
    customButton.style.padding = padding + "px";
    customButton.style.borderRadius = borderRadius + "px";
    customButton.style.borderWidth = borderWidth + "px";
    textarea.textContent = "button{background-color:" + bgColor + ";color:" + fontColor + ";font-size:"+ fontSize + "px;"
                            +"font-weight:" + fontWeight + ";padding:" + padding + "px;border-radius:" + borderRadius + "px;"
                            +"border-width:" + borderWidth + "px;}"



    





}