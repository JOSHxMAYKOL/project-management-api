# Volver a crear el documento desde el inicio ya que se perdió la referencia anterior

from docx import Document

# Crear nuevo documento
doc = Document()
doc.add_heading('Trabajo de Investigación y Aplicación: Emuladores de Arduino', 0)

# Secciones anteriores
doc.add_heading('🎯 Objetivo del trabajo', level=1)
doc.add_paragraph(
    "El propósito de este trabajo es profundizar en el conocimiento y uso de emuladores de Arduino como herramientas "
    "didácticas y prácticas para la simulación de microcontroladores. En un entorno donde la innovación y el acceso "
    "equitativo a la tecnología son esenciales, los emuladores permiten experimentar con la programación y la electrónica "
    "sin necesidad de hardware físico. Esto resulta especialmente valioso en contextos educativos o de prototipado temprano, "
    "donde la eficiencia, la seguridad y los costos son factores clave."
)

doc.add_heading('🔍 1. ¿Qué es un emulador o simulador de Arduino?', level=1)
doc.add_paragraph(
    "Un emulador de Arduino es una herramienta de software que simula el comportamiento de una placa Arduino real. "
    "Estos entornos permiten escribir, cargar y ejecutar código en un entorno virtual, así como interactuar con una amplia "
    "gama de componentes electrónicos simulados: LEDs, sensores, servomotores, botones, displays, etc.\n\n"
    "A diferencia del uso de una placa física:\n"
    "- No se necesita hardware real para ejecutar los programas.\n"
    "- La simulación permite visualizar errores lógicos o eléctricos sin riesgo de daño.\n"
    "- Se facilita el aprendizaje, la práctica y el desarrollo de proyectos desde cualquier lugar."
)

doc.add_heading('⚖️ 2. Ventajas y desventajas del uso de emuladores', level=1)
doc.add_paragraph("✅ Ventajas:")
for v in [
    "Ahorro económico: No requiere inversión inicial en componentes físicos.",
    "Seguridad: Ideal para probar circuitos sin riesgo de cortocircuitos ni quemar hardware.",
    "Accesibilidad universal: Herramientas como Tinkercad son gratuitas y se ejecutan desde el navegador.",
    "Iteración veloz: Los cambios en el código o en el diseño del circuito se reflejan de inmediato."
]:
    doc.add_paragraph(v, style='List Bullet')

doc.add_paragraph("❌ Desventajas:")
for d in [
    "Limitaciones en la simulación: No todos los sensores o módulos están disponibles.",
    "Diferencias frente al hardware real: Puede haber comportamientos distintos en la vida real.",
    "Dependencia de conexión y rendimiento del equipo: La simulación puede ser más lenta."
]:
    doc.add_paragraph(d, style='List Bullet')

doc.add_heading('🏆 3. ¿Cuál es el mejor emulador para aprender Arduino?', level=1)
doc.add_paragraph(
    "Tinkercad Circuits se alza como una de las opciones más completas, accesibles y educativas para emular Arduino.\n\n"
    "Razones clave:\n"
    "- Interfaz gráfica amigable.\n"
    "- Accesible desde cualquier navegador (sin instalar nada).\n"
    "- Simulación en tiempo real con feedback visual inmediato.\n"
    "- Biblioteca extensa de componentes.\n"
    "- Soporte para programación por bloques y en código real (Arduino C).\n"
    "- Comunidad activa con miles de proyectos y recursos disponibles."
)

doc.add_heading('🧰 4. Características de Tinkercad como emulador de Arduino', level=1)
for f in [
    "Lenguaje soportado: Arduino C/C++, también bloques visuales estilo Scratch.",
    "Componentes disponibles: LEDs, sensores, displays LCD, botones, motores, resistencias, etc.",
    "Interfaz: Área de trabajo por arrastrar y soltar. Editor de código integrado.",
    "Comunidad: Proyectos compartidos, aprendizaje colaborativo y foros de discusión."
]:
    doc.add_paragraph(f, style='List Bullet')

