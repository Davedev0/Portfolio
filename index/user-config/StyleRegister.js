document.getElementById('show-register').addEventListener('click', () => {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('register-container').style.display = 'block';
  document.getElementById('login-paragraph').style.display = 'none';
  document.getElementById('register-paragraph').style.display = 'block';
  document.getElementById('login-header').style.display = 'none';
  document.getElementById('register-header').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', () => {
  document.getElementById('login-container').style.display = 'block';
  document.getElementById('register-container').style.display = 'none';
  document.getElementById('login-paragraph').style.display = 'block';
  document.getElementById('register-paragraph').style.display = 'none';
  document.getElementById('login-header').style.display = 'block';
  document.getElementById('register-header').style.display = 'none';
});