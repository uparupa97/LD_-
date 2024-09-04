//dark mode 
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


const validEmail = "uparupa97@icloud.com";
const validPassword = "1234";

    // 로그인 폼 처리
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출 방지
  
        // 사용자 입력값 가져오기
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
  
        // 입력된 정보가 미리 정의된 정보와 일치하는지 확인
        if (email === validEmail && password === validPassword) {
          // 로그인 성공 시 로그인 섹션 숨기기
          document.getElementById('loginSection').style.display = 'none';
  
          // 다음 섹션 표시
          var nextSection = document.getElementById('nextSection');
          nextSection.style.display = 'flex';
  
          // 다음 섹션 메시지 설정
          
          setTimeout(function() {
            nextSection.style.animation = 'slideDown 1s ease-out forwards';
          }, 100); // 약간의 지연을 두고 애니메이션 실행
          var nextMessage = document.getElementById('nextMessage');
          nextMessage.innerText = email + "님, 독서기록을 남기실까요?";
        } else {
          // 로그인 실패 시 오류 메시지 표시
          var errorMessageDiv = document.getElementById('errorMessage');
          errorMessageDiv.innerText = "로그인 정보가 잘못되었습니다. 다시 시도해주세요.";
          errorMessageDiv.style.display = 'block';
        }
      });

      