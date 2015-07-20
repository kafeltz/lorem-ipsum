/*
	TODOs
	 - lorem by formula instead dic of tokens (?)
	 - lorem with accents (optional)
*/
;(function()
{
	'use strict';

	var tokens = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dignissim", "dis", "dolor", "donec", "dui", "duis", "efficitur", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "eu", "euismod", "ex", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "finibus", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "magnis", "malesuada", "massa", "mattis", "mauris", "maximus", "metus", "mi", "molestie", "mollis", "montes", "morbi", "nam", "nascetur", "natoque", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "parturient", "pellentesque", "penatibus", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "rhoncus", "ridiculus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociis", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];

	var defaults = {
		quantity_of_words_ in_paragraphs : 20,
		quantity_of_words_in_lists : 8
	};

	function Lorem(options)
	{
		this.options = $.extend({}, defaults, options) ;
	}

	function get_random_token( tokens )
	{
		var random_index = Math.floor((Math.random() * 1000)) % tokens.length;

		return tokens[random_index];
	}

	function get_bundle_tokens( howmany, tokens )
	{
		var result = [];

		for(var i=0; i<howmany; i++)
		{
			result.push( get_random_token(tokens) );
		}

		return result;
	}

	Lorem.prototype.words = function( quantity )
	{
		return get_bundle_tokens( quantity, tokens ).join(" ");
	}

	Lorem.prototype.topic = function( quantity )
	{
		var list_of_words = [];

		var words = '';

		for (var i=0; i < quantity; i++)
		{
			words = this.words( quantity );

			words = words.substring(0, 1).toUpperCase() + words.substring(1);

			list_of_words.push( words );
		}

		return list_of_words.join(". ") + ".";
	}

	Lorem.prototype.paragraphs = function( quantity )
	{
		var list_of_paragraphs = [];
		var paragraph;
		var number_of_topics;

		for (var i=0; i < quantity; i++)
		{
			number_of_topics = 1 + Math.floor((Math.random() * 10)) % 10;

			paragraph = this.topic( number_of_topics );

			list_of_paragraphs.push( paragraph );
		}

		return list_of_paragraphs.join("\n\n");
	}

	Lorem.prototype.lists = function( quantity )
	{
		var results = [];
		var words;

		for(var i=0; i<quantity; i++)
		{
			words = this.words( this.options.quantity_of_words_in_lists );
			results.push( words );
		}

		return results.join("\n");
	}

});
