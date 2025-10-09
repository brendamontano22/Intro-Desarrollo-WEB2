#Clases en JavaScript
##¿Qué son las clases en JavaScrpit?
Las clases en JS son como una plantilla para crear objetos que agrupan propiedades y métodos. Guardan datos con código para poder trabajar con esos datos. Las clases en JS se constuyen osbre prototipos, pero también la sintaxis y semántica que se usa es única para las clases.
Las clases son "funciones especiales", y así como se pueden definir expresiones de función y declaraciones de función, una clase puede definirse de dos maneras: una expresión de clase o una declaración de clase.
##Uso y propiedades
Conviene usar una clase cuando se necesitan varios objetos con la misma forma, se requiere agrupar datos y lógica, y se busca reutilizar el comportamiento.
Primero se define un modelo: dentro de la clase se definen las propiedades y los métodos.
Se crean objetos a partir del molde: cada objeto, producto de la clase (instancia) tiene las mismas capacidades, pero con valores propios.
Se encapsula la lógica: los métodos operan sobre los datos internos del objeto, prevaleciendo orden, legibilidad y mantenimiento.
Se distinguen responsabilidades:
- **Métodos de instancia** (normales): trabajan con los datos de un objeto específico.
- **Métodos estáticos**: representan utilidades de la clase en general, no dependen de una instancia completa.
Se protege información interna: con métodos **privados** se ocultan detalles de implementación, propiciando la protección de datos sensibles.
Se permite herencia: una clase puede extenderse a otra para reutilizar y especializar comportamientos, manteniendo coherencia y evitando repetición.
##Crear instancias
Una instancia es un objeto concreto producido a partir de una clase. Cuando se crea una instancia, se ejecuta el constructor de la clase que inicializa las propiedades con valores de inicio. Se proporcionan argumentos que determinan el estado incial del objeto (**parámetros de entrada**). 
Cada instancia tiene identidad independiente (no es la clase) y puede conservar valores distintos en sus propiedades aunque comparta la misma estructura y métodos. La instancia hereda el comportamiento deifnido por la clase.
Pasos para crear una instancia y qué es lo que pasa:
- Se invoca la clase con el operador **"new"** junto con los argumentos que necesita su constructor (nombre, edad, etc.)
- Al hacer esto se crea un nuevo objeto en la memoria, se conecta al prototype de la clase (i.e. heredará sus métodos), ejecuta el constructor de la clase con **this** apuntando a ese objeto y usando los argumentos.
##Métodos y funciones
- **Métodos de instancia**: acciones asociadas a cada objeto creado a partir d euna clase. Operan sobre sus propiedades internas y se invocan desde las instancia. Describen lo que un objeto sabe hacer.
- **Métodos estáticos**: pertenecen a la clase en sí, no a los objetos. Se usan como utilidades o para lógica que no depende del estado de un instancia concreta (ejemplo: validaciones generales o fábricas).
- **Getters y setters**: métodos especiales para leer y actualizar propiedades. Permiten validar, transformar o proteger el acceso sin exponer directamente los datos. 
- **Métodos/propiedades privadas**: JS permite definir elementos privados dentro de la clase, pensados para ocultar detalles internos. Solo son accesibles desde dentro de la propia clase.
Los métodos definidos en la clase quedan conceptualmente en el prototipo compartido (clase), por lo que las instancias los "ven" sin duplicarlos en la memoria. 
**Método vs función**
- Se usan métodos de instancia cuando la acción necesita el estado del objeto.
- Se usan métodos estáticos cuanod la acción egenral y no dependa de una instancia.
- Se usan funciones fue la de la clase cuando la lógica sea ejan al modelo o se quiera manetener la clase ligera y con una respinsabilidad clara.

