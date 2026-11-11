const form = document.querySelector('#guestbook-form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const notice = document.querySelector('#notice');
const list = document.querySelector('#list');
const count = document.querySelector('#count');

let items = ['student01: 안녕하세요', 'student02: 고맙습니다', 'student03: 반갑습니다'];

function clearNotice() {
    notice.textContent = '';
}

function showList() {
    list.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        const li = document.createElement('li');
        li.textContent = items[i];

        const removeButton = document.createElement('button');
        removeButton.textContent = '삭제';
        removeButton.addEventListener('click', function () {
            items.splice(i, 1);
            showList();
        });

        li.append(removeButton);
        list.append(li);
    }

    count.textContent = `${items.length}개`;
    console.log('그린 뒤 items :', items);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '') {
        notice.textContent = '이름을 입력하세요.';
        nameInput.focus();
        return;
    }

    if (message === '') {
        notice.textContent = '글을 입력하세요.';
        messageInput.focus();
        return;
    }

    clearNotice();
    items.push(`${name}: ${message}`);
    showList();
    form.reset();
    nameInput.focus();
});

nameInput.addEventListener('input', clearNotice);
messageInput.addEventListener('input', clearNotice);

showList();