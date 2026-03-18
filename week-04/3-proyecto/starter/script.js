// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// E-LEARNING - Curso de Inglés
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DOMAIN_NAME = "E-Learning";

const rawEntityName = "  Curso de Inglés Básico  ";

const entityCategory = "Idiomas - Principiante";

const entityCode = "ENG-001";

const entityDescription = "Curso de inglés enfocado en gramática básica, vocabulario y conversación inicial.";

const mainValue = 40; // horas del curso

const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

const entityName = rawEntityName.trim();

const entityNameUpper = entityName.toUpperCase();

const entityNameLower = entityName.toLowerCase();

const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

const hasValidPrefix = entityCode.startsWith(codePrefix);

const descriptionIsRelevant = entityDescription.includes("inglés");

const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DEL CURSO
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Duración:    ${mainValue} horas
Estado:      ${isActive ? "Disponible" : "No disponible"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'inglés'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);

console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

const notification = `📘 Nuevo curso agregado: ${entityName} (${entityCode})`;

console.log(notification);
console.log("");