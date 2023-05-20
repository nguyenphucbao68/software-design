$(document).ready(function () {
  const MAX_LIMIT = 100;
  const OFFSET = 0;

  let userInfo = localStorage.getItem("userInfo");
  userInfo = JSON.parse(userInfo);
  let token = userInfo.token.token;

  /**
   * Get id from url
   */
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  /**
   * Update bus
   */

  $("#Clone-Button").click(function (e) {
    e.preventDefault();

    const start_time = new Date($("#Start-Time").val());
    const end_time = new Date($("#End-Time").val());
    
    start = [
      start_time.getFullYear(),
      ('0' + (start_time.getMonth() + 1)).slice(-2),
      ('0' + start_time.getDate()).slice(-2)
    ].join('/');

    end = [
      end_time.getFullYear(),
      ('0' + (end_time.getMonth() + 1)).slice(-2),
      ('0' + end_time.getDate()).slice(-2)
    ].join('/');

    const data = JSON.stringify({
      id: id,
      start_time: start,
      end_time: end,
    });

    $.ajax(`${HOST_NAME}/v1/bus/clone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + token,
      },
      data: data,
      success: function (data) {
        console.log("data", data);
        window.location.href = `/pages/bus`;
      },
      error: function (error) {
        console.log("error", error);
      },
    });
  });
});
