 let imgBox = document.getElementById("imgBox");
 let qrImage = document.getElementById("qrImage");
 let qrText = document.getElementById("qrText");
 let reset = document.getElementById("resetBtn");

 function generateQR(){
     if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
     }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrImage.classList.remove('error');
        },1000);
     }
 }

 
 const resetBtn = () =>{

    qrText.value = ""; // Clear the text input
    qrImage.src = ""; // Clear the QR code image
    imgBox.classList.remove("show-img"); // Hide the image box
    qrText.classList.remove('error'); // Remove any error styling
    
 };

 //resetBtn.addEventListener("click", reset);
 reset.addEventListener("click", resetBtn);


//  var icon = document.getElementById("icon");
//  icon.onclick = function(){
//    document.body.classList.toggle("dark-theme");
//    if(document.body.classList.toggle("dark-theme")){
//       icon.src = "sun.png";
//    }else{
//       icon.src = "moon.png";
//    }
//  }


var icon = document.getElementById("icon");
icon.onclick = function() {
    // Toggle the dark-theme class and store the result
    var isDarkTheme = document.body.classList.toggle("dark-theme");
    
    // Update the icon based on the theme
    if (isDarkTheme) {
        icon.src = "sun.png";  // Show sun icon in dark theme
    } else {
        icon.src = "moon.png";  // Show moon icon in light theme
    }
};