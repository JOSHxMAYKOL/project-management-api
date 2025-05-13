from docx import Document
from docx.shared import Inches
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT

# Crear el documento
doc = Document()
doc.add_heading('Trabajo de Investigación y Aplicación: Emuladores de Arduino', 0)

# Objetivo
doc.add_heading(' Objetivo del trabajo', level=1)
doc.add_paragraph(
    "El propósito de este trabajo es profundizar en el conocimiento y uso de emuladores de Arduino como herramientas "
    "didácticas y prácticas para la simulación de microcontroladores. En un entorno donde la innovación y el acceso "
    "equitativo a la tecnología son esenciales, los emuladores permiten experimentar con la programación y la electrónica "
    "sin necesidad de hardware físico. Esto resulta especialmente valioso en contextos educativos o de prototipado temprano, "
    "donde la eficiencia, la seguridad y los costos son factores clave."
)

# ¿Qué es un emulador?
doc.add_heading(' 1. ¿Qué es un emulador o simulador de Arduino?', level=1)
doc.add_paragraph
    "Un emulador de Arduino es una herramienta de software que simula el comportamiento de una placa Arduino real. "
    "Estos entornos permiten escribir, cargar y ejecutar código en un entorno virtual, así como interactuar con una amplia "
    "gama de componentes electrónicos simulados: LEDs, sensores, servomotores, botones, displays, etc.\n\n"
    "A diferencia del uso de una placa física:\n"
    "- No se necesita hardware real para ejecutar los programas.\n"
    "- La simulación permite visualizar errores lógicos o eléctricos sin riesgo de daño.\n"
    "- Se facilita el aprendizaje, la práctica y el desarrollo de proyectos desde cualquier lugar."
)

# Ventajas y desventajas
doc.add_heading('⚖ 2. Ventajas y desventajas del uso de emuladores', level=1)
doc.add_paragraph(" Ventajas:")
doc.add_paragraph("- Ahorro económico: No requiere inversión inicial en componentes físicos.", style='List Bullet')
doc.add_paragraph("- Seguridad: Ideal para probar circuitos sin riesgo de cortocircuitos ni quemar hardware.", style='List Bullet')
doc.add_paragraph("- Accesibilidad universal: Herramientas como Tinkercad son gratuitas y se ejecutan desde el navegador.", style='List Bullet')
doc.add_paragraph("- Iteración veloz: Los cambios en el código o en el diseño del circuito se reflejan de inmediato.", style='List Bullet')

doc.add_paragraph(" Desventajas:")
doc.add_paragraph("- Limitaciones en la simulación: No todos los sensores o módulos están disponibles.", style='List Bullet')
doc.add_paragraph("- Diferencias frente al hardware real: Puede haber comportamientos distintos en la vida real.", style='List Bullet')
doc.add_paragraph("- Dependencia de conexión y rendimiento del equipo: La simulación puede ser más lenta.", style='List Bullet')

# Mejor emulador
doc.add_heading(' 3. ¿Cuál es el mejor emulador para aprender Arduino?', level=1)
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

# Características de Tinkercad
doc.add_heading(' 4. Características de Tinkercad como emulador de Arduino', level=1)
doc.add_paragraph("- Lenguaje soportado: Arduino C/C++, también bloques visuales estilo Scratch.", style='List Bullet')
doc.add_paragraph("- Componentes disponibles: LEDs, sensores, displays LCD, botones, motores, resistencias, etc.", style='List Bullet')
doc.add_paragraph("- Interfaz: Área de trabajo por arrastrar y soltar. Editor de código integrado.", style='List Bullet')
doc.add_paragraph("- Comunidad: Proyectos compartidos, aprendizaje colaborativo y foros de discusión.", style='List Bullet')

# Ejercicio práctico
doc.add_heading(' Ejercicio práctico: Simulación de un semáforo peatonal inteligente', level