# Agregar ejercicio práctico
doc.add_heading('🚦 Ejercicio práctico: Simulación de un semáforo peatonal inteligente', level=1)
doc.add_heading('🎯 Objetivo del ejercicio', level=2)
doc.add_paragraph(
    "Simular el funcionamiento de un sistema de semáforo peatonal que responda al botón de cruce. "
    "Este sistema debe controlar tanto el flujo vehicular como el paso seguro de peatones, representado mediante LEDs."
)

doc.add_heading('🔧 Materiales virtuales necesarios (en el emulador)', level=2)
materiales = [
    "3 LEDs para semáforo de vehículos (Verde, Amarillo, Rojo)",
    "2 LEDs para semáforo peatonal (Rojo, Verde)",
    "1 botón pulsador (Push button)",
    "Resistencias (220Ω para LEDs, pull-down de 10kΩ para botón)",
    "Arduino UNO (emulado)",
    "Cables de conexión"
]
for item in materiales:
    doc.add_paragraph(item, style='List Bullet')

doc.add_heading('⚙️ Lógica del sistema', level=2)
doc.add_paragraph(
    "1. Estado inicial:\n"
    "- Semáforo de vehículos: LED verde encendido.\n"
    "- Semáforo peatonal: LED rojo encendido.\n\n"
    "2. Cuando se presiona el botón:\n"
    "- El sistema verifica la pulsación (espera 3 segundos).\n"
    "- Cambia el semáforo de vehículos a amarillo por 2 segundos.\n"
    "- Luego pasa a rojo.\n"
    "- Cambia el semáforo peatonal a verde, permitiendo cruzar durante 5 segundos.\n"
    "- Vuelve el semáforo peatonal a rojo.\n"
    "- Semáforo de vehículos regresa al verde, reiniciando el ciclo."
)

doc.add_heading('💻 Código ejemplo (Arduino C)', level=2)
codigo = """
const int ledVehVerde = 2;
const int ledVehAmarillo = 3;
const int ledVehRojo = 4;

const int ledPeatRojo = 5;
const int ledPeatVerde = 6;

const int boton = 7;

void setup() {
  pinMode(ledVehVerde, OUTPUT);
  pinMode(ledVehAmarillo, OUTPUT);
  pinMode(ledVehRojo, OUTPUT);
  pinMode(ledPeatRojo, OUTPUT);
  pinMode(ledPeatVerde, OUTPUT);
  pinMode(boton, INPUT);
  
  digitalWrite(ledVehVerde, HIGH);
  digitalWrite(ledPeatRojo, HIGH);
}

void loop() {
  if (digitalRead(boton) == HIGH) {
    delay(3000); // Verificación pulsador

    digitalWrite(ledVehVerde, LOW);
    digitalWrite(ledVehAmarillo, HIGH);
    delay(2000);

    digitalWrite(ledVehAmarillo, LOW);
    digitalWrite(ledVehRojo, HIGH);

    digitalWrite(ledPeatRojo, LOW);
    digitalWrite(ledPeatVerde, HIGH);
    delay(5000);

    digitalWrite(ledPeatVerde, LOW);
    digitalWrite(ledPeatRojo, HIGH);

    digitalWrite(ledVehRojo, LOW);
    digitalWrite(ledVehVerde, HIGH);
  }
}
"""
doc.add_paragraph(codigo)

doc.add_heading('🌟 Reflexión final', level=1)
doc.add_paragraph(
    "Los emuladores de Arduino no son simplemente sustitutos del hardware físico, sino puertas de entrada para una "
    "educación moderna, abierta y práctica en electrónica. Son laboratorios portátiles que democratizan el aprendizaje "
    "y fomentan la creatividad. Desde un aula hasta un garaje, desde un niño curioso hasta un futuro ingeniero, todos pueden "
    "comenzar su viaje con un clic.\n\nExplorar, fallar sin miedo y aprender rápido: esa es la promesa del emulador. Y como ves, "
    "con un par de LEDs y unas líneas de código, puedes simular el latido electrónico de una ciudad entera."
)

# Guardar archivo
file_path = "/mnt/data/Emuladores_Arduino_Trabajo_Informativo.docx"
doc.save(file_path)
file_path
