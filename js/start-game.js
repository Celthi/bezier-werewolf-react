
role_box.html('<h3>Your Role</h3>');
var user_role = $('<div></div>');
role_box.append(user_role);

function updateRole(){
	user_role.html('');
	var role_card = $('<div class="role"></div>');
	role_card.addClass(config.user.role);
	user_role.append(role_card);
}

extra_card_box.show();

button_area.html('');
var confirm_button = $('<button type="button">CONFIRM</button>');
button_area.append(confirm_button);

var infomation_box = $('<div class="infomation-box"></div>');
var current_role = $('<div class="current-role">Current Phase<span id="current-role"></span></div>');
infomation_box.append(current_role);
var message_box = $('<div id="message-box" class="message-box"></div>');
infomation_box.append(message_box);
root.append(infomation_box);

confirm_button.click(()=>{
});