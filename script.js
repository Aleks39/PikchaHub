$('.bl').click(function () {
  $(this).toggleClass('ui-pro');
  var items = $('.ui-pro');

  if (items.length > 0) {
	$('#but').attr('disabled', false);
  } else {
	$('#but').attr('disabled', true);
  }
});


$('#href').click(function () {
  var $elements = $('.bl');
  var $target = $('.digits');

  var sort = $elements.sort(function (a, b) {
	var an = $(a).text(),
	  bn = $(b).text();

	if (an && bn) {
	  return an.toUpperCase().localeCompare(bn.toUpperCase());
	}

	return 0;
  });
  console.log(sort);
  $target.html('');
  $target.append(sort);
});

$('#href2').click(function () {
  var $elements = $('.bl');
  var $target = $('.digits');

  var sort = $elements.sort(function (a, b) {
	var an = $(a).text(),
	  bn = $(b).text();

	if (an && bn) {
	  return bn.toUpperCase().localeCompare(an.toUpperCase());
	}

	return 0;
  });
  console.log(sort);
  $target.html('');
  $target.append(sort);
});

$('#but').click(function (event) {
  var items = $('.ui-pro');
  items.remove();
  // $(this).attr('disabled', true);
  event.currentTarget.disabled = true;
});

$('.display-method-2').click(function () {
  $('.digits').toggleClass('digits2x div');
});

$('.display-method-1').click(function () {
  $('.digits').removeClass('digits2x div');
  $('.digits').toggleClass('digits3x div');
});

$("#block").sortable({
	placeholder: "ui-state-highlight"
});
$("#block").disableSelection();

