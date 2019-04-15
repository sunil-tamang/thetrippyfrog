var app = window.app || {},
business_paypal = 'jondoe@gmail.com'; // here goes your paypal email

(function($){
	'use strict';

	//no conflict con underscores

	app.init = function(){
		//totalItems totalAmount
		var total = 0,
		items = 0

		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;

		if(undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0){
			_.forEach(cart.items, function(n, key) {
			   items = (items + n.cant)
			   total = total  + (n.cant * n.price)
			});
		}
		$('.totalItems').text(items) 	// Custom Total Items
		$('#totalItems').text(items)
		$('.totalAmount').text('$ '+total+ ' INR')

	}

	app.createProducts = function(productName){

		var products = [
			{
				id : 1,
				name : '5 K.M. in 30 Minutes',
				img : 'assets/css/thumbs/rafting_num/rafting1.jpg',
				oldprice: 800.00,
				price : 499.00,
				prodType : 'rafting',
				stock : 4,
				location: 'Raison'
			},
			{
				id : 2,
				name : '8 K.M. in 50 Minutes',
				img : 'assets/css/thumbs/rafting_num/rafting2.jpg',
				oldprice: 1000.00,
				price : 699.00,
				prodType : 'rafting',
				stock : 2,
				location: 'Babeli'
			},
			{
				id : 3,
				name : '6400 FT. in 10 Minutes',
				img : 'assets/css/thumbs/para_num/paragliding1.jpg',
				oldprice: 2799.00,
				price : 1899.00,
				prodType : 'paragliding',
				stock : 1,
				location: 'Dobhi'
			},
			{
				id : 4,
				name : '8000 FT. in 20 Minutes',
				img : 'assets/css/thumbs/para_num/paragliding2.jpg',
				oldprice: 3200.00,
				price : 2099.00,
				prodType : 'paragliding',
				stock : 1,
				location: 'Bir-Billing'
			},
			{
				id : 5,
				name : 'Hampta Pass Trek',
				img : 'assets/css/images/treks/hampta_min.jpg',
				price : 7000.00,
				prodType : 'trekking',
				descShort : 'Hampta Pass the way to Heaven, which is Spiti Valley&#39;s one of the most visited trekking place by the trekker\'s around the world....',
				descPartOne : 'Hampta Pass trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and special one climbing out across the lush green valleys of Kullu to reach the overhanging mountains. From the top, you will witness the magnificent view of a different world below, the beautiful yet deserted Lahaul. The panoramic sweep of the valley from the summit will be a sight that will not leave you forever.',
				descPartTwo : 'An integral part of Manali’s topography, which is India’s favourite adventure zone, this trek is voted amongst the easiest of trails and most attractive to beginners. An exciting activity, being around Hampta Pass opens a whole new beautiful world. Coupled with a stopover at the eerie and placid Chandra Tal, this journey is replete with adventure and scenic moments.',
				stock : 1,
				days : 5,
				nights: 4,
				urlName : 'hampta-pass-trek'
			},
			{
				id : 6,
				name : 'Lamadugh Trek',
				img : 'assets/css/images/treks/lamadugh_min.jpg',
				price : 4999.00,
				prodType : 'trekking',
				descShort : '  LamaDugh is The Perfect Location For Chill Out And Be Out Of The Hustle Bustle Of Crowded Manali Town . This Place Is 7Km Above Manali And Can be Easily Reached ....',
				descPartOne : '   LamaDugh is The Perfect Location For Chill Out And Be Out Of The Hustle Bustle Of Crowded Manali Town . This Place Is 7Km Above Manali And Can be Easily Reached ...',
				descPartTwo : 'An integral part of Manali’s topography, which is India’s favourite adventure zone, this trek is voted amongst the easiest of trails and most attractive to beginners. An exciting activity, being around Hampta Pass opens a whole new beautiful world. Coupled with a stopover at the eerie and placid Chandra Tal, this journey is replete with adventure and scenic moments.',
				stock : 1,
				days : 3,
				nights: 2,
				urlName : 'lamadugh-trek'
			},
			{
				id : 7,
				name : 'Bhrigu Lake Trek',
				img : 'assets/css/images/treks/bhrigu_min.jpg',
				price : 6000.00,
				prodType : 'trekking',
				descShort : 'Brighu Lake Is An High Altitude Alpine Lake Near Manali Town At Altitude Of 14,009 Ft .It Is One Of The Most Beautiful Lake Named After Saint Maharishi Bhrigu One Of The Seven Great Sages Of Hindu Puranas .',
				descPartOne : 'Brighu Lake Is An High Altitude Alpine Lake Near Manali Town At Altitude Of 14,009 Ft .It Is One Of The Most Beautiful Lake Named After Saint Maharishi Bhrigu One Of The Seven Great Sages Of Hindu Puranas ',
				descPartTwo : 'Brighu Lake Provides The Panaromic View Of Summits Like FriendShip Peak  Hanuman Tibaa And DhaulaDhar Range . It is A 3 Day Easy Trek To The Beautiul Lake Lying On Top Of Himalayas ',
				stock : 1,
				days : 3,
				nights: 2,
				urlName : 'bhrigu-lake-trek'
			},
			{
				id : 8,
				name : 'Mantalai Lake Trek',
				img : 'assets/css/images/treks/wild_min.jpg',
				price : 36000.00,
				prodType : 'trekking',
				descShort : 'Mantalai Lake The Source Of Parvati River Is The Holy Lake Situated At Altitude Of 13,500 Ft . The Lake Is Situated Deep Inside Parvati Valley In The Middle Of White Snowy Mountains ...',
				descPartOne : 'Mantalai Lake The Source Of Parvati River Is The Holy Lake Situated At Altitude Of 13,500 Ft . The Lake Is Situated Deep Inside Parvati Valley In The Middle Of White Snowy Mountains .',
				descPartTwo : 'Mantalai Lake The Source Of Parvati River Is The Holy Lake Situated At Altitude Of 13,500 Ft . The Lake Is Situated Deep Inside Parvati Valley In The Middle Of White Snowy Mountains .',
				stock : 1,
				days : 7,
				nights: 6,
				urlName : 'mantalai-lake-trek'
			},
			{
				id : 8,
				name : 'Kufri Trek',
				img : 'assets/css/images/treks/kufri_min.jpg',
				price : 5000.00,
				prodType : 'trekking',
				descShort : 'Kufri One Of The Most Beautiful And Virgin Place In the Lap Of Himalayas . Kufri Trek Was Also Our First Ever Trek 5 Friends On A Quest To Discover The Nature Beauty Which Lies At Top Of The Mountain ....',
				descPartOne : 'Kufri One Of The Most Beautiful And Virgin Place In the Lap Of Himalayas . Kufri Trek Was Also Our First Ever Trek 5 Friends On A Quest To Discover The Natures Beauty Which Lies At Top Of The Mountain ..',
				descPartTwo : 'Kufri Trek Is One Of The Best Short Trek Around Kullu Manali Valley With Breathtaking View . It Is Also The Best Place For Camping With 2 And Half Hour Short Trail Gives the View Of Parvati Valley And DhaulaDhar Range .',
				stock : 1,
				days : 2,
				nights: 1,
				urlName : 'kufri-trek'
			},

			{
				id : 9,
				name : 'Beas Kund Trek',
				img : 'assets/css/images/treks/beas_min.jpg',
				price : 6500.00,
				prodType : 'trekking',
				descShort : 'Beas Kund Is The Origin Of Mighty Beas River Its A Beautiful Glacial Lake Forming The Beas River Which Gives Life To Millions Of People In the Himalayas ...',
				descPartOne : 'Beas Kund Is The Origin Of Mighty Beas River Its A Beautiful Glacial Lake Forming The Beas River Which Gives Life To Millions Of People In the Himalayas ...',
				descPartTwo : 'An integral part of Manali’s topography, which is India’s favourite adventure zone, this trek is voted amongst the easiest of trails and most attractive to beginners. An exciting activity, being around Hampta Pass opens a whole new beautiful world. Coupled with a stopover at the eerie and placid Chandra Tal, this journey is replete with adventure and scenic moments.',
				stock : 1,
				days : 3,
				nights: 2,
				urlName : 'beas-kund-trek'
			},

			{
					id : 10,
					name : 'Pin Parvati Trek',
					img : 'assets/css/images/treks/pin_parvati_min.jpg',
					price : 35000.00,
					prodType : 'trekking',
					descShort : 'Pin Paravati Pass Is The Mountain Pass Connect The Parvati Valley With Pin Valley Of Spiti. It Is Located At Altitude Of 17,500 Ft...',
					descPartOne : 'Pin Paravati Pass Is The Mountain Pass Connect The Parvati Valley With Pin Valley Of Spiti. It Is Located At Altitude Of 17,500 Ft...',
					descPartTwo : 'Pin Paravati Pass Is The Mountain Pass Connect The Parvati Valley With Pin Valley Of Spiti. It Is Located At Altitude Of 17,500 Ft..',
					stock : 1,
					days : 11,
					nights: 10,
					urlName : 'pin-parvati-trek'
				},
				{
					id : 11,
					name : 'Fungni Top Trek',
					img : 'assets/css/images/treks/fungni_min.jpg',
					price : 6500.00,
					prodType : 'trekking',
					descShort : 'Fungni Top Is One Of The Most beautiful virgin Trek Only Few have explored. Locals Have Named This Mountain After Goddess Fungani who They Believe Resides At The Top Of This Mountain.',
					descPartOne : 'Fungni Top Is One Of The Most beautiful virgin Trek Only Few have explored. Locals Have Named This Mountain After Goddess Fungani who They Believe Resides At The Top Of This Mountain.',
					descPartTwo : 'Fungni Top Is One Of The Most beautiful virgin Trek Only Few have explored. Locals Have Named This Mountain After Goddess Fungani who They Believe Resides At The Top Of This Mountain.',
					stock : 1,
					days : 3,
					nights: 2,
					urlName : 'fungni-top-trek'
				},
				{
					id : 12,
					name : 'Kais Dhar Trek',
					img : 'assets/css/images/treks/kais_dhar_min.jpg',
					price : 6500.00,
					prodType : 'trekking',
					descShort : ' kais Dhar An Extremly Beautiful Place, With Grassy Meadows And Densely Forested Mountains Just 10 Km From Kullu Town . It is One Of The Most Beautiful And Virgin Place In Kullu Manali Only Visited By Locals For Grazing Thier Cattles ...',
					descPartOne : ' kais Dhar An Extremly Beautiful Place, With Grassy Meadows And Densely Forested Mountains Just 10 Km From Kullu Town . It is One Of The Most Beautiful And Virgin Place In Kullu Manali Only Visited By Locals For Grazing Thier Cattles ...',
					descPartTwo : ' kais Dhar An Extremly Beautiful Place, With Grassy Meadows And Densely Forested Mountains Just 10 Km From Kullu Town . It is One Of The Most Beautiful And Virgin Place In Kullu Manali Only Visited By Locals For Grazing Thier Cattles ...',
					stock : 1,
					days : 3,
					nights: 2,
					urlName : 'kais-dhar-trek'
				},
				{
					id : 13,
					name : 'Malana Villae Trek',
					img : 'assets/css/images/treks/malana_min.jpg',
					price : 6500.00,
					prodType : 'trekking',
					descShort : 'Malana - The mysterious and beautiful ancient village located in the mountains of Parvati Valley, is famous for its unique culture and...',
					descPartOne : 'Malana - The mysterious and beautiful ancient village located in the mountains of Parvati Valley, is famous for its unique culture and the Marijuana it produces, popularly known as the  Malana Cream. Marijuana (or weed) can be used for medical purposes and can treat a number of different conditions such as posttraumatic stress disorder (PTSD, Nausea, Anorexia, Pain. It can also cure one of the deadly disease - Cancer. The purity of Marijuana it produces, has made it famous in all around the world.',
					descPartTwo : 'The villager&#39;s Of Malana are said to be the descendants of <a style="color:#40c279;font-weight: bold;" href="https://en.wikipedia.org/wiki/Alexander_the_Great" target="_blank">Alexander the Great</a>. The valley of Malana is over-shadowed by the <a style="color:#40c279;font-weight: bold;" href="{% link _treks/chandrakhani.html %}">Chandrakhani</a> And <a style="color:#40c279;font-weight: bold;" href="{% link _treks/deo-tibba-base-camp.html %}">Deo Tibba</a> Peaks.',
					stock : 1,
					days : 4,
					nights: 3,
					urlName : 'malana-village-trek'
			},
			{
				id : 14,
				name : 'Sar Pass Trek',
				img : 'assets/css/images/treks/sar_min.jpg',
				price : 9000.00,
				prodType : 'trekking',
				descShort : '',
				descPartOne : '',
				descPartTwo : '',
				stock : 1,
				days : 6,
				nights: 5,
				urlName : 'sar-pass-trek'
			},
			{
				id : 15,
				name : 'FriendShip Peak Trek',
				img : 'assets/css/images/treks/friendship-peak_min.jpg',
				price : 25000.00,
				prodType : 'trekking',
				descShort : 'The FriendShip Peak Is The Most Famous Summit For Trekking In Country At Altitude Of 17,200 Ft . It Is Located In The Pir Panjal Range Of Himachal Pradesh ',
				descPartOne : 'The FriendShip Peak Is The Most Famous Summit For Trekking In Country At Altitude Of 17,200 Ft . It Is Located In The Pir Panjal Range Of Himachal Pradesh ',
				descPartTwo : 'The FriendShip Peak Is The Most Famous Summit For Trekking In Country At Altitude Of 17,200 Ft . It Is Located In The Pir Panjal Range Of Himachal Pradesh ',
				stock : 1,
				days : 7,
				nights: 8,
				urlName : 'friendship-peak-trek'
			},
			{
				id : 16,
				name : 'Dehana Sar Lake Trek',
				img : 'assets/css/images/treks/dehana_sar_min.jpg',
				price : 6500.00,
				prodType : 'trekking',
				descShort : '',
				descPartOne : '',
				descPartTwo : '',
				stock : 1,
				days : 3,
				nights: 2,
				urlName : 'dehana-sar-lake-trek'
			},
			{
				id : 17,
				name : 'ChandraKhani Trek',
				img : 'assets/css/images/treks/chandrakhani_min.jpg',
				price : 6500.00,
				prodType : 'trekking',
				descShort : '.',
				descPartOne : '',
				descPartTwo : '',
				stock : 1,
				days : 3,
				nights: 2,
				urlName : 'chandrakhani-trek'
			},

			{
				id : 18,
				name : 'Deo Tibba Base Camp Trek',
				img : 'assets/css/images/treks/deo_tibba_min.jpg',
				price : 12000.00,
				prodType : 'trekking',
				descShort : '',
				descPartOne : '',
				descPartTwo : '',
				stock : 1,
				days : 6,
				nights: 5,
				urlName : 'deo-tibba-base-camp-trek'
			},
			
			// Camping Products
			{
				id : 19,
				name : 'Camping In The Wild',
				img : 'assets/css/images/camping/camp-in-wild-min.jpg',
				price : 1200.00,
				prodType : 'camping',
				stock : 1,
				days : 6,
				nights: 5,
				urlName : 'camping-in-the-wild'
			},	
			
			{
				id : 20,
				name : 'Camping Near River',
				img : 'assets/css/images/camping/camp-near-river-min.jpg',
				price : 1000.00,
				prodType : 'camping',
				stock : 1,
				days : 6,
				nights: 5,
				urlName : 'camping-near-river'
			},
			
			{
				id : 21,
				name : 'Himalayan Escape',
				img : 'assets/css/images/escape-trips/himalayan-escape/himalayan-escape-min.jpg',
				price : 9999,
				prodType : 'escape-trips',
				stock : 1,
				act1: 'Long Trek',
				act1Icon: 'fas fa-hiking',
				act2: 'Camping',
				act2Icon: 'fas fa-campground',
				act3: 'Short Rafting',
				act3Icon: 'fas fa-water',
				days : 7,
				nights: 6,
				urlName : 'himalayan-escape'
			},
			
			{
				id : 22,
				name : 'Weekend Escape',
				img : 'assets/css/images/escape-trips/weekend-escape/weekend-escape-min.jpg',
				price : 7999,
				prodType : 'escape-trips',
				stock : 1,
				act1: 'Local Tour',
				act1Icon: 'fas fa-binoculars',
				act2: 'Camping',
				act2Icon: 'fas fa-campground',
				act3: 'Short Rafting',
				act3Icon: 'fas fa-water',
				days : 6,
				nights: 5,
				urlName : 'weekend-escape'
			},	
			
			{
				id : 23,
				name : 'Magic Valley Escape',
				img : 'assets/css/images/escape-trips/magic-valley-escape/magic-valley-escape-min.jpg',
				price : 12999,
				prodType : 'escape-trips',
				stock : 1,
				act1: 'Moderate Trek',
				act1Icon: 'fas fa-hiking',
				act2: 'Camping',
				act2Icon: 'fas fa-campground',
				act3: 'Short Rafting',
				act3Icon: 'fas fa-water',
				days : 6,
				nights: 5,
				urlName : 'magic-valley-escape'
			},
					
			{
				id : 24,
				name : 'Shimla-Manali Tour',
				img : 'assets/css/images/manali.jpg',
				oldprice: 800.00,
				price : 499.00,
				prodType : 'packages',
				stock : 100
			},
			
		],
		wrapper = $('.productWrapper'),
		content = ''
		var upperLimit, lowerLimit;
		if(productName=='rafting'){
			lowerLimit = 0
			upperLimit = 1
		}
		else if(productName=='paragliding'){
			lowerLimit = 2
			upperLimit = 3
		}
		else if(productName=='trekking'){
			lowerLimit = 4
			upperLimit = 18
		}
		else if(productName=='camping'){
			lowerLimit = 19
			upperLimit = 20
		}
		else if(productName=='escape-trips'){
			lowerLimit = 21
			upperLimit = 23
		}
		else{
			lowerLimit = 18
			upperLimit = products.length - 1
		}

		for(var i = lowerLimit; i <= upperLimit; i++){
			if((upperLimit < 4)){
				if(products[i].stock > 0){
					content+= '<div class="wrapper col-medium" data-aos="zoom-in" data-aos-easing="ease-in-out-quad">'
					content+= '<a href="javascript:void(0);" class="wopper wopper--'+ products[i].prodType +' '+ products[i].prodType +'-'+(i+1)+'" style="background-image: url(/'+products[i].img+')">'
					content+= '<div class="para__title"><i class="fa fa-map-marker-alt"></i>&nbsp;'+products[i].location
					content+= '</div>'
					content+= '</a>'
					content+= '<div class="wopper__footer">'
					content+= '<div class="wopper__info">'
					content+= '<div>'
					content+= '<a class="wopper__info-detail" href="javascript:void(0);">'+products[i].name+'</a>'
					content+= '<button class="wopper__info-cart btn prod-'+products[i].id+'" data-style="zoom-out" onclick="app.addtoCart('+products[i].id+');" title="Add To Cart"><i class="fas fa-cart-plus"></i></button>'
					content+= '</div>'
					content+= '<a class="wopper__info-price prod-'+products[i].id+'"><span style="text-decoration: line-through;">₹ '+products[i].oldprice+' /-</span><span> ₹ '+products[i].price+' /-</span></a>'
					content+= '</div>'
					content+= '</div>'
					content+= '</div>'
				}
			}
			
			// Treks
			else if((upperLimit >= 4)&&(upperLimit<=19)){
				if(products[i].stock > 0){
					content+= '<div class="row row--padding-medium">'
					content+= '<div class="wrapper col-medium" data-aos="zoom-in" data-aos-easing="ease-in-out-quad">'
					content+= '<a href="/activities/trekking/'+ products[i].urlName +'" class="wopper wopper--trek" style="display: flex; justify-content: center; background-image: url(/'+products[i].img+')">'
					content+= '<span class="banner__overlay">'
					content+= '</span>'
					content+= '<span class="trek__title">'
					content+= '<span>'+ products[i].name +'</span></span>'
					content+= '</a>'
					content+= '<div class="wopper__footer">'
					content+= '<div class="wopper__info">'
					content+= '<div>'
					content+= '<a class="wopper__info-detail" style="" href="/activities/trekking/'+ products[i].urlName +'">'+ products[i].days +' Days '+ products[i].nights +' Nights</a>'
					content+= '<button class="wopper__info-cart btn prod-'+products[i].id+'" data-style="zoom-out" onclick="app.addtoCart('+products[i].id+');" title="Add To Cart"><i class="fas fa-cart-plus"></i></button>'
					content+= '</div>'
					content+= '<a class="wopper__info-price" href="/activities/trekking/'+ products[i].urlName +'"><span>₹ '+ products[i].price +' /-</span></a>'
					content+= '</div>'
					content+= '</div>'
					content+= '</div>'
					content+= '<div class="col-medium wrapper-text-right" data-aos="fade-left" data-aos-easing="ease-in-out-quad">'
					content+= '<h2 class="content__sub-title content__title-white" style="float: left; margin-left: 0; padding-top: 0; margin-bottom: .8em;">About</h2><br />'
					content+= '<p class="content__pg content--detail">'
					content+= '<span>'+ products[i].descShort +' </span>'
					content+= '</p>'
					content+= '<p class="trippy_btn-wrapper">'
					content+= '<a href="/activities/trekking/'+ products[i].urlName +'"><button class="trippy_btn"><span class="trippy_btn-left"></span>Learn More<span class="trippy_btn-right"></span></button>'
					content+= '</a><br />'
					content+= '</p>'
					content+= '</div>'
					content+= '</div>'
				}
			}
			
			// Camping
			else if((upperLimit >= 18)&&(upperLimit<=20)){
				if(products[i].stock > 0){
					content+= '<div class="wrapper col-medium" data-aos="zoom-in" data-aos-easing="ease-in-out-quad">'
					content+= '<a href="/activities/camping/'+ products[i].urlName +'" class="wopper wopper--'+ products[i].prodType +' '+ products[i].prodType +'-'+(i+1)+'" style="background-image: url(/'+products[i].img+')">'
//					content+= '<div class="para__title"><i class="fa fa-map-marker-alt"></i>&nbsp;'+products[i].location
//					content+= '</div>'
					content+= '</a>'
					content+= '<div class="wopper__footer">'
					content+= '<div class="wopper__info">'
					content+= '<div>'
					content+= '<a class="wopper__info-detail" href="javascript:void(0);">'+products[i].name+'</a>'
					content+= '<button class="wopper__info-cart btn prod-'+products[i].id+'" data-style="zoom-out" onclick="app.addtoCart('+products[i].id+');" title="Add To Cart"><i class="fas fa-cart-plus"></i></button>'
					content+= '</div>'
					content+= '<a class="wopper__info-price prod-'+products[i].id+'"><span> ₹ '+products[i].price+' /-</span></a>'
					content+= '</div>'
					content+= '</div>'
					content+= '</div>'
				}
			}
			
			// Escape Trips
			else if((upperLimit >= 20)&&(upperLimit<=23)){
				if(products[i].stock > 0){
					
					content+='<div class="row--padding-medium col-medium">'
					content+='<div class="trek-slide">'
					content+='	<div style="position: relative;">'
					content+='		<img class="trek-slide--img trek-slide4" style="background-image:url(/'+ products[i].img +')">'
					content+='		<div class="wopper__footer adventure">'
					content+='			<div class="wopper__info" style="padding: 0;">'
					content+='				<a class="wopper__info-price white wopper__act-name" href="/escape-trips/'+ products[i].urlName +'"><span>'+ products[i].name +'</span></a>'
					content+='			</div>'
					content+='		</div>'
					content+='	</div>'
					content+='	  <span class="trek-slide--price"><span style="font-size: 60%;">From</span> <i class="fa fa-rupee-sign"></i> '+ products[i].price +'/-</span>'
					content+= '<button class="wopper__info-cart btn-escape btn prod-'+products[i].id+'" data-style="zoom-out" onclick="app.addtoCart('+products[i].id+');" title="Add To Cart"><i class="fas fa-cart-plus"></i></button>'
					content+='	<div class="trek-slide--text">'
					content+='		<div class="trek-slide--meta">'
					content+='			<div class="">'
					content+='				<span>'+ products[i].act1 +'</span>'
					content+='				<span class="meta-type"><i class="'+ products[i].act1Icon +'"></i></span>'
					content+='			</div>'
					content+='			<div class="">'
					content+='				<span>'+ products[i].act2 +'</span>'
					content+='				<span class="meta-type"><i class="'+ products[i].act2Icon +'"></i></span>'
					content+='			</div>'
					content+='			<div class="">'
					content+='				<span>'+ products[i].act3 +'</span>'
					content+='				<span class="meta-type"><i class="'+ products[i].act3Icon +'"></i></span>'
					content+='			</div>'
					content+='		</div>'
					content+='	</div>'
					content+='</div>'
					content+='</div>'
					
					
					
//					content+= '<div class="wrapper col-medium" data-aos="zoom-in" data-aos-easing="ease-in-out-quad">'
//					content+= '<a href="/escape-trips/'+ products[i].urlName +'" class="wopper wopper--'+ products[i].prodType +' '+ products[i].prodType +'-'+(i+1)+'" style="background-image: url(/'+products[i].img+')">'
//					content+= '</a>'
//					content+= '<div class="wopper__footer">'
//					content+= '<div class="wopper__info">'
//					content+= '<div>'
//					content+= '<a class="wopper__info-detail" href="javascript:void(0);">'+products[i].name+'</a>'
//					content+= '</div>'
//					content+= '<a class="wopper__info-price prod-'+products[i].id+'"><span> ₹ '+products[i].price+' /-</span></a>'
//					content+= '</div>'
//					content+= '</div>'
//					content+= '</div>'
				}
			}
			
			// Packages
			else{
				if(products[i].stock > 0){
					content+= '<div class="wrapper col-medium" data-aos="zoom-in" data-aos-easing="ease-in-out-quad">'
					content+= '<a href="javascript:void(0);" class="wopper wopper--'+ products[i].prodType +' '+ products[i].prodType +'-'+(i+1)+'" style="background-image: url(/'+products[i].img+')">'
					content+= '<div class="para__title"><i class="fa fa-map-marker-alt"></i>&nbsp;'+products[i].location
					content+= '</div>'
					content+= '</a>'
					content+= '<div class="wopper__footer">'
					content+= '<div class="wopper__info">'
					content+= '<div>'
					content+= '<a class="wopper__info-detail" href="javascript:void(0);">'+products[i].name+'</a>'
					content+= '<button class="wopper__info-cart btn prod-'+products[i].id+'" data-style="zoom-out" onclick="app.addtoCart('+products[i].id+');" title="Add To Cart"><i class="fas fa-cart-plus"></i></button>'
					content+= '</div>'
					content+= '<a class="wopper__info-price prod-'+products[i].id+'"><span style="text-decoration: line-through;">₹ '+products[i].oldprice+' /-</span><span> ₹ '+products[i].price+' /-</span></a>'
					content+= '</div>'
					content+= '</div>'
					content+= '</div>'
				}
			}

		}

		wrapper.html(content)

		localStorage.setItem('products',JSON.stringify(products))
	}

	app.addtoCart = function(id){
		var l = Ladda.create( document.querySelector( '.prod-'+id ) );

		l.start();
		var products = JSON.parse(localStorage.getItem('products')),
		product = _.find(products,{ 'id' : id }),
		cant = 1;
		//if(cant <= product.stock){
			if(undefined != product){
				if(cant > 0){
					setTimeout(function(){
						var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
						app.searchProd(cart,product.id,parseInt(cant),product.name,product.price,product.img,product.stock, product.urlName, product.prodType, product.location)
						l.stop();
						// Do something when the product is added, like show custom message to the user confirming that their product is added to the cart.
//						alertContent += '<div class="cart-alert cart-alert--msg">',
//						alertContent += '	<span><i class="fa fa-check-circle"></i>&nbsp;Added to cart!</span>',
//						alertContent += '	<a class="cart-alert--close no-select">x</a>',
//						alertContent += '</div>';
//						alertWrapper.html(alertContent);
//						msgSelfDestruct();
					},2000)
				}else{
					alert('Only quantities greater than zero are allowed')
				}
			}else{
				alert('Oops! Something bad happened, try again later')
			}
		//}
		//else{
			//alert('Can not add more than this product')
		//}
	}

	app.searchProd = function(cart,id,cant,name,price,img,available, urlName, prodType, location){
		//if we pass a negative value to the amount, it is deducted from the cart
		var curProd = _.find(cart.items, { 'id': id });

		if(undefined != curProd && curProd != null){
			//the product already exists, we add one more to its quantity
//			if(curProd.cant < available){
				curProd.cant = parseInt(curProd.cant + cant);
				msgAlert('Quantity Increased!');
				msgSelfDestruct();
			//}else{
			//	alert('Can not add more than this product')
			//}

		}else{
			//if not, we add it to the cart
			var prod = {
				id : id,
				cant : cant,
				name : name,
				price : price,
				img : img,
				available : available,
				urlName : urlName,
				prodType : prodType,
				location : location
			}
			cart.items.push(prod);
			 msgAlert('Added to cart!');
			msgSelfDestruct();
//			alertContent += '<div class="cart-alert cart-alert--msg">',
//			alertContent += '	<span><i class="fa fa-check-circle"></i>&nbsp;Added to cart!</span>',
//			alertContent += '</div>';
//			alertWrapper.html(alertContent);
//			msgSelfDestruct();
		}
		localStorage.setItem('cart',JSON.stringify(cart))
		app.init()
		app.getProducts()
		//app.updatePayForm()
	}

	app.getProducts = function(checkoutForm){
		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []},
		msg = '',
		total = 0
//		wrapper.html('');
		if(checkoutForm=="checkout"){
			var wrapper = $('#cartItems');
			if(undefined == cart || null == cart || cart == '' || cart.items.length == 0){
				var wrapper = $('#formContainer');
				var items = '';
				items += '<h3 style="font-variant:none; color:#333;">Your cart is empty</h3><br /><br />'
				items += '<p class="content__pg" style="text-align: center; font-size: 1em;">'
        		items += '<a href="/" style="color:#fff; background:#333; padding:1em;">GO BACK TO HOME</a>'
    			items +='</p>'
				wrapper.html(items);
				$('.cart').css('left','-400%')
			}else{
				var totalCart=0;
				var items = '';
				_.forEach(cart.items, function(n, key) {
					var counter = 0;
				   total = (n.cant * n.price);
				   totalCart = totalCart+total;
				   items += '<input type="text" name="activity-'+n.id+'" value="'+ n.prodType +'  |  '+ n.name +'  |  '+ n.cant +'  |  Rs.'+ n.price +'/-  |  Rs.'+ total + '">'
					counter = counter + 1;
				});

				wrapper.html(items)
				$('.cart').css('left','-500%')
			}
		}
		else{
			var wrapper = $('.cart');
			if(undefined == cart || null == cart || cart == '' || cart.items.length == 0){
				wrapper.html('<h3 style="font-variant:none;">Your cart is empty</h3>');
				$('.cart').css('left','-400%')
			}else{
				var totalCart=0;
				var items = '';
				_.forEach(cart.items, function(n, key) {
				   total = (n.cant * n.price);
				   totalCart = totalCart+total;
				   items += '<div class="row product__wrapper">'
				   items += '	<div class="container wrapper col-narrow product__image">'
					if(n.id < 5){
						items += '		<a href="/activities/'+n.prodType+'/" class="wopper wopper--'+n.prodType+'" style="background: url(/'+n.img+') center no-repeat; background-size:cover;">'
						items+= '<span class="para__title para__title-cart"><i class="fa fa-map-marker-alt"></i>&nbsp;'+n.location
						items+= '</span>'
						items+= '</a>'
					}
					else{
						items += '		<a href="/activities/'+n.prodType+'/'+n.urlName+'" class="wopper wopper--'+n.prodType+'" style="background: url(/'+n.img+') center no-repeat; background-size:cover;">'
						items+= '</a>'

					}

				   items += '	</div>'
				   items += '	<div class="col-wide product__detail-wrapper">'
				   items += '		<div class="product__detail">'
				   items += '			<div class="product__detail-name">'
				   items += '				<span class="productName">'+n.name+'</span>'
				   items += '				<span class="productPrice">₹ '+n.price+' /-</span>'
				   items += '			</div>'
				   items += '			<div class="product__detail-dynamic">'
				   items += '				<input type="number" value="'+n.cant+'" readonly="readonly" max-length=20>'
				   items += '				<div class="input__btn-set">'
				   items += '					<button class="input__btn product__add prod-'+n.id+'" title="Add Quantity" onclick="app.addtoCart('+n.id+');" data-style="zoom-out" title="Add To Cart">+</button>'
				   items += '					<button class="input__btn product__less" title="Remove Quantity" onclick="app.updateItem('+n.id+','+n.available+');">-</button>'
				   items += '				</div>'
				   items += '				<span class="totalPrice">₹ '+total+' /-</span>'
				   items += '			</div>'
				   items += '		</div>'
				   items += '		<div class="product__action">'
				   items += '			<a class="product__action-remove productRemove" onclick="app.deleteProd('+n.id+')">x</a>'
				   items += '		</div>'
				   items += '	</div>'
				   items += '</div>'

				   /*items += '<li>'
				   items += '<img src="'+n.img+'" />'
				   items += '<h3 class="title">'+n.name+'<br><span class="price">'+n.cant+' x ₹ '+n.price+' INR</span> <button class="add" onclick="app.updateItem('+n.id+','+n.available+')"><i class="icon ion-minus-circled"></i></button> <button onclick="app.deleteProd('+n.id+')" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>'
				   items += '</li>'*/
				});
				   items += '<span class="row hr-line" style="margin-top:4em;"></span>';
				   items += '<div class="row">';
				   items += '	<div class="row cart__total">';
				   items += '		<span class="cart__total-name">TOTAL</span>';
				   items += '		<span class="cart__total-amount">₹ '+totalCart+'</span>';
				   items += '	</div>';
				   items += '</div>';
				   items += '<span class="row hr-line" style="margin-top:2em;"></span>'
				   items += '<div class="row cart__checkout">'
				   items += '	<a href="/checkout/">'
				   items += '		<button class="trippy_btn" onclick="">'
				   items += '			<span class="trippy_btn-left"></span>Checkout<span class="trippy_btn-right">					 </span>'
				   items += '		</button>'
				   items += '	</a>'
				   items += '</div>'
				//Add the total to the cart
				/*items += '<li id="total">Total : ₹ '+total+' INR <div id="submitForm"></div></li>';*/
				wrapper.html(items)
				$('.cart').css('left','-500%')
			}
		}
	}

	app.updateItem = function(id,available){
		//subtract one to the amount of the shopping cart
		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ,
		curProd = _.find(cart.items, { 'id': id });
			//update the cart
			curProd.cant = curProd.cant - 1;
			//validate that the amount is not less than 0
			if(curProd.cant > 0){
				localStorage.setItem('cart',JSON.stringify(cart))
				app.init()
				app.getProducts()
				msgAlert('Quantity Decreased!');
				msgSelfDestruct();
//				alertContent += '<div class="cart-alert cart-alert--msg">',
//				alertContent += '	<span><i class="fa fa-check-circle"></i>&nbsp;Quantity Decreased!</span>',
//				alertContent += '</div>';
//				alertWrapper.html(alertContent);
//				msgSelfDestruct();
				//app.updatePayForm()
			}else{
				app.deleteProd(id,true);
			}
	}

	app.delete = function(id){
		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
		var curProd = _.find(cart.items, { 'id': id });
		_.remove(cart.items, curProd);
		localStorage.setItem('cart',JSON.stringify(cart))
		app.init()
		app.getProducts()
		//app.updatePayForm()
		msgAlert('Item removed from Cart!');
		msgSelfDestruct();
//		alertContent += '<div class="cart-alert cart-alert--msg">',
//		alertContent += '	<span><i class="fa fa-check-circle"></i>&nbsp;Removed Successfully!</span>',
//		alertContent += '</div>';
//		alertWrapper.html(alertContent);
//		msgSelfDestruct();
	}

	app.deleteProd = function(id,remove){

		if(undefined != id && id > 0){

			if(remove == true){
				app.delete(id)
			}else{
				var conf = confirm('Do you want to delete this product?')
				if(conf){
					app.delete(id)
				}
			}


		}
	}

	// Add product quantity


	//app.updatePayForm = function(){
		//that will generate a dynamic form for paypal
		//with the products and their prices
	/*	var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
		var statics = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="'+business_paypal+'">',
		dinamic = '',
		wrapper = $('#submitForm')

		wrapper.html('')

		if(undefined != cart && null != cart && cart != ''){
			var i = 1;
			_.forEach(cart.items, function(prod, key) {
					dinamic += '<input type="hidden" name="item_name_'+i+'" value="'+prod.name+'">'
					dinamic += '<input type="hidden" name="amount_'+i+'" value="'+prod.price+'">'
					dinamic += '<input type="hidden" name="item_number_'+i+'" value="'+prod.id+'" />'
					dinamic += '<input type="hidden" name="quantity_'+i+'" value="'+prod.cant+'" />'
				i++;
			})

			statics += dinamic + '<button type="submit" class="pay">Pay Now &nbsp;<i class="ion-chevron-right"></i></button></form>'

			wrapper.html(statics)
		}
	}	*/

	$(document).ready(function(){
		app.init();
		//app.getProducts()
		//app.updatePayForm()
		//app.createProducts()
	});

	function msgAlert(msg){
		var alertWrapper = $('.cart-alert--wrapper'),
//		origHtml = $(".cart-alert--wrapper").html(),
		alertContent = '';
//		alertContent += origHtml;
//		alertContent = origHtml;
//		alertWrapper.html('');

		alertContent += '<div class="cart-alert cart-alert--msg">',
		alertContent += '	<span><i class="fa fa-check-circle"></i>&nbsp;'+msg+'!</span>',
//		alertContent += '	<a class="cart-alert--close no-select">x</a>',
		alertContent += '</div>';
		alertWrapper.html(alertContent);
		msgSelfDestruct();
	}

	function msgSelfDestruct(){
			(function(){
				setTimeout(function(){
					$('.cart-alert--msg:first-child').delay(1000).fadeOut(4000, function(){
						$(this).remove();
					});
				}, 1000);
			})();
	}

})(jQuery);
