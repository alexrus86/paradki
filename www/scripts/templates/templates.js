angular.module('templates.app', ['main.tpl.html']);

angular.module("main.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("main.tpl.html",
    "<div class=\"excursion-list-wrapper\">\n" +
    "	<div class=\"card\">\n" +
    "		<div class=\"img-wrapper\">\n" +
    "			<img src=\"./img/excursions/4XfCDAb0QN8.310x310.jpg\">\n" +
    "		</div>\n" +
    "		<p class=\"excursion-date\"> 16 марта 2017</p>\n" +
    "		<p class=\"excursion-name\">Чаепитие на крыше</p>\n" +
    "		<div class=\"excursion-details\">\n" +
    "				<span class=\"excursion-duration\"> 1 час</span>\n" +
    "				<span class=\"excursion-type\"> Пешеходная</span>\n" +
    "				<span class=\"excursion-price\">1000 P</span>\n" +
    "				<button>Подробнее</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"card\">\n" +
    "		<div class=\"img-wrapper\">\n" +
    "			<img src=\"./img/excursions/135.310x310.jpg\">\n" +
    "		</div>\n" +
    "		<p class=\"excursion-date\"> 16 марта 2017</p>\n" +
    "		<p class=\"excursion-name\">Чаепитие на крыше</p>\n" +
    "		<div class=\"excursion-details\">\n" +
    "				<span class=\"excursion-duration\"> 1 час</span>\n" +
    "				<span class=\"excursion-type\"> Пешеходная</span>\n" +
    "				<span class=\"excursion-price\">1000 P</span>\n" +
    "				<button>Подробнее</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"card\">\n" +
    "		<div class=\"img-wrapper\">\n" +
    "			<img src=\"./img/excursions/DIM_7273.310x310.jpg\">\n" +
    "		</div>\n" +
    "		<p class=\"excursion-date\"> 16 марта 2017</p>\n" +
    "		<p class=\"excursion-name\">Чаепитие на крыше</p>\n" +
    "		<div class=\"excursion-details\">\n" +
    "				<span class=\"excursion-duration\"> 1 час</span>\n" +
    "				<span class=\"excursion-type\"> Пешеходная</span>\n" +
    "				<span class=\"excursion-price\">1000 P</span>\n" +
    "				<button>Подробнее</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);
