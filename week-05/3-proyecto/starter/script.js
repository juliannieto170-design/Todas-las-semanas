// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Plataforma de aprendizaje de idiomas
// ============================================


// ============================================
// SECCIÓN 1: DATOS
// ============================================

const elementName = "Curso de Inglés";
const elementStatus = "active"; // active / inactive
const elementValue = 85; // progreso del curso (%)
const elementType = "language"; // language / premium / basic
const elementInfo = {
  detail: "Curso interactivo con ejercicios y audio",
  level: "Intermedio"
};


// ============================================
// SECCIÓN 2: CLASIFICACIÓN (if / else)
// ============================================

let classification;

if (elementValue >= 80) {
  classification = "Alto nivel";
} else if (elementValue >= 50) {
  classification = "Nivel medio";
} else {
  classification = "Nivel bajo";
}


// ============================================
// SECCIÓN 3: ESTADO (TERNARIO)
// ============================================

const statusLabel = elementStatus === "active"
  ? "Activo"
  : "Inactivo";


// ============================================
// SECCIÓN 4: TIPO (SWITCH)
// ============================================

let typeLabel;

switch (elementType) {
  case "language":
    typeLabel = "Curso de idioma";
    break;

  case "premium":
    typeLabel = "Curso premium";
    break;

  case "basic":
    typeLabel = "Curso básico";
    break;

  default:
    typeLabel = "Tipo desconocido";
}


// ============================================
// SECCIÓN 5: VALORES POR DEFECTO (??)
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";


// ============================================
// SECCIÓN 6: ACCESO SEGURO (?.)
// ============================================

const safeProperty = elementInfo?.level ?? "Nivel no especificado";


// ============================================
// SECCIÓN 7: SALIDA
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);

console.log("=".repeat(40));