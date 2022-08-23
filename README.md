# A minimal R leaflet-search fork of leaflet.extras

This is a minimal fork of leaflet.extras to run leaflet-search for R using
up to date javascript packages.

## Rest of leaflet.extras readme (note, much of it is obsolete now)

Thank you all of you who have used this package and have contributed code/bugs/enhancements over the years. As you may have noticed I haven't been able to make any contributions to this project and others in the last two years. I was hoping to get back to developing/maintaining this package on a regular basis but my current work-life balance does not allow it and I don't see that situation changing anytime soon. 

So here is my humble request to the R geospatial community, if anyone wants to take over this project and maintain/develop it for the greater good, I will be more than happy to transfer the project over to your repo. Send me an email at bhaskarvk AT <google's mail domain>. Same offer holds of any of my other R packages that you might be interested in taking over.

**Please note that the javascripts being used in the current version are all almost 2 years old and counting and contain various security vulnerabilities. So I don't recommend anyone use this package anymore unless it is taken over and brought up to date by someone else. Until that happens please consider this project as abandonware.**

---

[![Project Status: Active – The project is being actively developed.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active) [![Last-changedate](https://img.shields.io/badge/last%20change-2018--04--23-green.svg)](/commits/master) [![License: GPL-3](https://img.shields.io/badge/License-GPLv3-yellow.svg)](https://opensource.org/licenses/GPL-3.0) [![keybase verified](https://img.shields.io/badge/keybase-verified-brightgreen.svg)](https://gist.github.com/bhaskarvk/46fbf2ba7b5713151d7e) [![Travis-CI Build Status](https://travis-ci.org/bhaskarvk/leaflet.extras.svg?branch=master)](https://travis-ci.org/bhaskarvk/leaflet.extras) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/bhaskarvk/leaflet.extras?branch=master&svg=true)](https://ci.appveyor.com/project/bhaskarvk/leaflet.extras) [![packageversion](https://img.shields.io/badge/Package%20version-1.0.0-orange.svg?style=flat-square)](commits/master) [![CRAN\_Status\_Badge](http://www.r-pkg.org/badges/version/leaflet.extras)](https://cran.r-project.org/package=leaflet.extras) [![](http://cranlogs.r-pkg.org/badges/grand-total/leaflet.extras)](http://cran.rstudio.com/web/packages/leaflet.extras/index.html)

leaflet.extras
--------------

The goal of `leaflet.extras` package is to provide extra functionality to the [leaflet](https://cran.r-project.org/web/packages/leaflet/index.html) R package using various [leaflet plugins](http://leafletjs.com/plugins).

### Installation

For CRAN version

``` r
install.packages('leaflet.extras')
```

For latest development version

``` r
# We need latest leaflet package from Github, as CRAN package is too old.
devtools::install_github('rstudio/leaflet')
devtools::install_github('bhaskarvk/leaflet.extras')
```

### Progress

Plugins integrated so far ...

-   [Pulse Icon](https://github.com/mapshakers/leaflet-icon-pulse): Demo at [Rpubs - Pulse Icons](http://rpubs.com/bhaskarvk/leaflet-pulseIcon)
-   [Weather Markers](https://github.com/tallsam/Leaflet.weather-markers): Demo at [Rpubs - Weather Icons](http://rpubs.com/bhaskarvk/leaflet-weather)
-   [Leaflet Heat](https://github.com/Leaflet/Leaflet.heat): Demo at [Rpubs - Heatmaps](http://rpubs.com/bhaskarvk/leaflet-heat)
-   [webgl-heatmap](https://github.com/ursudio/webgl-heatmap-leaflet): Demo at [Rpubs - Heatmap](http://rpubs.com/bhaskarvk/leaflet-heatmap)
-   [Tile Caching](https://github.com/MazeMap/Leaflet.TileLayer.PouchDBCached): Demo at [Rpubs - Tile Caching](http://rpubs.com/bhaskarvk/TileLayer-Caching)
-   [Leaflet Hash](https://github.com/mlevans/leaflet-hash)
-   [Fullscreen Control](https://github.com/Leaflet/Leaflet.fullscreen)
-   [WMS Legend](https://github.com/kartoza/leaflet-wms-legend)
-   [Omnivore](https://github.com/mapbox/leaflet-omnivore): Allows adding data from various geospatial file formats.
    -   GeoJSON: Demo at [Rpubs - GeoJSON](http://rpubs.com/bhaskarvk/geojsonv2)
    -   TopoJSON: Demo at [Rpubs - TopoJSON](http://rpubs.com/bhaskarvk/topojsonv2)
    -   KML: Demo at [Rpubs - KML](http://rpubs.com/bhaskarvk/kml)
    -   CSV: Demo at [Rpubs - CSV](http://rpubs.com/bhaskarvk/csv)
    -   GPX: Demo at [Rpubs - GPX](http://rpubs.com/bhaskarvk/gpx)
    -   ~~WKT~~: Will not be implemented.
    -   ~~Polyline~~: Will not be implemented.
-   [Leaflet.Draw](https://github.com/Leaflet/Leaflet.draw) & [Style Editor](https://github.com/dwilhelm89/Leaflet.StyleEditor): Demo at [Rpubs: leaflet-draw](http://rpubs.com/bhaskarvk/leaflet-draw)
-   [Leaflet.Geodesic](https://github.com/henrythasler/Leaflet.Geodesic): Demo at [Rpubs: Geodesic Lines](http://rpubs.com/bhaskarvk/geodesic)
-   [Leaflet-measure-path](https://github.com/ProminentEdge/leaflet-measure-path): Demo at [Rpubs: Measure Path](http://rpubs.com/bhaskarvk/measure-path)
-   [Leaflet-search](https://github.com/stefanocudini/leaflet-search): Demo at [Rpubs: Leaflet Search](http://rpubs.com/bhaskarvk/leaflet-search)
-   [Leaflet-GPS](https://github.com/stefanocudini/leaflet-gps)
-   [Leaflet.Sleep](https://github.com/CliffCloud/Leaflet.Sleep): Demo at [Rpubs: Suspended Scrolling](http://rpubs.com/bhaskarvk/suspended-scroll)
-   [Bing Tiles](https://github.com/shramov/leaflet-plugins/tree/v2)
-   [Bounce Marker](https://github.com/maximeh/leaflet.bouncemarker)

If you need a plugin that is not already implemented create an [issue](https://github.com/bhaskarvk/leaflet.extras/issues/new). See the [FAQ](#FAQ) section below for details.

### Documentation

The R functions have been documented using roxygen, and should provide enough help to get started on using a feature. However some plugins have lots of options and it's not feasible to document every single detail. In such cases you are encouraged to check the plugin's documentation.

Currently there are no vignettes (contributions welcome), but there are plenty of [examples](https://github.com/bhaskarvk/leaflet.extras/tree/master/inst/examples) available. You can see most of these examples in action at [Rpubs:bhaskarvk](http://rpubs.com/bhaskarvk).

### FAQ

*I want to use a certain leaflet plugin not integrated so far.*

-   **Good Solution**: Create issues for plugins you wish incorporated but before that search the existing issues to see if issue already exists and if so comment on that issue instead of creating duplicates.
-   **Better Solution**: It would help in prioritizing if you can include additional details like why you need the plugin, how helpful will it be to everyone etc.
-   **Best Solution**: Code it yourself and submit a pull request. This is the fastest way to get a plugin into the package.

*I submitted an issue for a plugin long time ago but it is still not available.*

This package is being developed purely on a voluntary basis on spare time without any monetary compensation. So the development progress can stall at times. It may also not be possible to prioritize one-off requests that no one else is interested in. Getting more people interested in a feature request will help prioritize development. Other option is to contribute code. That will get you added to the contributer list and a thanks tweet.

*I found a bug.*

-   **Good Solution**: Search existing issue list and if no one has reported it create a new issue.
-   **Better Solution**: Along with issue submission provide a minimal reproducible code sample.
-   **Best Solution**: Fix the issue and submit a pull request. This is the fastest way to get a bug fixed.

*I need a plugin which requires 1.x version of the leaflet JavaScript library*

As of version 1.0.0, `leaflet.extras` supports leaflet.js version 1.x.

### Development

To make additions to the plugin dependencies, please add the plugin using `npm`. Make sure it is compiled within the `webpack.config.js`. Finally, make sure htmlwidgets finds it within your plugin's dependency function.

To build the latest version of the plugins, please make sure Node.js is installed on your system, then run:

    npm install
    npm run build

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CONDUCT.md). By participating in this project you agree to abide by its terms.
