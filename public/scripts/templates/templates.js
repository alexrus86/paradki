angular.module('templates.app', ['about.tpl.html', 'booking.tpl.html', 'menuButtonComponent.tpl.html', 'contacts.tpl.html', 'excursionItem.tpl.html', 'partial-test1.tpl.html', 'main.tpl.html', 'schedule.tpl.html']);

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

angular.module("menuButtonComponent.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("menuButtonComponent.tpl.html",
    "<div class=\"compressed-menu\">\n" +
    "	<div class=\"menu-btn\" ng-click=\"mbCtrl.showMenu()\">\n" +
    "		<span></span>\n" +
    "		<span></span>\n" +
    "		<span></span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"modalMenu\">\n" +
    "	<ul>\n" +
    "		<li><a href=\"#main\">Экскурсии</a></li>\n" +
    "		<li><a href=\"#shedule\">Расписание</a></li>\n" +
    "		<li><a href=\"#booking\">Как заказать</a></li>\n" +
    "		<li><a href=\"#about-us\">О нас</a></li>\n" +
    "		<li><a href=\"#contacts\">Контакты</a></li>\n" +
    "	</ul>\n" +
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
    "<div class=\"excursion-item\">\n" +
    "	<p>\n" +
    "		<span ng-click=\"\">На главную</span>\n" +
    "		<span class=\"delimeter\"></span>\n" +
    "		<span>{{itemCtrl.currentItem.name}}</span>\n" +
    "	</p> \n" +
    "	<h2>Наименование экскурсии &nbsp{{itemCtrl.currentItem.name}}</h2>\n" +
    "	<hr>\n" +
    "	<div class=\"item-gallery\">\n" +
    "		<div id=\"slideshow1\"></div>\n" +
    "		<div>\n" +
    "			<ul id=\"slideshow1_thumbs\" class=\"\">\n" +
    "				<li ng-repeat=\"item in itemCtrl.photosArr\">\n" +
    "					<a ng-href=\"{{item.img}}\">\n" +
    "						<img ng-src=\"{{item.thumb}}\">\n" +
    "					</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<hr>\n" +
    "	<div class=\"excursion-chars\">\n" +
    "		<span class=\"excursion-duration\">Продолжительность - &nbsp<b>{{itemCtrl.currentItem.duration}}</b></span>\n" +
    "		<span class=\"\">Транспорт - &nbsp<b>{{itemCtrl.currentItem.type}}</b></span>\n" +
    "	</div>\n" +
    "	<hr>\n" +
    "	\n" +
    "	<div class=\"excursion-item-description\" ng-include src=\"'partial-test1.tpl.html'\"/></div>\n" +
    "</div>");
}]);

angular.module("partial-test1.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("partial-test1.tpl.html",
    "<p>\n" +
    "	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sagittis turpis. Maecenas et fringilla justo. Nulla lacinia euismod nulla, et aliquam leo interdum eget. Donec mauris tortor, rhoncus sit amet ullamcorper vitae, dignissim sed mi. Vestibulum finibus tincidunt ante, sed porta risus pretium et. Sed pharetra imperdiet urna, nec sodales massa euismod ac. Nam in ornare metus. Aliquam commodo elementum hendrerit.\n" +
    "\n" +
    "Suspendisse potenti. Curabitur in sollicitudin arcu. Aliquam at urna lacinia, euismod massa vitae, egestas nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat diam nunc, nec commodo sem lobortis sit amet. Curabitur luctus nisl sed neque viverra, in molestie lacus posuere. Pellentesque nec pharetra turpis. Sed quam augue, porttitor eget libero a, convallis porttitor elit. Sed imperdiet sodales eros nec gravida. Nulla facilisi.\n" +
    "\n" +
    "Ut semper arcu sit amet risus mattis, ut cursus quam pulvinar. Quisque convallis rutrum ipsum, nec suscipit mauris dictum et. Cras non malesuada libero. Curabitur interdum ullamcorper odio, a ullamcorper lectus rhoncus et. Sed vel ullamcorper enim, vitae porta quam. Phasellus placerat nulla est, sed sagittis odio pellentesque ac. Praesent posuere arcu vel pellentesque elementum. Nullam commodo leo non sapien volutpat, vel pulvinar tortor efficitur. Donec sem ipsum, molestie sit amet lacinia vitae, posuere vel justo. Pellentesque gravida pulvinar ipsum pellentesque aliquet. Mauris condimentum pellentesque bibendum. Cras mauris nibh, egestas eu felis sed, viverra suscipit eros. Curabitur volutpat eleifend tristique. Nunc pretium placerat felis, sit amet posuere neque bibendum in. Donec rutrum interdum dictum. Phasellus rhoncus varius justo.\n" +
    "\n" +
    "Morbi non nisi vehicula, molestie sapien sit amet, ultricies purus. Morbi lectus ipsum, fermentum eget rutrum sit amet, dictum vel ex. Aliquam ullamcorper, justo at condimentum egestas, lorem purus egestas magna, sit amet posuere dui velit quis erat. Cras et vehicula turpis. Praesent porttitor ornare ex, ut rhoncus mauris laoreet eget. Quisque erat tortor, pulvinar a porttitor in, cursus consequat mauris. Nunc eu condimentum augue, eget gravida ante. Nulla augue neque, rhoncus eget nisi ac, varius tempor velit. Proin ut ultrices nisi.\n" +
    "\n" +
    "Sed et ex interdum, posuere massa vitae, pretium dolor. Vivamus ullamcorper ac est id hendrerit. Morbi vulputate sapien ut est pulvinar finibus. Etiam vitae bibendum nisl, a congue turpis. Phasellus aliquet id ligula eget auctor. Donec mattis mi sit amet felis mollis feugiat. Pellentesque semper eu mauris sed auctor. Fusce ultricies quam quis nunc auctor, a mattis mauris auctor. Vestibulum tristique vulputate nisi pretium lobortis. Curabitur eros turpis, dapibus eu lorem nec, consectetur iaculis nisl. Nam et urna mauris. Suspendisse potenti. Maecenas ac tincidunt diam. Nullam vestibulum magna sem, ac efficitur nibh molestie et. Aliquam dapibus feugiat dolor sollicitudin sollicitudin. Pellentesque suscipit, odio in rutrum egestas, diam diam pharetra purus, convallis porttitor nunc nisi eget risus.\n" +
    "</p>");
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
    "");
}]);

angular.module("schedule.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("schedule.tpl.html",
    "<div class=\"schedule\">\n" +
    "	Главная > Расписание\n" +
    "</div>");
}]);
