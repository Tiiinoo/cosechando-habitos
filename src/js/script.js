let seeMore = $('.seeMore');
let goBack = $('.goBack');
let tipCardsContainer2 = $('#tipCardsContainer2');

let showing = seeMore

seeMore.click(function() {
  $(tipCardsContainer2).show(1000, function() {
		$(seeMore).hide(1000);
		showing = tipCardsContainer2
	})
})


goBack.click(function() {
  $(tipCardsContainer2).hide(1000, function() {
		$(seeMore).show(1000);
		showing = seeMoreDiv
	})
})