// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: E-Learning (Idiomas)
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos
// ============================================

const DOMAIN_NAME = "E-Learning Languages";
const VALUE_LABEL = "progreso (%)";

const items = [
  { id: 1, name: "Inglés", category: "idioma", value: 90, active: true },
  { id: 2, name: "Español", category: "idioma", value: 75, active: true },
  { id: 3, name: "Francés", category: "idioma", value: 60, active: false },
  { id: 4, name: "Curso Básico", category: "nivel", value: 40, active: true },
  { id: 5, name: "Curso Avanzado", category: "nivel", value: 95, active: true }
];


// ============================================
// SECCIÓN 2: Formato
// ============================================

const formatItem = (item) => {
  return `🌎 ${item.name} [${item.category}] — ${VALUE_LABEL}: ${item.value}`;
};


// ============================================
// SECCIÓN 3: Cálculo
// ============================================

const calculateValue = (baseValue, factor = 1) => {
  return baseValue * factor;
};


// ============================================
// SECCIÓN 4: Validación
// ============================================

const isValid = (item) => {
  return item.active === true;
};


// ============================================
// SECCIÓN 5: Parámetros por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, unit = "%") => {
  return `${label}: ${value}${unit}`;
};


// ============================================
// SECCIÓN 6: Reporte
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️ No hay elementos.");
} else {

  // LISTADO
  console.log("\n📋 Listado:");
  let lineNumber = 1;

  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // VALIDACIÓN
  let validCount = 0;

  for (const item of items) {
    if (isValid(item)) validCount++;
  }

  console.log(`\n✅ Activos: ${validCount} / ${items.length}`);

  // CÁLCULO
  let totalValue = 0;

  for (const item of items) {
    totalValue += calculateValue(item.value);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);