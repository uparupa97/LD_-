const darkmodeEl = document.querySelector('.form-check-input');
const htmldarkEl = document.querySelector('html');
const darktextEl = document.querySelector('.form-check-label')

const darkmodefn = () => { 
    if (darkmodeEl.checked) {
        htmldarkEl.dataset.bsTheme = 'dark';
        darktextEl.innerText = "Light?";
    } else {htmldarkEl.dataset.bsTheme = 'light';
        darktextEl.innerText = "Dark?";
    }}; 


darkmodeEl.addEventListener('change', darkmodefn)






document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지
    
    // 입력된 이메일과 비밀번호를 받아오기
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // 로그인 정보 출력 (실제론 서버로 전송해야 함)
    const message = "Logged in with Email: " + email + " and Password: " + password;
    document.getElementById('loginMessage').innerText = message;

    // 예시로 콘솔에 출력
    console.log("Email:", email);
    console.log("Password:", password);
  });