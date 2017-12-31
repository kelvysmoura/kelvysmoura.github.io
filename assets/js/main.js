$(document).ready(function(){

	var siteUrl = 'https://kelvysmoura.github.io/';

/**
 ************************************************************************************** COMPONENTS
 */

/* _cards */
	$.getJSON('./components/cards.json', function(obj){

		for(var k in obj){
			var rows = obj[k];

			var title = '<h5 class="card-title">'+rows.cardTitle+'</h5>';
			
			var subTitle = '<h6 class="card-subtitle mb-2 text-muted">'+rows.cardSubTitle+'</h6>';
			
			var text = '<p class="card-text">'+rows.cardText+'</p><br>';
			
			var link = '';

			if(rows.cardLink != undefined){
				cl = rows.cardLink;

				for(var c in cl){
					
					link += '<a href="'+cl[c]+'" class="card-link">'+c+'</a>';
				}
			}

			var cardContentFinal = '<div class="card-body">'+title+subTitle+text+link+'</div>';

			$('[cards-component="'+k+'"]').html(cardContentFinal);
		}
	});

});
