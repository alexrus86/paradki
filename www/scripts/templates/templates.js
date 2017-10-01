angular.module('templates.app', ['about.tpl.html', 'booking.tpl.html', 'contacts.tpl.html', 'excursionItem.tpl.html', 'partial-test1.tpl.html', 'main.tpl.html', 'schedule.tpl.html']);

angular.module("about.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("about.tpl.html",
    "<div class=\"about-us\">\n" +
    "	\n" +
    "	Главная > О нас\n" +
    "	\n" +
    "	<h1>О нас</h1>\n" +
    "	<img>\n" +
    "	<p>\n" +
    "		Компания \"Небанальный Петербург\" — это ведущий туроператор в Санкт-Петербурге, успешно существует и развивается с 2010 года.\n" +
    "		Наша компания включена в Единый федеральный реестр туроператоров под номером РТО 018857, имеет финансовое обеспечение 500 000 руб. \n" +
    "		Мы являемся эксклюзивным гидом по Петербургу и за несколько лет работы успели накопить  успешный опыт в проведении интересных экскурсий и мероприятий.   \n" +
    "		Мы предлагаем различное экскурсионное обслуживание для гостей и жителей Санкт-Петербурга, делая акцент на уникальные, авторские маршруты. \n" +
    "		Нашим клиентам мы всегда готовы предложить широкий спектр услуг для организованных групп и индивидуальных туристов. \n" +
    "		В нашей программе есть обзорные, тематические, детские, неформальные и другие экскурсии. \n" +
    "		Мы работаем только с профессиональными экскурсоводами и настоящими знатоками своего дела, поэтому можем гарантировать качество предоставляемых услуг. \n" +
    "		Предлагаемые на нашем сайте экскурсии позволят познакомиться с парадным и малоизвестным Петербургом, проникнуться атмосферой города, узнать много интересных фактов из истории и современности.\n" +
    "	</p>\n" +
    "</div>");
}]);

angular.module("booking.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("booking.tpl.html",
    "<div class=\"excursion-booking\">\n" +
    "	\n" +
    "	Главная > Как заказать\n" +
    "	\n" +
    "	<h1>Как заказать</h1>\n" +
    "	\n" +
    "	<p>\n" +
    "	Заказать экскурсию/тур/мероприятие вы можете через форму бронирования на сайте, \n" +
    "	нажав кнопку \"выбрать дату экскурсии\" или позвонить по телефонам  +7(812)509-66-42, +7(812)989-16-42  \n" +
    "	или заказать обратный звонок\n" +
    "	</p>\n" +
    "	\n" +
    "	<h2>\n" +
    "	Как заказать экскурсию/мероприятие через сайт\n" +
    "	</h2>\n" +
    "	\n" +
    "	<b>Шаг 1.</b> \n" +
    "	\n" +
    "	<ol>\n" +
    "		<li>Выберите экскурсию или мероприятие</li>\n" +
    "		<li>Выберите дату, время и количество человек</li>\n" +
    "		<li>Подтвердите согласие с правилами покупки и добавьте заказ в корзину</li>\n" +
    "	</ol>\n" +
    "	\n" +
    "	<b>Шаг 2.</b>\n" +
    "	\n" +
    "	<h2>Способы оплаты:</h2>\n" +
    "	\n" +
    "	<ul>\n" +
    "		<li>- Удаленно через сайт (через систему бронирования или в свободной форме)</li>\n" +
    "		<li>- На расчетный счет Компании (по счету для юр.лиц или по квитанции для физ.лиц)</li>\n" +
    "		<li>- Яндекс Деньги (номер кошелька 410011803548647)</li>\n" +
    "		<li>- Сбербанк (номер карты 4276 5500 3674 5985)</li>\n" +
    "		<li>- Подъехать к нам в офис и оплатить наличными</li>\n" +
    "	</ul>\n" +
    "	\n" +
    "	<p>\n" +
    "	Отмена/перенос экскурсий/мероприятий\n" +
    "	Информация об аннуляции бронирования мест на экскурсии и туры принимается Компанией исключительно в письменном виде по электронной почте zakaz@unbanalpeter.ru\n" +
    "	</p>\n" +
    " \n" +
    "	<b>В случае несвоевременной аннуляции с Клиента взимается штраф:</b>\n" +
    "	\n" +
    "	<b>Если клиент предупреждает об отмене:</b>\n" +
    "	<ul>	\n" +
    "		<li>— более чем за 7 суток до начала оказания услуг штрафные санкции не применяются.</li>\n" +
    "		<li>— от 6 до 4 суток – штрафные санкции 25% от стоимости турпродукта</li>\n" +
    "		<li>— от 3 до 2 суток – штрафные санкции 50% от стоимости турпродукта</li>\n" +
    "		<li>— до 1 суток – штрафные санкции 100% от стоимости турпродукта</li>\n" +
    "	 </ul>\n" +
    "	 \n" +
    "	<b>В силу обстоятельств:</b>\n" +
    "	<p>\n" +
    "	Экскурсия может быть перенесена на другое время в силу погодных и других обстоятельств, не зависящих от воли сторон. \n" +
    "	В таком случае клиенту предоставляется возможность перенести экскурсию на другое удобное время, дополнительная плата не взимается.\n" +
    "	</p>\n" +
    "</div>");
}]);

