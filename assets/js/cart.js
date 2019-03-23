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
				descShort : 'Lamadugh trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and...',
				descPartOne : 'Lamadugh trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and special one climbing out across the lush green valleys of Kullu to reach the overhanging mountains. From the top, you will witness the magnificent view of a different world below, the beautiful yet deserted Lahaul. The panoramic sweep of the valley from the summit will be a sight that will not leave you forever.',
				descPartTwo : 'An integral part of Manali’s topography, which is India’s favourite adventure zone, this trek is voted amongst the easiest of trails and most attractive to beginners. An exciting activity, being around Hampta Pass opens a whole new beautiful world. Coupled with a stopover at the eerie and placid Chandra Tal, this journey is replete with adventure and scenic moments.',
				stock : 1,
				days : 3,
				nights: 2,
				urlName : 'lamadugh-trek'
			},
			{
				id : 7,
				name : 'Bhrigu Lake Trek',
				img : 'assets/css/images/treks/bhrigu.jpg',
				price : 5500.00,
				prodType : 'trekking',
				descShort : 'Bhrigu Lake trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and...',
				descPartOne : 'Bhrigu Lake trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and special one climbing out across the lush green valleys of Kullu to reach the overhanging mountains. From the top, you will witness the magnificent view of a different world below, the beautiful yet deserted Lahaul. The panoramic sweep of the valley from the summit will be a sight that will not leave you forever.',
				descPartTwo : 'An integral part of Manali’s topography, which is India’s favourite adventure zone, this trek is voted amongst the easiest of trails and most attractive to beginners. An exciting activity, being around Hampta Pass opens a whole new beautiful world. Coupled with a stopover at the eerie and placid Chandra Tal, this journey is replete with adventure and scenic moments.',
				stock : 1,
				days : 3,
				nights: 2,
				urlName : 'bhrigu-lake-trek'
			},
			{
				id : 8,
				name : 'Mantalai Lake Trek',
				img : 'assets/css/images/treks/wild_min.jpg',
				price : 8000.00,
				prodType : 'trekking',
				descShort : 'Mantalai Lake trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and...',
				descPartOne : 'Mantalai Lake trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and special one climbing out across the lush green valleys of Kullu to reach the overhanging mountains. From the top, you will witness the magnificent view of a different world below, the beautiful yet deserted Lahaul. The panoramic sweep of the valley from the summit will be a sight that will not leave you forever.',
				descPartTwo : 'An integral part of Manali’s topography, which is India’s favourite adventure zone, this trek is voted amongst the easiest of trails and most attractive to beginners. An exciting activity, being around Hampta Pass opens a whole new beautiful world. Coupled with a stopover at the eerie and placid Chandra Tal, this journey is replete with adventure and scenic moments.',
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
				descShort : 'Kufri trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and...',
				descPartOne : 'Kufri trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and special one climbing out across the lush green valleys of Kullu to reach the overhanging mountains. From the top, you will witness the magnificent view of a different world below, the beautiful yet deserted Lahaul. The panoramic sweep of the valley from the summit will be a sight that will not leave you forever.',
				descPartTwo : 'An integral part of Manali’s topography, which is India’s favourite adventure zone, this trek is voted amongst the easiest of trails and most attractive to beginners. An exciting activity, being around Hampta Pass opens a whole new beautiful world. Coupled with a stopover at the eerie and placid Chandra Tal, this journey is replete with adventure and scenic moments.',
				stock : 1,
				days : 2,
				nights: 1,
				urlName : 'kufri-trek'
			},
			{
				id : 9,
				name : 'Kheerganga Trek',
				img : 'assets/css/images/treks/kheerganga_min.jpg',
				price : 5000.00,
				prodType : 'trekking',
				descShort : 'Kheerganga trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and...',
				descPartOne : 'Kheerganga trek is giving each adventure lover an option to discover the unique landscape on the Manali side in Himachal Pradesh. It is a dream like an experience through the unusual and special one climbing out across the lush green valleys of Kullu to reach the overhanging mountains. From the top, you will witness the magnificent view of a different world below, the beautiful yet deserted Lahaul. The panoramic sweep of the valley from the summit will be a sight that will not leave you forever.',
				descPartTwo : 'An integral part of Manali’s topography, which is India’s favourite adventure zone, this trek is voted amongst the easiest of trails and most attractive to beginners. An exciting activity, being around Hampta Pass opens a whole new beautiful world. Coupled with a stopover at the eerie and placid Chandra Tal, this journey is replete with adventure and scenic moments.',
				stock : 1,
				days : 2,
				nights: 1,
				urlName : 'kheerganga-trek'
			},
			{
				id : 10,
				name : 'Shimla-Manali Tour',
				img : 'assets/css/images/manali.jpg',
				oldprice: 800.00,
				price : 499.00,
				prodType : 'packages',
				stock : 100
			}
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
			upperLimit = 9
		}
		else{
			lowerLimit = 10
			upperLimit = products.length - 1
		}
		
		for(var i = lowerLimit; i <= upperLimit; i++){
			if(upperLimit < 4){
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
			else if((upperLimit >= 4)&&(upperLimit<=9)){
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