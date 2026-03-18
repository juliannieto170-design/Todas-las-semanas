// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "E-Learning";

// Nombre del curso dentro de la plataforma
const itemName = "Curso de Inglés Básico";

// Categoría del curso
const itemCategory = "Idiomas - Nivel principiante";

// Cantidad de lecciones del curso
const itemQuantity = 40;

// Boolean que indica si el curso está disponible
const isItemAvailable = true;

// Valor que aún no está asignado en el sistema
const instructorAssigned = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:       ${itemName}`);
console.log(`Categoría:    ${itemCategory}`);
console.log(`Lecciones:    ${itemQuantity}`);
console.log(`Disponible:   ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);

console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Convertir número a texto
const lessonsAsText = String(itemQuantity);

console.log("Lecciones como texto:", lessonsAsText);
console.log("typeof (convertido):", typeof lessonsAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Instructor asignado:", instructorAssigned);
console.log("typeof null:", typeof instructorAssigned);
console.log("¿Es null?:", instructorAssigned === null);

console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");