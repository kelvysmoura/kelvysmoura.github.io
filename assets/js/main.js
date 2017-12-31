$(document).ready(function(){

	var siteUrl = 'https://kelvysmoura.github.io/';

/**
 ************************************************************************************** COMPONENTS
 */

/* _cards */
	$.getJSON(siteUrl+'components/cards.json', function(obj){

		for(var k in obj){
			var rows = obj[k];

			var title = '<h5 class="card-title">'+rows.cardTitle+'</h5>';
			
			var subTitle = '<h6 class="card-subtitle mb-2 text-muted">'+rows.cardSubTitle+'</h6>';
			
			var text = '<p class="card-text">'+rows.cardText+'</p><br>';
			
			var link = '';

			if(rows.cardLink != undefined){
				itens = rows.cardLink;
				for(var i in itens){
					var tagA = '<a ';
					var item = itens[i];
					
					if(item.siteUrl == true && item.siteUrl != undefined){
						tagA += 'href="'+siteUrl+item.href+'" ';
					}
					else{
						tagA += 'href="'+item.href+'" ';
					}

					if(item.css != undefined){
						tagA += 'class="card-link '+item.css+'" ';
					}
					else{
						tagA += 'class="card-link" ';	
					}

					if(item.attr != undefined){
						tagA += item.attr+' ';
					}

					if(item.id != undefined){
						tagA += 'id="'+item.id+'" ';
					}
					
					link += tagA+'>'+i+'</a>';
				}
			}

			console.log(link);

			var cardContentFinal = '<div class="card-body">'+title+subTitle+text+link+'</div>';

			$('[cards-component="'+k+'"]').html(cardContentFinal);
		}
	});

});
