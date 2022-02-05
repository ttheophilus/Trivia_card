$(document).ready(() => {
    $('.hint-box').on('click', () => {
        $('.hint').slideToggle(600);
    });
    $('.wrong-answer-one').on('click', () => {
        $('.wrong-text-one').fadeOut('slow');
        $('.frown').show();
    });
    $('.wrong-answer-two').on('click', () => {
        $('.wrong-text-two').fadeOut(500);
        $('.frown').show();
    });
    $('.wrong-answer-three').on('click', () => {
        $('.wrong-text-three').fadeOut('fast');
        $('.frown').show();
    });
    $('.correct-answer').on('click', () => {
        $('.frown').hide();
        $('.smiley').show();
        $('.wrong-text-one').fadeOut('600');
        $('.wrong-text-two').fadeOut('slow');
        $('.wrong-text-three').fadeOut('fast');
    });
    $('.reset-quiz').on('click', () => {
        $('.wrong-text-one').hide();
        $('.wrong-text-two').hide();
        $('.wrong-text-three').hide();
    });
    $('.correct.answer').on('click', () => {
        $('.new-question').show();
    })
});