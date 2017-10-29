
var root = $('#root');
root.html('');

var form = $('<form></form>');
form.addClass('toast');
var name_input = $('<input></input>');
name_input.attr('type', 'text');
name_input.attr('id', 'nickname');
name_input.attr('placeholder', 'Please type your name here');
form.append(name_input);
root.append(form);

var button_area = $('<div></div>');
button_area.addClass('button-area');
var join_button = $('<button></button>');
join_button.attr('type', 'button');
join_button.html('JOIN');
button_area.append(join_button);
root.append(button_area);

join_button.click(()=>{
	var nickname = name_input.val();
	if (nickname.length <= 0) {
		makeToast('Please type your nickname.');
		return;
	}

	config.nickname = nickname;
	server.request(net.RequestUserId);
});
