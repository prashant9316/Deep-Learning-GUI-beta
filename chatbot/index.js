var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function(e) {
  
  e.preventDefault();
  
  var message = $("#user-input").val();
  
  outputArea.append(`<div class="bot-message"><div class="us-message">${message}</div></div>`);
    /*<div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);*/
  
  setTimeout(function() {
    outputArea.append(`
      <div class='user-message'>
        <div class='reply-message'>
          yo man, what's up?
        </div>
      </div>
    `);
  }, 250);
  
  $("#user-input").val("");
  
});