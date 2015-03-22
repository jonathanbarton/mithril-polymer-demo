var app = {};
app.vm = {};
app.vm.init = function() {
	this.title = "Mithril Polymer Demo";
	this.nav = [
		{
			url: "/",
			name: "Home"
		},
		{
			url: "/one",
			name: "Page One"
		},
		{
			url: "/two",
			name: "Page Two"
		}
	];
};
app.vm.updateSelectedNavItem = function() {
	var route = m.route();
	var selectedNavItem = app.vm.nav.filter(function(el) {
		return el.url === route;
	});
	this.selectedNavItem = m.prop(selectedNavItem[0] || this.nav[0]);
	return this.selectedNavItem;
};

app.controller = function() {
	app.vm.init();
};

app.view = function(ctrl) {
	var vm = app.vm;
	var selected = vm.updateSelectedNavItem()();
	return [
		nav.view(selected),
		toolbar.view(selected),
		pageContent.view(selected)
	];
};

var nav = {};
nav.view = function(selected) {
	return m("nav", [
		m("core-toolbar", 
			m("span", app.vm.title)
		),
		app.vm.nav.map(function(link) {
            return m("paper-item[noink]", {class: link === selected ? "selected" : ""},
            	m("a", {href: link.url, config: m.route}, link.name)
            )
        })
    ]);
};

var toolbar = {};
toolbar.view = function(selected) {
	return m("core-toolbar[tool][flex]", [
		m("div[flex]", selected.name),
		m("core-icon-button[icon='search']")
	])
};

var pageContent = {};
pageContent.view = function(selected) {
	return m("div[layout][horizontal][center-center][fit]", [
		m("p", "Content for " + selected.name)
	]);
};

m.route.mode = "hash";
m.route(document.getElementById("page"), "/", {
    "/": app,
    "/one": app,
    "/two": app
});