angular.module("contacts.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("contacts.tpl.html",
    "<div class=\"company-contacts\">\n" +
    "	Главная > Контакты\n" +
    "	\n" +
    "	<h1>Контакты</h1>\n" +
    "	\n" +
    "	<b>Наши телефоны:</b>\n" +
    "	\n" +
    "	<ul>\n" +
    "		<li>8 (812) 509-66-42 (c 10:00 до 20:00)</li>\n" +
    "		<li>8 (812) 989-16-42 (c 10:00 до 21:00)</li>\n" +
    "		<li>8 (911) 156-33-01 (с 10:00 до 21:00)</li>\n" +
    "	</ul>\n" +
    "\n" +
    "	<p>	\n" +
    "	SMS 8952-289-16-42\n" +
    "	Часы работы офиса:\n" +
    "	Ежедневно с 11:00 до 20:00\n" +
    "	</p>\n" +
    "	\n" +
    "	<p>\n" +
    "	Внимание! Пожалуйста, заблаговременно договоритесь с менеджером о встрече, во избежании ситуации при которой все специалисты будут заняты и не смогут Вас проконсультировать.\n" +
    "	</p>\n" +
    "	\n" +
    "\n" +
    "	<p>	\n" +
    "	E-mail:<br>\n" +
    "	Прием заявок 24 часа: zakaz@unbanalpeter.ru<br>\n" +
    "	Сотрудничество: piter-gid@yandex.ru<br>\n" +
    "	</p>\n" +
    "</div>");
}]);

angular.module("excursionItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("excursionItem.tpl.html",
    "<div>\n" +
    "	{{item.currentItem.id}}\n" +
    "	\n" +
    "	<div ng-include src=\"'partial-test1.tpl.html'\"/></div>\n" +
    "</div>");
}]);

angular.module("partial-test1.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("partial-test1.tpl.html",
    "<div style=\"color:red\">\n" +
    "	test\n" +
    "</div>");
}]);

angular.module("main.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("main.tpl.html",
    "<div class=\"excursion-list-wrapper\">\n" +
    "	<div class=\"card\" ng-repeat=\"item in main.excursions\">\n" +
    "		<div class=\"img-wrapper\">\n" +
    "			<img src=\"./images/excursions/4XfCDAb0QN8.310x310.jpg\">\n" +
    "		</div>\n" +
    "		<p class=\"excursion-date\"> 16 марта 2017</p>\n" +
    "		<p class=\"excursion-name\">{{item.name}}</p>\n" +
    "		<div class=\"excursion-details\">\n" +
    "			<p>\n" +
    "				<span class=\"excursion-duration\">{{item.duration}}</span>\n" +
    "				<span class=\"excursion-type\"> {{item.type}}</span>\n" +
    "			</p>\n" +
    "			<span class=\"excursion-price\">{{item.price}} Р</span>\n" +
    "			<button ng-click=\"main.goToDetails(item)\">Подробнее</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "<div class=\"excursion-list-wrapper\">\n" +
    "	<div class=\"card\">\n" +
    "		<div class=\"img-wrapper\">\n" +
    "			<img src=\"./images/excursions/4XfCDAb0QN8.310x310.jpg\">\n" +
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
    "			<img src=\"./images/excursions/135.310x310.jpg\">\n" +
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
    "			<img src=\"./images/excursions/DIM_7273.310x310.jpg\">\n" +
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
    "</div>-->");
}]);

angular.module("schedule.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("schedule.tpl.html",
    "<div class=\"schedule\">\n" +
    "	Главная > Расписание\n" +
    "</div>");
}]);
