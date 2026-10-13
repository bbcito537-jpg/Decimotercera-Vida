'use strict';
// NUESTRA DECIMOTERCERA VIDA — Para Bella, de tu chinito.
// No necesita imágenes ni archivos de audio: el piano se genera en el navegador.
const $=s=>document.querySelector(s);
const chapters=[
{title:'Cuando el mundo todavía era piedra',date:'24 000 a. C. · El valle de las trece montañas',kind:'Vida I',secret:'Tzuyu asegura que él inventó el fuego. La tribu no está convencida.',paragraphs:[
'Antes de que existieran las palabras bonitas, Angelo era, según él mismo, el cazador más valiente de su tribu. Según Bella, era más bien el muchacho que tropezaba con las mismas piedras todos los días. Una mañana quiso impresionarla acercándose a una criatura enorme junto al río. La criatura abrió un ojo y el valiente cazador salió corriendo. Bella se rio tanto que tuvo que sentarse en el suelo.',
'Los acompañaba Tzuyu, una bolita de pelaje blanco con una manchita negra en la oreja y el extraño talento de robar comida sin que nadie lo viera. Aquella noche, Angelo invitó a Bella a una cueva que había preparado en secreto. En la pared había dibujado trece estrellas, dos figuras tomadas de la mano y una criatura diminuta que se parecía sospechosamente a Tzuyu.',
'No conocían los anillos, los aniversarios ni las promesas escritas. Pero Bella apoyó su cabeza en el hombro de Angelo, él la cubrió con una manta y Tzuyu se acomodó entre ambos. Con los años llenaron aquellas paredes de dibujos de sus aventuras; incluso cuando su cabello se volvió blanco, regresaban a contemplarlos.',
'Y así, mucho antes de que existieran las palabras «te amo», ya habían aprendido a decirse «quédate».'
]},
{title:'La princesa y el caballero sin remedio',date:'1313 · Reino de las Rosas Azules',kind:'Vida II',secret:'Tzuyu fue coronado rey de los cojines durante trece años consecutivos.',paragraphs:[
'Bella era la princesa de un reino lleno de jardines y torres azules. Los trovadores escribían canciones sobre sus ojos; el gato real, Tzuyu, prefería dormir sobre las partituras. Angelo era un caballero recién nombrado cuya armadura sonaba como una cocina entera. Su caballo no le obedecía y una vez entró al establo creyendo que era el salón de banquetes.',
'Cuando un dragón comenzó a sobrevolar el castillo, Angelo se ofreció a derrotarlo. Bella lo acompañó a escondidas, porque no pensaba dejarlo perderse en el primer bosque. Tras trece días encontraron al dragón: estaba llorando porque no encontraba a su cría. En lugar de luchar, los dos ayudaron a reunir a la familia. Tzuyu, naturalmente, se hizo amigo del dragón pequeño y le enseñó a pedir comida con mirada inocente.',
'El rey quiso premiar al caballero con oro, pero Angelo solo pidió seguir acompañando a Bella. Ella sonrió: «No necesito que nadie te dé permiso para estar conmigo. Eso lo decido yo». Gobernaron juntos cuando llegó su momento y construyeron un refugio para dragones en el jardín.',
'Angelo jamás fue el caballero más elegante, pero sí el que convirtió las aventuras de Bella en aventuras compartidas.'
]},
{title:'Dos gatitos y un tejado',date:'Una noche de primavera · Ciudad de las lunas pequeñas',kind:'Vida III',secret:'El inventario secreto de Tzuyu: trece tapitas, cinco plumas y una media ajena.',paragraphs:[
'En aquella vida, Bella y Angelo tenían bigotes, cuatro patitas y una opinión muy seria sobre las siestas. Bella era una gatita de ojos color miel que recorría los tejados como una reina. Angelo, un gato muy presumido, intentaba impresionarla con saltos heroicos que generalmente terminaban en un arbusto.',
'Se conocieron una tarde lluviosa. Angelo apareció con una flor entre los dientes, pero estornudó justo cuando iba a entregársela. La flor salió volando; Bella soltó un maullido que sonó sospechosamente a carcajada. De todos modos, lo dejó sentarse a su lado, debajo del balcón.',
'Encontraron un ático calentito y lo convirtieron en su hogar. Allí cuidaron a su pequeño Tzuyu, un gatito blanco con ojos verdes y una orejita manchada, especialista en despertarlos cuando por fin estaban cómodos. Corrían detrás de las mariposas, compartían rayitos de sol y dormían hechos una sola bolita de pelos. Una noche Angelo llevó trece florecitas hasta su rincón favorito y Bella las guardó como si fueran tesoros.',
'Los años les quitaron agilidad para saltar, pero no las ganas de acostarse juntos. Cada vez que Bella se acercaba, Angelo ronroneaba. Algunas maneras de querer no necesitan palabras.'
]},
{title:'El vampiro que le temía a una sonrisa',date:'1786 · Castillo de la Luna Carmesí',kind:'Vida IV',secret:'Tzuyu podía atravesar paredes. Solo lo hacía para entrar a la cocina.',paragraphs:[
'Angelo llevaba siglos intentando parecer el vampiro más misterioso del continente: capa negra, mirada seria, apariciones dramáticas. Una noche encontró a Bella paseando por un jardín. «No deberías estar aquí a estas horas», dijo con voz profunda. Ella lo miró de arriba abajo y preguntó: «¿Por qué llevas una cortina amarrada al cuello?». Era su capa favorita. Se quedó sin respuesta.',
'Comenzó a visitarla cada noche. Primero inventaba pretextos; después, simplemente llegaba para escucharla hablar. Tzuyu, un gato blanco encantado que llevaba muchísimo tiempo acompañándolo, decidió que Bella era digna de sus ronroneos. Aquello era un honor que no concedía casi nunca.',
'Una noche Bella encontró una habitación con trece relojes detenidos. Angelo confesó que los había guardado intentando retener instantes que no quería perder. Ella tomó uno, lo puso en marcha y se lo devolvió: «Entonces no guardes más tiempo. Vivámoslo». Desde aquella noche el castillo se llenó de flores, música, risas y un Tzuyu que dormía donde se le antojaba.',
'Y el vampiro que había aprendido a contar siglos solo comenzó a contar los días que tenía la suerte de compartir con ella.'
]},
{title:'Amor en tiempos de dinosaurios',date:'Hace 66 millones de años · El valle perdido',kind:'Vida V',secret:'Registro prehistórico: Tzuyu persiguió la misma mariposa durante trece kilómetros.',paragraphs:[
'Bella y Angelo eran pequeñas criaturas prehistóricas en un mundo inmenso. Ella sabía encontrar comida, refugios y caminos seguros. Él se consideraba un gran explorador, aunque la mayoría de sus expediciones terminaban con Bella rescatándolo. Cuidaban a Tzuyu, una criaturita peluda con cola larguísima y ojos verdes, capaz de desafiar a cualquier dinosaurio… siempre que el dinosaurio fuera muy, muy pequeño.',
'Un día Tzuyu vio una mariposa brillante y salió tras ella. Angelo corrió detrás de Tzuyu. Bella, suspirando, tuvo que ir a buscar a los dos. Cruzaron pantanos, se escondieron de reptiles gigantes y terminaron tras una cascada, donde descubrieron un valle secreto lleno de frutas y agua cristalina.',
'«¡Lo encontré!», anunció Angelo con orgullo. «Encontraste a Tzuyu», corrigió Bella. Decidieron quedarse allí y construyeron un refugio bajo los árboles más altos. Pasaron años recorriendo el valle, compitiendo en carreras y protegiendo a su pequeño aventurero.',
'Cuando el cielo empezó a cambiar, los tres se resguardaron juntos. Me gusta imaginar que, mientras las trece estrellas de su valle brillaban, Bella y Angelo descubrieron que la mayor aventura siempre había sido acompañarse.'
]},
{title:'Error 013: sentimientos no autorizados',date:'3026 · Ciudad Neón',kind:'Vida VI',secret:'Tzuyu.exe continúa ejecutándose. Se recomienda alejar las baterías.',paragraphs:[
'En una ciudad de luces y edificios flotantes vivían dos robots extraordinarios: A-13 y B-13. Angelo estaba programado para proteger instalaciones; Bella, para inventar nuevas tecnologías. Todo funcionaba perfectamente hasta que una mañana ella dijo «jummmm» y el sistema de Angelo se congeló. ERROR 013: EMOCIÓN DESCONOCIDA.',
'Bella intentó repararlo, pero descubrió que ella también sufría errores: sonreía al verlo, esperaba sus mensajes y había construido un gato robótico llamado Tzuyu para que los acompañara. Tzuyu tenía ojos verdes luminosos, orejas móviles y un talento inexplicable para robarles los cargadores.',
'Cuando la ciudad ordenó borrar sus memorias defectuosas, los tres escaparon por túneles de neón hasta una estación olvidada. Bella examinó el error de Angelo una última vez. La pantalla parpadeó: «ESTADO: CORRECTO. DESCRIPCIÓN: AMOR». Se miraron y se rieron. En ese preciso momento Tzuyu mordió el cable principal y apagó la estación entera.',
'En la oscuridad, Angelo encontró la mano de Bella. Habían sido construidos para cumplir instrucciones, pero juntos habían aprendido algo mucho más importante: elegir.'
]},
{title:'La pirata y el mapa imposible',date:'1694 · Mar de las Trece Islas',kind:'Vida VII',secret:'Se busca: Tzuyu, pirata de las sardinas. Recompensa: un pescado.',paragraphs:[
'La capitana Bella comandaba un barco al que ningún marinero se atrevía a seguir demasiado cerca. Era valiente, decidida y bastante estricta con su tripulación. Angelo llegó a bordo por un motivo poco glorioso: se subió al barco equivocado. Cuando descubrió que eran piratas ya habían zarpado. Bella decidió dejarlo quedarse porque le hacía gracia cómo intentaba parecer tranquilo.',
'Tzuyu era el gato del barco, con un pañuelo diminuto y una reputación terrible entre los barriles de pescado. Juntos encontraron un mapa que prometía el tesoro más valioso del océano. Navegaron trece noches, atravesaron una tormenta y descendieron a una cueva iluminada por luciérnagas. Al fondo había un cofre enorme.',
'Adentro solo encontraron un espejo. Angelo miró el reflejo: Bella estaba detrás de él, sonriendo, con Tzuyu en brazos. «Creo que entiendo cuál es el tesoro», empezó. «Como digas una cursilería, te lanzo por la borda», advirtió ella, riéndose. Regresaron sin oro, pero con la mejor anécdota de su tripulación.',
'Siguieron navegando durante años, discutiendo amistosamente quién había robado más besos. El verdadero tesoro nunca estuvo enterrado: viajaba con ellos.'
]},
{title:'El lugar donde se apagaron las estrellas',date:'901 · Pueblo del cielo gris',kind:'Vida VIII',secret:'Tzuyu, zorro de luz, cree que todas las estrellas son juguetes suyos.',paragraphs:[
'En un pueblo donde el cielo permanecía cubierto, nadie recordaba cómo se veía una estrella. Nadie, excepto Bella, seguía preguntándose qué habría detrás de las nubes. Cada noche subía a una colina, y Angelo empezó a acompañarla solo para escuchar las cosas maravillosas que imaginaba.',
'Una tarde Tzuyu, un pequeño zorro blanco con una oreja oscura, desenterró una piedra que parecía tener luz propia. Bella descubrió que existían otras escondidas entre el río y el bosque. Durante trece noches reunieron aquellas luces en una antigua torre de la montaña. No fue fácil: caminaron bajo la lluvia, se perdieron dos veces y Tzuyu intentó llevarse varias piedras para su colección privada.',
'Cuando encendieron la lámpara de la torre, una franja luminosa abrió las nubes. Por primera vez el pueblo entero vio las estrellas. Bella alzó el rostro emocionada y Angelo la miró en silencio: había pasado tantas noches buscando luz para ella, que no había notado que su sonrisa ya iluminaba su mundo.',
'Desde entonces cuidaron la lámpara juntos. Aprendieron que incluso cuando algo hermoso parece escondido, vale la pena seguir buscándolo acompañados.'
]},
{title:'La inventora y el muchacho de las canciones',date:'1913 · Una ciudad junto al mar',kind:'Vida IX',secret:'Tzuyu compuso su primera obra: trece notas pisadas al azar.',paragraphs:[
'Bella tenía un taller lleno de herramientas, relojes y máquinas que parecían imposibles. Angelo tocaba el piano en un café cercano. Se conocieron cuando él llegó con un reloj estropeado. «Se detuvo a las 13:13», explicó muy serio. «Los relojes normales no tienen esa hora», contestó ella. «Entonces el mío es extraordinario». Bella soltó una carcajada que él quiso escuchar otra vez.',
'Comenzó a visitarla con excusas cada vez menos convincentes. A veces llevaba melodías nuevas; otras simplemente ayudaba a ordenar el taller. Tzuyu, el gato blanco que Bella había rescatado, elegía siempre el piano como lugar de siesta y ocasionalmente contribuía a las composiciones caminando sobre las teclas.',
'Una tarde Bella terminó un invento secreto: una cajita musical hecha con trece engranajes. Al abrirla sonaba la primera melodía que Angelo había escrito para ella. En la tapa había grabado: «Para que puedas escucharme incluso cuando no esté tocando». Años después trabajaban juntos en una tienda pequeña llena de música, relojes y olor a café.',
'No fueron famosos ni necesitaron serlo. Su casa siempre estuvo llena de canciones, y cada una guardaba alguna manera distinta de decirse que se querían.'
]},
{title:'La brujita y el muchacho convertido en rana',date:'1470 · Bosque de las trece lunas',kind:'Vida X',secret:'Tzuyu puede volverse invisible. Curiosamente, su plato nunca desaparece.',paragraphs:[
'Bella vivía en un bosque encantado donde las flores crecían incluso en invierno. Era una brujita brillante, capaz de hablar con los árboles y curar criaturas heridas. Tzuyu, su gato mágico, podía desaparecer, volverse nube y aparecer instantáneamente junto a cualquier plato de comida.',
'Angelo llegó una tarde buscando una poción de valor. «¿Para qué la quieres?», preguntó Bella. «Para decirle a una muchacha que me gusta». Ella preparó una mezcla azul; Tzuyu saltó sobre la mesa, tiró la botella y, entre una nube de humo, Angelo se convirtió en una rana. Bella tardó trece minutos en parar de reírse antes de devolverlo a su forma humana.',
'«Y bien, ¿quién es la muchacha?», quiso saber. Angelo, todavía con una hoja pegada al cabello, respondió: «Tú». Por primera vez en su vida Bella se quedó sin hechizos ni palabras. Después sonrió y lo invitó a quedarse a cenar.',
'Con los años construyeron juntos un jardín maravilloso. Angelo aprendió magia y era terrible: convirtió una vez las cortinas en mariposas y otra hizo cantar a las zanahorias. A Bella nunca le importó. Su encanto favorito era la manera en que aquel muchacho llenaba de risas los días normales.'
]},
{title:'Una película cada noche',date:'2083 · La casita de las ventanas amarillas',kind:'Vida XI',secret:'Tzuyu es dueño legal del sofá. Los humanos cuentan con permiso provisional.',paragraphs:[
'En esta vida no salvaron un reino ni cruzaron galaxias. Vivían en una casa pequeña con un jardín bonito y una sala llena de fotografías. Habían envejecido juntos. Angelo tenía el cabello blanco y seguía contando chistes malos; Bella conservaba su sonrisita y aquel «jummmm» que llevaba toda una vida haciéndolo sonreír.',
'Tzuyu dormía en una manta junto al sofá y se consideraba propietario de todos los cojines. Los tres tenían una costumbre sagrada: una película cada noche. A veces de terror, otras de aventuras, y de vez en cuando tardaban tanto decidiendo cuál ver que acababan quedándose dormidos antes de empezar.',
'Una tarde encontraron una caja con trece recuerdos de su juventud: boletos, cartas, fotografías, una flor seca. Los repasaron uno por uno y recordaron viajes, risas, pequeñas discusiones que terminaron en abrazos y sueños que sí habían conseguido cumplir. Cuando acabaron, ya era de noche. «¿Ponemos una peli, mami?», preguntó Angelo. «Claro, viejito», respondió Bella.',
'Se sentaron juntos, Tzuyu se acomodó entre los dos y, una vez más, no llegaron al final de la película. Tal vez aquella vida no tuvo dragones. Tuvo algo incluso más bonito: miles de noches compartidas.'
]},
{title:'La última nave del universo',date:'3226 · Más allá de las estrellas conocidas',kind:'Vida XII',secret:'Advertencia espacial: el capitán Tzuyu ha requisado trece galletitas.',paragraphs:[
'Angelo y Bella exploraban galaxias en busca de un nuevo hogar. Su pequeña nave tenía ventanas enormes y un tripulante especialmente travieso: Tzuyu, un gato espacial con patitas magnéticas, un traje a medida y la costumbre de flotar boca abajo cuando desactivaban la gravedad.',
'Visitaron planetas con océanos violetas, bosques que brillaban y montañas de cristal. Cada sitio parecía increíble, pero ninguno terminaba de sentirse suyo. Cuando la energía de la nave comenzó a agotarse, Bella encontró una señal procedente de la estrella número trece de una carta antigua. Decidieron seguirla.',
'Detrás de una nube cósmica encontraron un planeta azul con aire limpio, mares inmensos y amaneceres dorados. Descendieron sobre una colina. Bella caminó unos pasos; Angelo bajó llevando a Tzuyu en brazos. «¿Crees que este podría ser nuestro hogar?», preguntó ella. Él miró el horizonte y después la sonrisa de Bella. «Creo que cualquier lugar podría serlo si estamos los tres».',
'Construyeron una casa con una ventana enorme frente al cielo. Y después de viajar por todo el universo, descubrieron que hogar no era el planeta que habían encontrado: era la vida que decidieron construir en él.'
]},
{title:'Nuestra decimotercera vida',date:'2026 · El único mundo que no tuvimos que inventar',kind:'Vida XIII',secret:'Aquí no hay secreto: el verdadero milagro es que estos recuerdos sí son nuestros.',paragraphs:[
'Y entonces llegamos aquí. A nuestra decimotercera vida. Después de doce mundos imposibles, doce historias distintas y tantos caminos para encontrarnos, el universo decidió quitarnos los castillos, las naves, las espadas y los hechizos. Nos dejó siendo simplemente Angelo y Bella. Y, curiosamente, nos dio algo que ninguna de las otras vidas había tenido: un número al que nosotros mismos le daríamos significado.',
'Me acuerdo de cómo empezó. «Mi amor, te lo juro que se me está apareciendo el número trece por todos lados», me decías. Te emocionabas muchísimo, te reías y me lo contabas como si fuera una señal. A mí me encantaba escucharte. No porque el número tuviera algún poder secreto, sino porque algo tan pequeñito lograba ponerte así de feliz. Entonces se me ocurrió compartirlo contigo. Fue una idea medio caprichosa: quería que algo tan importante para ti también se volviera especial para mí.',
'Y mira lo que pasó. Lo llenamos de recuerdos, de trece besitos, de bromas, de mil trescientos años inventados y de la promesa de encontrarnos durante trece vidas. Inventamos futuros que todavía no suceden y terminamos queriendo mucho a un número que antes no significaba nada para mí. Ahora, cuando aparece, pienso en nosotros.',
'Pero, mami, ¿sabes qué hace que esta vida sea mucho más fantástica que las doce anteriores? Que aquí tus ojitos café con miel existen de verdad. Y están más preciosos que nunca. No necesito verte como una princesa ni colocar mil estrellas sobre tu cabeza para encontrar algo extraordinario en ti. Tengo tu sonrisita, tu voz, esa forma tan tierna de hacer «jummmm» cuando finges quejarte, y las risitas que me contagias sin darte cuenta.',
'Estos últimos días contigo se han sentido como un sueño bonito. Me encanta lo bien que nos estamos tratando, la conexión tan grande que siento y cómo hasta las cosas más pequeñas se vuelven recuerdos especiales. Siento que cada vez eres más abierta conmigo y me permites conocer un poquito más a esa niña preciosa que llevas dentro. Me encanta descubrirte con calma. Me encanta que sigamos aprendiendo el uno del otro.',
'Y en esta vida también tenemos a nuestro Tzuyu. No es un zorro luminoso, ni un robot travieso, ni un gato que atraviesa paredes. Es nuestro hijito de pelito blanco, ojitos verdes, una manchita negra en la oreja y collar rosa. Ver cómo le das cariño, cómo lo cuidas y cómo le hablas bonito me provoca una ternura inmensa. A veces basta con escucharte darle amor para que mi día sea mejor.',
'Cuando imagino el futuro contigo, no necesito empezar por una aventura imposible. Pienso en una casa, en acostarnos a ver una película cada noche, en discutir un ratito por cuál elegir y en terminar riéndonos de cualquier tontería. Pienso en una peli de terror, en quedarnos hablando después de los créditos y en Tzuyu apropiándose del sitio más cómodo. Imagino todos esos pequeños momentos y me parecen increíbles.',
'Así que, después de doce vidas en las que fuimos caballeros, cavernícolas, gatitos, robots, piratas y viajeros del universo, tengo algo muy claro: me encanta ser tu novio en esta. Me encanta que seas mi Bella. Me encanta que hayamos hecho de un simple trece un lugarcito donde guardar promesas y recuerdos.',
'Y tal vez aquí esté el secreto más bonito. Esta es nuestra vida número trece, la última antes de que el ciclo vuelva a empezar. Pero llegar a trece no significa que nuestra historia se acabe. Podemos imaginar que, al cerrar este libro, el universo vuelve a abrir la primera página. Y si un día somos gatos, te buscaré en los tejados; si somos robots, mi sistema fallará al escuchar tu «jummmm»; si somos cavernícolas, intentaré no salir corriendo frente a ti.',
'Y si volvemos a ser dos personas normales, espero volver a encontrar a la muchacha de ojos café con miel que convirtió un número en una promesa. Feliz 13 de octubre, mi tortuguita. De todas las historias que imaginamos, qué suerte la mía poder vivir esta contigo.'
]}
];
const memories=[
{label:'LA PRIMERA ESTRELLA',title:'Todo empezó contigo',paragraphs:['«Mi amor, te lo juro que se me está apareciendo el número trece por todos lados».','Te emocionabas, te reías y me lo contabas como si el universo te estuviera guiñando un ojo. Y yo terminaba sonriendo contigo.']},
{label:'LA SEGUNDA ESTRELLA',title:'Un capricho que elegí compartir',paragraphs:['Un día quise que tu número favorito también fuera el mío. Al principio era un capricho, de esos que nacen porque me encanta compartir contigo hasta las cosas pequeñitas.','No me importaba el número por sí solo. Me importaba que a ti te importara. Y, sin darme cuenta, comenzó a importarme muchísimo.']},
{label:'LA TERCERA ESTRELLA',title:'El número se volvió nuestro',paragraphs:['Y entonces llegaron los recuerdos. Trece besitos. Las bromas. Mil trescientos años. La idea de encontrarnos en trece vidas diferentes.','Ya no era solo una casualidad que aparecía por todas partes. Se convirtió en una promesa, en futuros que todavía no suceden y en una forma bonita de decir «nosotros».']}
];
const futureLetter=[
'¡HOLAAAA, MAMIIII! Soy el Angelo del futurooooo. Sí, sí, tu chinito, pero con unos cuantos añitos más encima, JAJAJA.',
'Vengo a contarte algo: acabo de terminar nuestra decimotercera vida juntos y… ¡BUAFFFFFFF! Mami, no tienes idea de lo que te espera. Fue una vida única. Nos reímos de muchísimas tonterías, construimos recuerdos preciosos y vivimos tantos momentos bonitos que necesitaría otro libro para contártelos.',
'Y mira que hemos vivido cosas increíbles. Fuimos cavernícolas, viajeros espaciales y hasta gatitos. Pero esta fue de mis favoritas. No porque fuera perfecta ni porque cada día pasara algo extraordinario. Sino porque éramos nosotros. Tú, yo y nuestro Tzuyu. Hasta una noche cualquiera viendo una película se convirtió en uno de nuestros recuerdos favoritos.',
'Así que disfruta mucho de tu Angelo de este tiempo, mami. Abrázalo, ríete con él, dile tus «jummmm» y sigan construyendo recuerdos. En mi opinión, estos son unos de los mejores Angelo y Bella de nuestras trece vidas.',
'Bueno, preciosa, ya me tengo que ir. Hay una nueva primera vida esperándome y me toca encontrar a tu siguiente versión. Tal vez seremos humanos, tal vez gatitos… ¡o dos dinosaurios bastante feos, JAJAJA! Lo único que sé es que quiero encontrarte otra vez.',
'Porque trece vidas nunca fueron suficientes para quererte. Nos vemos en la siguiente vidaaaaa, mamiiii. — Tu chinito de la vida XIII. 🖤 ♾️ 💚'
];
const pages=[{type:'cover'},{type:'prologue'},...chapters.map((chapter,i)=>({type:'chapter',chapter,index:i})),{type:'letter'},{type:'backcover'},{type:'secretPanel'},{type:'rebirth'}];
let current=0,seen=new Set(),musicOn=true,piano=null;
function show(id){document.querySelectorAll('.scene').forEach(e=>e.classList.toggle('active',e.id===id));window.scrollTo(0,0)}
function safe(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
function paragraphs(arr){return arr.map((p,i)=>`<p${i===arr.length-1?' class="emphasis"':''}>${safe(p)}</p>`).join('')}
function render(){const page=pages[current],inner=$('#bookInner');let markup='';
if(page.type==='cover')markup=`<div class="cover-page"><div class="eyebrow">PARA BELLA, DE SU CHINITO</div><div class="cover-constellation">✧13✧</div><h2>Nuestra<br>decimotercera vida</h2><p>Un amor que aprendió a contar hasta trece.</p><div class="cover-credit">TRECE VIDAS · UNA PROMESA</div><p style="font-size:1rem;margin-top:30px">Toca «Siguiente» para abrir el libro ✦</p></div>`;
if(page.type==='prologue')markup=`<div class="book-title-mark">✦ ✧ ✦</div><div class="book-chapter">PRÓLOGO</div><h2>Antes de que existieran los recuerdos</h2>${paragraphs(['Dicen que el universo es demasiado grande para que dos almas se encuentren dos veces. Tal vez una sola vez ya sea una casualidad extraordinaria. Pero imagina por un momento que hubiera dos personas tan tercas que, incluso olvidando sus nombres y sus rostros, siguieran encontrando el camino de regreso.','En algunas vidas fueron humanos; en otras, criaturas imposibles. A veces vivieron grandes aventuras y otras solamente compartieron un hogar, una ventana y las pequeñas costumbres de cada día. Siempre los acompañó un pequeño tercer viajero llamado Tzuyu.','Estas son las doce vidas que tuvimos que imaginar para comprender la extraordinaria belleza de la última.'])}`;
if(page.type==='chapter'){const c=page.chapter;markup=`<div class="book-chapter">${safe(c.kind)} · ${String(page.index+1).padStart(2,'0')} / 13</div><h2>${safe(c.title)}</h2><div class="date">${safe(c.date)}</div>${paragraphs(c.paragraphs)}<button class="star-secret" id="secret" aria-label="Revelar detalle escondido">✦ 13 ✦</button><div id="secretNote" class="secret-note hidden">${safe(c.secret)}</div>`}
if(page.type==='letter')markup=`<div class="book-chapter">EPÍLOGO · MENSAJE DEL FUTURO</div><h2>Una carta desde el final del ciclo</h2>${paragraphs(futureLetter)}`;
if(page.type==='backcover')markup=`<div class="cover-page backcover-sky"><div class="backcover-stars">✧ &nbsp; ✦ &nbsp; ✧</div><div class="backcover-center">Para Bella<br><span>De tu chinito ♡</span></div><button id="openSecret" class="secret-door">¿Quieres descubrir lo que oculta el libro? ✧</button></div>`;
if(page.type==='secretPanel')markup=`<div class="future-console"><div class="console-status"><span class="status-light"></span> ARCHIVO TEMPORAL · CICLO 013</div><div class="console-lines">✦ &nbsp; ✧ &nbsp; ✦</div><div class="console-number">13 <small>/ 13</small></div><h2>Vida 13 de 13 alcanzada</h2><p>Has llegado a nuestra decimotercera vida, mami.</p><p>Cuando termines de vivirla, regresa a este pequeño rincón del universo y decide si quieres comenzar otras trece vidas conmigo.</p><p class="console-small">REGISTRO DEL UNIVERSO: EL FINAL TAMBIÉN ES UN COMIENZO</p><button class="primary" id="beginAgain">Sí, quiero otras 13 vidas contigo ♡</button></div>`;
if(page.type==='rebirth')markup=`<div class="future-console rebirth-screen"><div class="eyebrow">UN NUEVO CICLO COMIENZA</div><div class="rebirth-count"><span id="rebirthNum">13</span><small> / 13</small></div><div id="rebirthWords" class="rebirth-words">Las estrellas vuelven a contar...</div><button class="primary hidden" id="cycleRestart">Volver al comienzo de nuestra historia ✧</button></div>`;
inner.classList.remove('turn');void inner.offsetWidth;inner.innerHTML=markup;inner.classList.add('turn');inner.scrollTop=0;
$('#counter').textContent=page.type==='cover'?'Portada':page.type==='prologue'?'Prólogo':page.type==='chapter'?`${page.chapter.kind} de XIII`:page.type==='letter'?'Epílogo':page.type==='backcover'?'Contraportada':page.type==='secretPanel'?'El secreto del libro':'Un nuevo ciclo';$('#prevPage').disabled=current===0;$('#nextPage').disabled=current===pages.length-1||page.type==='backcover'||page.type==='secretPanel';$('#nextPage').textContent=page.type==='letter'?'Cerrar el libro ✦':'Siguiente →';$('#pageDots').textContent=`${current+1} / ${pages.length}`;
$('#secret')?.addEventListener('click',()=>$('#secretNote').classList.toggle('hidden'));$('#openSecret')?.addEventListener('click',()=>{current=pages.findIndex(p=>p.type==='secretPanel');render()});$('#beginAgain')?.addEventListener('click',()=>{startFinale()});$('#cycleRestart')?.addEventListener('click',()=>{current=0;render();show('sky')})}
function book(){current=0;render();show('bookScene')}
$('#start').addEventListener('click',()=>{startPiano();show('sky')});
document.querySelectorAll('.memory-star').forEach(button=>button.addEventListener('click',()=>{const n=+button.dataset.star,m=memories[n];seen.add(n);button.classList.add('done');$('#memoryCard').innerHTML=`<div class="mini-label">${safe(m.label)}</div><h3>${safe(m.title)}</h3>${paragraphs(m.paragraphs)}`;$('#skyProgress').textContent=`${seen.size} de 3 estrellas descubiertas`;if(seen.size===3)$('#formBook').classList.remove('hidden')}));
$('#formBook').addEventListener('click',()=>{animateStarsIntoHeart()});$('#revealCover').addEventListener('click',book);$('#prevPage').addEventListener('click',()=>{if(current>0){current--;render()}});$('#nextPage').addEventListener('click',()=>{if(current<pages.length-1){current++;render()}});$('#homeButton').addEventListener('click',()=>show('sky'));$('#musicToggle').addEventListener('click',()=>{musicOn=!musicOn;$('#musicToggle').textContent=`♫ Piano: ${musicOn?'ON':'OFF'}`;if(musicOn)startPiano();else stopPiano()});
let touchStart=null;$('#book').addEventListener('touchstart',e=>{touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY}},{passive:true});$('#book').addEventListener('touchend',e=>{if(!touchStart)return;let dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;if(Math.abs(dx)>75&&Math.abs(dx)>Math.abs(dy)*1.25){current=Math.max(0,Math.min(pages.length-1,current+(dx<0?1:-1)));render()}touchStart=null},{passive:true});document.addEventListener('keydown',e=>{if(!$('#bookScene').classList.contains('active'))return;if(e.key==='ArrowRight'&&current<pages.length-1){current++;render()}if(e.key==='ArrowLeft'&&current>0){current--;render()}});
function drawHeart(){const container=$('#constellation');container.innerHTML='';for(let i=0;i<13;i++){const t=(i/13)*Math.PI*2,x=16*Math.pow(Math.sin(t),3),y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);const s=document.createElement('span');s.className='heart-star';s.textContent='✦';s.style.left=`${50+x*2.25}%`;s.style.top=`${50-y*2.25}%`;s.style.animationDelay=`${i*.17}s`;container.appendChild(s)}}
// The three original stars dissolve into sparkling particles, which converge into 13 heart stars.
let transforming=false;
function animateStarsIntoHeart(){
 if(transforming)return;transforming=true;
 const origins=[...document.querySelectorAll('.memory-star')].map(el=>{const r=el.getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2}});
 show('transition');drawHeart();
 const targetEls=[...document.querySelectorAll('.heart-star')];
 targetEls.forEach(el=>el.classList.add('forming'));
 const layer=document.createElement('div');layer.className='particle-layer';document.body.appendChild(layer);
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce){targetEls.forEach(el=>el.classList.remove('forming'));layer.remove();transforming=false;return}
 const coords=targetEls.map(el=>{const r=el.getBoundingClientRect();return{x:r.left+r.width/2,y:r.top+r.height/2}});
 const parts=117;
 for(let i=0;i<parts;i++){
  const origin=origins[Math.floor(i/39)],dest=coords[i%13];
  const dot=document.createElement('i');dot.className='magic-particle';layer.appendChild(dot);
  const angle=Math.random()*Math.PI*2,spread=12+Math.random()*90;
  const dx=Math.cos(angle)*spread,dy=Math.sin(angle)*spread;
  dot.style.left=origin.x+'px';dot.style.top=origin.y+'px';
  const drift=360+Math.random()*240;
  dot.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:0},{offset:.17,transform:`translate(${dx}px,${dy}px) scale(1.6)`,opacity:1},{offset:.56,transform:`translate(${(dest.x-origin.x)*.55+dx*.6}px,${(dest.y-origin.y)*.55+dy*.6}px) scale(.9)`,opacity:.95},{transform:`translate(${dest.x-origin.x}px,${dest.y-origin.y}px) scale(.1)`,opacity:0}],{duration:1250+Math.random()*300,delay:Math.random()*190,fill:'forwards',easing:'cubic-bezier(.25,.6,.2,1)'});
 }
 setTimeout(()=>{targetEls.forEach((el,i)=>setTimeout(()=>el.classList.remove('forming'),i*34));},1100);
 setTimeout(()=>{layer.remove();transforming=false},1900);
}
// A cinematic ending, separate from the book so its treasured pages stay unchanged.
let finaleTimers=[],finaleFrame=0,finaleDots=[],finalePhase='dark';
const finaleWait=(fn,ms)=>finaleTimers.push(setTimeout(fn,ms));
function finaleShowText(html){const el=$('#finaleMessage');el.classList.remove('appear');void el.offsetWidth;el.innerHTML=html;el.classList.add('appear')}
function finaleSequenceText(html){const el=$('#finaleStories');el.classList.remove('appear');void el.offsetWidth;el.innerHTML=html;el.classList.add('appear')}
function generateFinaleDots(){
 const c=$('#finaleCanvas'),d=Math.min(devicePixelRatio||1,2),width=innerWidth,height=innerHeight;
 c.width=Math.floor(width*d);c.height=Math.floor(height*d);c.style.width=width+'px';c.style.height=height+'px';
 const ctx=c.getContext('2d');ctx.setTransform(d,0,0,d,0,0);
 finaleDots=Array.from({length:155},()=>({x:Math.random()*width,y:Math.random()*height,size:.6+Math.random()*1.65,seed:Math.random()*6.28}));
 return {ctx,width,height};
}
function heartCoord(t){return {x:16*Math.pow(Math.sin(t),3)/19,y:-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))/18}}
function drawFinale(){
 if(!$('#finale').classList.contains('visible'))return;
 const c=$('#finaleCanvas'),ctx=c.getContext('2d'),width=innerWidth,height=innerHeight,d=Math.min(devicePixelRatio||1,2);
 if(c.width!==Math.floor(width*d)||c.height!==Math.floor(height*d))generateFinaleDots();
 ctx.clearRect(0,0,width,height);
 const time=performance.now()/1000;
 for(const dot of finaleDots){let a=.3+.45*(.5+.5*Math.sin(time*1.5+dot.seed));ctx.beginPath();ctx.fillStyle=`rgba(255,232,191,${a})`;ctx.arc(dot.x,dot.y,dot.size,0,Math.PI*2);ctx.fill()}
 if(finalePhase==='heart'||finalePhase==='letters'||finalePhase==='single'){
  const count=finalePhase==='single'?1:13,scale=Math.min(width*.27,height*.25,155),centerY=height*.37;
  for(let i=0;i<count;i++){
   const pos=heartCoord(2*Math.PI*i/13),x=width/2+pos.x*scale,y=centerY+pos.y*scale;
   ctx.beginPath();ctx.fillStyle='#fff2cc';ctx.shadowColor='#f5cc8d';ctx.shadowBlur=26;ctx.arc(finalePhase==='single'?width/2:x,finalePhase==='single'?centerY:y,finalePhase==='single'?6:3.6,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
  }
 }
 finaleFrame=requestAnimationFrame(drawFinale);
}
function finaleCoreMarkup(type){const core=$('#finaleCore');core.innerHTML='';core.className='finale-core '+type;
 if(type==='letters'){
  const field=document.createElement('div');field.className='finale-letters';field.innerHTML='<span>B</span><b>✦</b><span>A</span>';core.appendChild(field);
  for(let i=0;i<46;i++){const p=document.createElement('i');p.className='letter-spark';p.style.setProperty('--x',`${(Math.random()-.5)*320}px`);p.style.setProperty('--y',`${(Math.random()-.5)*180}px`);p.style.animationDelay=`${Math.random()*.6}s`;core.appendChild(p)}
 }
}
function startFinale(){
 finaleTimers.forEach(clearTimeout);finaleTimers=[];cancelAnimationFrame(finaleFrame);
 const el=$('#finale');el.classList.add('visible');el.setAttribute('aria-hidden','false');
 $('#finaleRestart').classList.add('hidden');$('#finaleMessage').innerHTML='';$('#finaleStories').innerHTML='';
 $('#finaleNumber').innerHTML='13 <small>/ 13</small>';$('#finaleNumber').className='finale-number';$('#finaleKicker').textContent='EL UNIVERSO NOS RECUERDA';
 finalePhase='dark';finaleCoreMarkup('');generateFinaleDots();drawFinale();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const speed=reduced?.08:1;
 const at=(ms,fn)=>finaleWait(fn,Math.max(40,ms*speed));
 at(1400,()=>{$('#finaleNumber').classList.add('vanish');finaleSequenceText('El universo termina de contar...')});
 at(2950,()=>{$('#finaleNumber').innerHTML='1 <small>/ 13</small>';$('#finaleNumber').classList.remove('vanish');$('#finaleNumber').classList.add('return');finaleSequenceText('...y vuelve a empezar.')});
 at(4800,()=>{$('#finaleNumber').classList.add('vanish');finaleSequenceText('Hemos sido tantas cosas…')});
 const lines=[
 'Dos almas bajo un cielo prehistórico.',
 'Una princesa y su caballero.',
 'Dos gatitos que compartían un tejado.',
 'Dos máquinas que aprendieron a sentir.',
 'Dos viajeros que encontraron un hogar entre las estrellas.'
 ];
 lines.forEach((line,i)=>at(6500+i*2050,()=>finaleSequenceText(line)));
 at(17200,()=>{finaleSequenceText('');finalePhase='heart';finaleShowText('<strong>Pero nunca dejamos de ser nosotros.</strong>')});
 at(20200,()=>{finalePhase='letters';finaleCoreMarkup('letters');finaleShowText('Bella <span class="gold">✦</span> Angelo')});
 at(23300,()=>{finaleCoreMarkup('');finalePhase='heart';finaleShowText('Si el universo me concediera otras trece vidas,<br>no pediría cambiar nada de ti.')});
 at(26900,()=>finaleShowText('<strong>Solo pediría volver a encontrarte.</strong>'));
 at(29900,()=>{finalePhase='single';$('#finaleKicker').textContent='NUESTRA PRÓXIMA PRIMERA VIDA';finaleShowText('<strong>¿Nos vemos en la vida 1, mami?</strong><br><span class="finale-small">Porque todavía nos quedan infinitas maneras de querernos.</span><br><span class="finale-signature">— Tu chinito. ♾️</span>')});
 at(33100,()=>{$('#finaleRestart').classList.remove('hidden');$('#finaleRestart').focus({preventScroll:true})});
}
$('#finaleRestart').addEventListener('click',()=>{
 finaleTimers.forEach(clearTimeout);finaleTimers=[];$('#finale').classList.remove('visible');$('#finale').setAttribute('aria-hidden','true');cancelAnimationFrame(finaleFrame);
 seen.clear();document.querySelectorAll('.memory-star').forEach(e=>e.classList.remove('done'));
 $('#skyProgress').textContent='0 de 3 estrellas descubiertas';$('#formBook').classList.add('hidden');
 current=0;render();show('welcome');$('#start').focus({preventScroll:true});
});
function animateRebirth(){
 const num=$('#rebirthNum'),words=$('#rebirthWords'),btn=$('#cycleRestart');
 if(!num)return;
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const swap=()=>{if(!num.isConnected)return;num.textContent='1';words.innerHTML='Si pudiera elegirte de nuevo, volvería a buscarte.<br><strong>Veamos qué nuevas vidas nos esperan.</strong>';btn.classList.remove('hidden')};
 if(reduce){swap();return}
 num.classList.add('number-collapse');
 setTimeout(()=>{swap();num.classList.remove('number-collapse');num.classList.add('number-bloom')},1250);
}
// Subtle animated universe canvas. No downloaded imagery.
const canvas=$('#universe'),ctx=canvas.getContext('2d');let points=[],w=0,h=0;function resize(){let d=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=Math.floor(w*d);canvas.height=Math.floor(h*d);ctx.setTransform(d,0,0,d,0,0);points=Array.from({length:Math.min(145,Math.max(55,Math.round(w*h/6200)))},()=>({x:Math.random()*w,y:Math.random()*h,r:.4+Math.random()*1.6,p:Math.random()*6.28,s:.07+Math.random()*.24}))}window.addEventListener('resize',resize);resize();function animate(t){ctx.clearRect(0,0,w,h);for(const p of points){const alpha=.22+.57*(.5+.5*Math.sin(p.p+t*.0007));ctx.beginPath();ctx.fillStyle=`rgba(255,236,195,${alpha})`;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();p.y-=p.s;if(p.y<0)p.y=h}requestAnimationFrame(animate)}requestAnimationFrame(animate);
// Tiny original generative piano melody using Web Audio; starts only after user taps.
let audioCtx=null,noteTimer=null,noteIndex=0;const melody=[0,4,7,12,7,4,2,5,9,12,9,5,0,4,7,11,7,4,-3,0,4,7,4,0],base=220;
function pianoNote(semitone){if(!audioCtx||!musicOn)return;const t=audioCtx.currentTime,f=base*Math.pow(2,semitone/12);const osc=audioCtx.createOscillator(),soft=audioCtx.createOscillator(),g=audioCtx.createGain();osc.type='sine';soft.type='triangle';osc.frequency.value=f;soft.frequency.value=f*2;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.045,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+1.7);osc.connect(g);soft.connect(g);g.connect(audioCtx.destination);osc.start(t);soft.start(t);osc.stop(t+1.75);soft.stop(t+1.75)}
function startPiano(){if(!musicOn||noteTimer)return;try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();audioCtx.resume();pianoNote(melody[noteIndex%melody.length]);noteIndex++;noteTimer=setInterval(()=>{pianoNote(melody[noteIndex%melody.length]);noteIndex++},520)}catch(e){$('#musicToggle').textContent='♫ Sin audio'}}
function stopPiano(){clearInterval(noteTimer);noteTimer=null}
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPiano();else if(musicOn&&$('#welcome').classList.contains('active')===false)startPiano()});
