# Mithril Polymer Demo

Simple proof of concept of [Polymer components](https://www.polymer-project.org) inside a [Mithril](http://lhorie.github.io/mithril/) app.

The app shows a left menu panel and top toolbar. Resize the browser window to smaller than 600px to see the left panel component move out of the way.

The idea is that components are stateless, and have their state managed by Mithril.

Note: this demo works fantastic in Chrome, but not in other browsers. Safari and Firefox show serious redrawing issues (flickring), so I don't recommend to use this for production.

## Usage

In the root directory:

* `bower install`
* `python -m SimpleHTTPServer 9000`
* point your browser to [localhost:9000](http://localhost:9000)

## License

[MIT License](http://opensource.org/licenses/MIT)
