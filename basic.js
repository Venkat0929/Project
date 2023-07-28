//  function generateOTP() {
//     var otp = Math.floor(100 + Math.random() * 900); // Generate a random 4-digit OTP
//     document.getElementById("otp").textContent = otp; // Display the OTP on the page
//   }

//------------------------------------    Another Method
function generateOTP() {
  let otpshow = document.getElementById('otp');
  let digits = '0123456789';
  let otp = '';

  for(i=0 ; i<4 ; i++){
    otp += digits[Math.floor(Math.random() * 10)];
  }

  otpshow.innerHTML = '<span></span>';
  setTimeout(() => {
    otpshow.innerHTML = otp;
  },1000);

}