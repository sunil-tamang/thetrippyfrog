
# The Trippy Frog

## How to use DATA files in `_data` directory

We are storing data in YML format. So firstly, you have to understand something about YML. 
1. It follows a particular structure in the way data is stored. 
2. **It doesn't like TAB Space**. Meaning, if you press tab in a YML file, then it will throw errors, and won't run successfully. So always remember not to press any tab spaces. **Always use space key, not the tab key**.  
3. Comments can be used in YML for documentation purpose using `#` at the starting of any comment, like:
	```
	# This is a comment in YML
	```

If you understand clearly, then let's move forward.

The `_data` directory contains a file called `trek-data.yml`. It contains the details of each trek, including **Itinerary** of each trek. For example: 
```
# Hampta Pass Trek
hampta-pass:
    name: "Hampta Pass Trek"
    days: "4"
    nights: "3"
    overview: 

    - content: Hampta Pass trek is giving each adventure lover...
    
    - content: An integral part of Manali’s topography...
    

    itinerary:

    - title: DAY 1 - Drive from Manali to Jobra and Trek to Chika
      content: One and a half hours drive from Manali leads to...

    - title: DAY 2 - TREK FROM CHIKA TO BALU KA GHERA
      content: The second days’s trek starts with the crossing...

    - title: DAY 3 - TREK FROM BALU KA GHERA TO SHEA GORU VIA HAMPTA PASS
      content: The third day’s trek starts with one and half...

    - title: DAY 4 - TREK FROM SHEA GORU TO CHATRU TO MANALI
      content: The fourth day’s trek starts by crossing the...
``` 

Here, you can see the title is `hampta-pass`, meaning the name of the trek we use here should be the same as that of it's filename. Here the filename is `hampta-pass.html`.

And in the trek page, the front-matter will include another variable know as `title-slug`, which will contain the *filename* without the *file extension* Here's a sample of it:

```hampta-pass.html```
```markdown
---
layout: trek
title: "Hampta Pass Trek"
title-slug: hampta-pass
.
.


---
```
And we can loop over all the itinerary, one by one and display according to our need as follows:
```hampta-pass.html```
```html
<ul class="trek-itinerary">

	{% for i in trek.itinerary %}
		<li>
			<h3 class="itinerary-subtitle">
				{{ i.title }}
			</h3>
			<p class="content--detail itinerary-detail">
				{{ i.content }}
			</p>
		</li>
	{% endfor %}

	<li>
		<h3 class="itinerary-subtitle">TRIP ENDS HERE!</h3>
	</li>
</ul>
```

The advantage of using this is less code, less complexity, and if we have to change the itinerary, we have to open only one file : `trek-data.yml` stored in `_data` directory. 

We can do the same for **Escape Trips**.