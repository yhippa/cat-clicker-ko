var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('blah');
	this.nicknames = ko.observableArray([{name: 'Tubby'}, {name: 'Smartens'}, {name: 'Kiddo'}]);

	this.incrementCounter = function() {};
}

ko.applyBindings(new ViewModel());