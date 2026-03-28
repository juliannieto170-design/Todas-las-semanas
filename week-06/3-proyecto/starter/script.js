// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: E-Learning (Idiomas)
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const items = [
  { name: "Inglés", category: "idioma", value: 90 },
  { name: "Español", category: "idioma", value: 75 },
  { name: "Francés", category: "idioma", value: 60 },
  { name: "Curso Básico", category: "nivel", value: 40 },
  { name: "Curso Intermedio", category: "nivel", value: 70 },
  { name: "Curso Avanzado", category: "nivel", value: 95 }
];

const categories = ["idioma", "nivel"];

const valueLabel = "progreso (%)";


// ============================================
// SECCIÓN 2: Listado completo
// ============================================

console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");


// ============================================
// SECCIÓN 3: Conteo por categoría
// ============================================

console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");


// ============================================
// SECCIÓN 4: Totales y promedio
// ============================================

console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");


// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================

console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {

    if (item.value > maxItem.value) {
      maxItem = item;
    }

    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem.name} (${maxItem.value})`);
  console.log(`Menor ${valueLabel}: ${minItem.name} (${minItem.value})`);
}

console.log("");


// ============================================
// SECCIÓN 6: Reporte con for clásico
// ============================================

console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const comparison = item.value >= averageValue
    ? "sobre el promedio"
    : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");