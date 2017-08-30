(function ($, ckeditor) {
	$(function() {
		$('form').find('.submit').click(function(event) {
			event.preventDefault();
			var title = $('input[name="title"]').val(),
				hook = $('textarea[name="hook"]').val(),
				content = ckeditor.instances.content.getData(),
				author = $('input[name="author"]').val(),
				picture = $('input[name="picture"]'),
				tags = $('select').val(),
				error = false,
				errorMessage = '';

			if (title.trim() === '') {
				error = true;
				errorMessage = "Le titre est obligatoire.";
			} else if (hook.trim() === '') {
				error = true;
				errorMessage = "Le chapô est obligatoire.";
			} else if (content.length === 0) {
				error = true;
				errorMessage = "Le contenu est obligatoire.";
			} else if (author.trim() === '') {
				error = true;
				errorMessage = "L\'auteur est obligatoire.";
			} else if (picture.get(0).files.length === 0 && picture.hasClass('required')) {
				error = true;
				errorMessage = "L'image est obligatoire.";
			} else if (tags !== null && tags.length === 0) {
				error = true;
				errorMessage = "L'article doit être associé à un tag minimum.";
			}

			if (!error) {
				$('form').submit();
			} else {
				$('.flash').html('<div id="alert" class="alert alert-error">' + errorMessage + '</div>');
				$('.flash #alert').addClass('shown').delay(5000).queue(function(){
				    $(this).removeClass('shown').dequeue();
				});
			}
		});
	});
})(jQuery, CKEDITOR);