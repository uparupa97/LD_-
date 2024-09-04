document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지
    
    // 입력된 이메일과 비밀번호를 받아오기
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // 로그인 정보 출력 (실제론 서버로 전송해야 함)
    var message = "Logged in with Email: " + email + " and Password: " + password;
    document.getElementById('loginMessage').innerText = message;

    // 예시로 콘솔에 출력
    console.log("Email:", email);
    console.log("Password:", password);
  });