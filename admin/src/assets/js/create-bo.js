$(document).ready(function () {
  let userInfo = localStorage.getItem('userInfo');
  userInfo = JSON.parse(userInfo);
  let token = userInfo.token.token;

  $('#create-bo').submit (function (e) {
    e.preventDefault();
    const name = $('#name').val();
    const phone = $('#phone').val();
    const image_url = $('#image-url').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const repassword = $('#repassword').val();

    $.ajax({
      url: `${HOST_NAME}/v1/bus-operator/create`,
      type: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      dataType: 'json',
      data: JSON.stringify({
        name,
        phone,
        image_url,
      }),
      success: function (data) {
        // window.location.href = `/pages/bus-operator/`;
        console.log('data', data);
      },
      error: function (error) {
        console.log('error', error);
      },
    });

    $.ajax({
      url: `${HOST_NAME}/v1/bus-operator/createAcc`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      dataType: 'json',
      data: JSON.stringify({
        email: email,
        password: password,
        repassword: repassword,
      }),
      success: function (data) {
        window.location.href = `/pages/bus-operator/`;
        console.log('bd', data);
      },
      error: function (error) {
        console.log('er', error);
      },
    });
    console.log(name, phone, image_url, email, password, repassword);
  });
});
