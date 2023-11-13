document.body.style.backgroundColor = '#e6e6fa';
document.body.style.color = '#fffff';

const loginForm = document.querySelector('.login-form');
function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  // const {
  //   elements: { email, password },
  // } = e.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    e.currentTarget.reset();
  }
}
