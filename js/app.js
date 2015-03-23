var app = {};

app.view = function() {
	var selected = nav.selectedItem();
	return [
		nav.view(selected),
		toolbar.view(selected),
		pageContent.view(selected)
	];
};

var nav = {};
nav.title = "Mithril Polymer Demo";
nav.items = [
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
nav.selectedItem = function() {
	var filtered = this.items.filter(function(el) {
		return el.url === m.route();
	});
	return filtered.length > 0 ? filtered[0] : this.items[0];
};
nav.view = function(selected) {
	return m("nav", [
		m("core-toolbar", 
			m("span", this.title)
		),
		this.items.map(function(item) {
            return m("paper-item[noink]", {class: item.url === selected.url ? "selected" : ""},
            	m("a", {href: item.url, config: m.route}, item.name)
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
