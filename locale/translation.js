// Translation document for the collection
// =======================================
// This file contains the texts
// annotated for translation
//
// Instructions:
// 1. Open the PO file with Poedit
// 2. Press "Update" to update from sources

gettext('Bits');
gettext('Colores');
gettext('VGA');
gettext('0');
gettext('Un bit constante a 0');
gettext('1');
gettext('Un bit constante a 1');
gettext('0-Negro');
gettext('Constante de 3 bits para el color negro');
gettext('Constante de 3 bits para el **COLOR NEGRO**');
gettext('1-Azul');
gettext('Constante de 3 bits para el color azul');
gettext('2-Verde');
gettext('Constante de 3 bits para el color verde');
gettext('3-Cyan');
gettext('Constante de 3 bits para el color cyan');
gettext('4-Rojo');
gettext('Constante de 3 bits para el color rojo');
gettext('5-Magenta');
gettext('Constante de 3 bits para el color magenta');
gettext('6-Amarillo');
gettext('Constante de 3 bits para el color amarillo');
gettext('Constante de 3 bits para el **COLOR AMARILLO**');
gettext('7-Blanco');
gettext('Constante de 3 bits para el color blanco');
gettext('Constante de 3 bits para el **COLOR BLANCO**');
gettext('VGA_MonsterLED');
gettext('Convertir la pantalla VGA en un LED gigante, activado por la entrada bit');
gettext('Multiplexor de 2 a 1');
gettext('Biestable D con enable inicializado a 0');
gettext('Biestable tipo D con entrada de enable, inicializado al parámetro INI');
gettext('Biestable D con inicialización paramétrica');
gettext('Multiplexor 2:1 de 1-bit');
gettext('Puerta OR');
gettext('Puerta NOT');
gettext('NAND logic gate');
gettext('Transistor');
gettext('Transistor cmos hecho a partir de semiconductores');
gettext('Cristal de Siicio');
gettext('Atomos de silicio');
gettext('Puerta AND');
gettext('Mux 2:1 with logic gates');
gettext('Entrada 1');
gettext('Entrada 0');
gettext('Selección');
gettext('Implementación en Verilog');
gettext('Las puertas están construidas a\npartir de transistores');
gettext('Pincha en algún transistor para\nbajar de nivel');
gettext('Nivel 3: Semiconductores');
gettext('Los transistores se crean a \npartir de uniones entre \nsemiconductores, de tipo P y N\nEstán integrados en los dados de\nsilicio en los circuitos integrados');
gettext('Pincha en el bloque para bajar de nivel');
gettext('Nivel 2: MATERIALES');
gettext('Cristal de silicio');
gettext('Los semiconductores se crean a partir de cristales\nde Silicio (Si) que se dopans con impurezas\npara darle las propiedades de semiconductores');
gettext('Pincha en los bloques para bajar de nivel');
gettext('Átomos de Silicio');
gettext('Nivel 1: ATOMOS');
gettext('Los cristales de silicio se forman a \npartir del enlace covalente entre los\nátomos de silicio. Cada uno de ellos \nestá rodeado por 4 átomos de silicio\nformando un tetraedro');
gettext('VGA_rgb');
gettext('Generar las señales RGB para que el video salga en el color indicado');
gettext('Separador de bus de 3bits en 3 cables');
gettext('La paleta tiene **8 colores**, con los siguientes códigos:\n\n* **Negro**: 0\n* **Azul**: 1\n* **Verde**: 2\n* **Cyan**: 3\n* **Rojo**: 4\n* **Magenta**: 5\n* **Amarillo**: 6\n* **Blanco**: 7');
gettext('# VGA RGB\n\nGenerador de las señales RGB de la VGA\nen función del color\n');
gettext('Los pixeles de la **señal de video** se envían por los\ncanales de color que estén activados, según el \nvalor del código de color');
gettext('**Canal rojo activado**');
gettext('**Canal verde activado**');
gettext('**Canal azul activado**');
gettext('Las señales de activación de los canales de color se capturan\nsólo cuando llega un **frame nuevo**. De esta forma garantizamos\nque el cambio no se hace mientras se está dibujando el frame\nactual y el **refresco** se hace correctamente');
gettext('Fin del frame');
gettext('Señal de video');
gettext('Color para el \nvídeo');
gettext('VGA_rgb_bus');
gettext('Componente VGA RjGB con salida de bus');
gettext('Agregador de 3 cables a un bus de 3bits');
gettext('**VGA RGB**');
gettext('VGA_sync');
gettext('Controlador VGA. Generacion del sincronismo. 31.5Khz. 60Hz');
gettext('Stickers de Smiley');
gettext('# VGA SYNC\n\n---------\nGenerar las **señales de sincronización** para la \nVGA\n* **Velocidad del pixel**: 12Mhz\n* **Refreshco horizontal**: 31.5Khz\n* **Refresco vertical**: 60Hz\n\n');
gettext('## Parámetros horizontales\n\nLos \"bits\" que componen la señal de video VGA se envían de izquierda a derecha, y de arriba\na abajo. Cada línea comienza enviando un bloque de bits, denominado **back porch** (porche trasero)\nA continuación viene el bloque de **píxeles activos** (los que se ven en la pantalla). Para cada pixel,\nsi el valor de esta señal es **1**, el **pixel es visible**, si está a **0** será **NO visible**. \nEl **color** depende de los canales por lo que se envíe esta señal de vídeo\n\nEl siguiente bloque es el **Front porch** (porche delantero) y finalmente llega el **pulso de sincronismo\nhorizontal** (HS) que determina el **final de la línea**\n\n');
gettext('La **anchura de cada uno de estos bloques**, en **pixeles**, se indica a continuación\n\n* **H_BACK**: 25\n* **H_ACTIVE**: 300\n* **H_FRONT**: 8\n* **H_SYNC**: 48\n\nLa frecuencia de los pixeles es de **12Mhz** (Tiempo de pixel 1 / 12Mhz)\n\n**¡OJO!**: La suma de estos 4 parámetros debe dar siempre: **381**. Ya que la\nfrecuencia de refresco horizontal debe ser de **31.5Khz**\n12Mhz / 381 = 31'496Khz --> 31.5 Khz\n\n(En los monitores multifrecuencia esto no es crítico, ya que se adaptan a ligeras\nvariaciones en estas frecuencias)');
gettext('**Valor de los parámetros de sincronismo horizontal**');
gettext('**Contador de pixeles horizontales**\n\nCuando se activa la señal de **endline** se vuelve\na 0. Esta señal se activa cuando han pasado 381 pixeles\n(que se corresponden con una frecuencia de refresco \nhorizontal de 31.5Khz)');
gettext('**Contador de lineass**\n\nCuenta el **numero total de lineas** (visibles y no visibles)\nes de **524**, para dar una frecuencia de refresco vertical \nlo más cercana a **60Hz**\n\n31.5Khz / 524 = 60.11Hz --> 60Hz');
gettext('# Parámetros verticales (de líneas)\n\nEn total debe haber **524 líneas** (visibles y no visibles) para quee la \nfrecuencia de refresco vertical sea de **60Hz**\n31.5Khz / 524 = 60.11Hz --> 60Hz\n\nPrimero viene un bloque de lineas (**back porch**). Después el bloque de las\n**líneas activas**, que son las visibles (Active). Luego otro bloque llamado \nporche frontal (**Frontal porch**) y por último otro bloque  para el\n**pulso de sincronisco**');
gettext('Los parámetros de la **sincronización vertical** (Unidades = líneas) son:\n\n* **V_BACK**: 31\n* **V_ACTIVE**: 480\n* **V_FRONT**: 11\n* **V_SYNC**: 2');
gettext('La señal de **new_frame** es un pulso de 1 pixel\nde anchura (12Mhz) que se activa cada vez que\nva a comenzar un frame nuevo');
gettext('**LED de debug**  \nSe verá siempre \"encendido\", ya que  \nla señal activex está la maor parte  \ndel tiempo a 1');
gettext('Conectar al **pin H_SYNC** de la VGA');
gettext('Conectar al **pin V SYNC** de la VGA');
gettext('Develop');
gettext('01-Pantalla-verde');
gettext('**Color de la señal de Vídeo**');
gettext('# Ejemplo 1: Pantalla verde\n\nEjemplo que pone la pantalla entera\nde un color. El color se puede cambiar\nsustituyendo el componente \"Color Verde\"\npor otro, desde el menú **Colores**');
gettext('## Señales de sincronización\n\n**VGA SYNC** Genera las señales de sincronización\nnecesarias para la VGA');
gettext('* **Active**: Está a 1 mientras la señal es visible en pantalla\n* **frame**: Se ha terminado de enviar el último frame, y se comenzará con el \nsiguiente\n* **HS**: Sincronización horizontal: Pulso que indica final de la línea horizontal\n* **VS**: Sincronización vertical: Pulso que indica el final de la página');
gettext('**VGA RGB** es el componente que toma la señal de vídeo\ny activa los canales RGB correspondientes para ver los\ngráficos en el color seleccionado');
gettext('Señales que llegan físicamente al\n**conector de la VGA**. Solo son necesarias 5\nseñales: **R**,**G**,**B**,**Horizontal Sync** y\n**Vertical Sync**');
gettext('02-Test-monster-LED');
gettext('**Color de la pantalla**');
gettext('**VGA SYNC**');
gettext('**RED**');
gettext('**GREEN**');
gettext('**BLUE**');
gettext('**HORIZONTAL SYNC**');
gettext('**VERTICAL SYNC**');
gettext('**MonsterLED**');
gettext('# Ejemplo 2: MonsterLED\n\nSe añade un componente que tiene una\nmemoria de vídeo de 1 Bit. Cuando este\nbit se pone a 1, toda la pantalla se\nenciende con el color indicado. Cuando\nse pone a 0 se apaga (negra)');
gettext('**Pulsador** Para encender/apagar la pantalla');
gettext('01-green-background');
gettext('# Ejemplo 1 : Fondo verde\n\n---------\nEjemplo \"Hola mundo\" que pone la pantalla verde\n* **Velocidad del pixel**: 12Mhz\n* **Refreshco horizontal**: 31.5Khz\n* **Refresco vertical**: 60Hz\n\n');
gettext('**Canal Rojo**: Apagado');
gettext('**Canal verde**: Señal de video');
gettext('**Canal Azul**: Apagado');
gettext('La señal de video a visualizar son las lineas\nvisibles (activey a 1), y de ellas solo la parte\nvisible de la linea (activex a 1)  \n\nEsta señal se envía directamente al canal verde\nde la VGA\n\nToda la zona visible se ve en verde, porque en \nesta zona todos los piexeles enviados están\nsiempre a 1');
gettext('02-moving-line');
gettext('**Background**\n\n**Ejemplo 1**: Poner la pantalla en rojo\n\nPixel clock: 12Mhz');
gettext('**Parametros linea**\n\nH_BACK: back porch  \nH_ACTIVE  \nH_FRONT: front porch  \nH_SYNC: Sincronizacion horizontal  ');
gettext('**Horizontal back porch**');
