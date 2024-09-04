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

document.getElementById('mainContent').style.display = 'none';


    // 로그인 폼 처리
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출 방지
  
        // 사용자 입력값 가져오기
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
        // 입력된 정보가 미리 정의된 정보와 일치하는지 확인
        if (email === validEmail && password === validPassword) {
          // 로그인 성공 시 로그인 섹션 숨기기
          document.getElementById('loginSection').style.display = 'none';
  
          // 다음 섹션 표시
          const nextSection = document.getElementById('nextSection');
          nextSection.style.display = 'flex';
  
          // 다음 섹션 메시지 설정
          
          const nextMessage = document.getElementById('nextMessage');
          nextMessage.innerText = `${email}님, 독서기록을 남기실까요?`;
          document.getElementById('mainContent').style.display = 'block';
        } else {
          // 로그인 실패 시 오류 메시지 표시
          const errorMessageDiv = document.getElementById('errorMessage');
          errorMessageDiv.innerText = "로그인 정보가 잘못되었습니다. 다시 시도해주세요.";
          errorMessageDiv.style.display = 'block';
          document.getElementById('mainContent').style.display = 'none';

        }
      });


        // 로컬 스토리지에 저장된 책 목록 불러오기
  window.onload = function() {
    const storedBooks = JSON.parse(localStorage.getItem('bookList')) || [];
    storedBooks.forEach(book => {
      createBookCard(book);
    });
  };

  // 메모 모달 열기
  function openMemo(button) {
    const memoModal = button.closest('.card-body').querySelector('.memoModal');
    memoModal.style.display = 'block';
  }

  // 메모 모달 닫기
  function closeMemo(button) {
    const memoModal = button.closest('.memoModal');
    memoModal.style.display = 'none';
  }

  // 새 책 추가
  function addBook() {
    const bookImage = document.getElementById('bookImage').value;
    const bookTitle = document.getElementById('bookTitle').value;
    const bookSource = document.getElementById('bookSource').value;
    const bookCategory = document.getElementById('bookCategory').value;
    const bookMemo = document.getElementById('bookMemo').value;

    const newBook = {
      image: bookImage,
      title: bookTitle,
      source: bookSource,
      category: bookCategory,
      memo: bookMemo
    };

    // 책 카드 생성 및 추가
    createBookCard(newBook);

    // 로컬 스토리지에 책 저장
    const storedBooks = JSON.parse(localStorage.getItem('bookList')) || [];
    storedBooks.push(newBook);
    localStorage.setItem('bookList', JSON.stringify(storedBooks));

    // 책 추가 모달 닫기
    var addBookModal = new bootstrap.Modal(document.getElementById('addBookModal'));
    addBookModal.hide();
    document.getElementById('newBookForm').reset();
  }

  // 새 책 카드 생성
  function createBookCard(book) {
    const bookList = document.getElementById('bookList');

    const newCol = document.createElement('div');
    newCol.className = 'col-6 col-sm-3 book-card';
    newCol.innerHTML = `
      <div class="card" style="width: 13rem;">
        <img src="${book.image}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">${book.source}</p>
          <p class="card-text">${book.category}</p>
          <button class="btn btn-primary" onclick="openMemo(this)">내용 메모</button>
          <div class="memoModal" style="display: none;">
            <div class="memo-content">
              <h5>메모 작성</h5>
              <textarea rows="4" cols="50" placeholder="메모를 입력하세요...">${book.memo}</textarea><br>
              <button class="btn btn-secondary" onclick="closeMemo(this)">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // 새로운 책 카드를 추가
    bookList.appendChild(newCol);
  }