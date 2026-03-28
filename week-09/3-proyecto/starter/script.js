// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// Dominio: E-Learning Languages
// ============================================

const DOMAIN_NAME = "E-Learning Languages";
const VALUE_LABEL = "cursos";


// ============================================
// DATOS
// ============================================

const items = [
  { id: 1, name: "Inglés", level: "Intermedio", progress: 80, active: true, lessons: 20 },
  { id: 2, name: "Español", level: "Básico", progress: 60, active: true, lessons: 15, teacher: "Carlos" },
  { id: 3, name: "Francés", level: "Avanzado", progress: 90, active: false, lessons: 25 },
  { id: 4, name: "Alemán", level: "Básico", progress: 40, active: true, lessons: 10 },
  { id: 5, name: "Italiano", level: "Intermedio", progress: 70, active: true, lessons: 18, teacher: "Ana" },
  { id: 6, name: "Portugués", level: "Básico", progress: 50, active: false, lessons: 12 }
];


// ============================================
// INSPECCIÓN
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 Estadísticas (${numericKey})`);
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${avg.toFixed(1)}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};


// ============================================
// OPCIONALES
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Nivel: ${item.level}`);
  console.log(`Progreso: ${item.progress}%`);

  if (Object.hasOwn(item, "teacher")) {
    console.log(`Profesor: ${item.teacher}`);
  }
};


// ============================================
// FOR...IN
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};


// ============================================
// SPREAD
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};


// ============================================
// ARRAY
// ============================================

const getAvailable = () => {
  return items.filter(item => item.active);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    progressBonus: item.progress + 10
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) =>
    ascending ? a.progress - b.progress : b.progress - a.progress
  );
};


// ============================================
// REPORTE
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total: ${items.length}`);
  console.log(`Activos: ${getAvailable().length}`);

  calculateStats("progress");

  console.log("\n📋 Ordenados:");
  sortByNumericProp().forEach(item =>
    console.log(`${item.name} — ${item.progress}%`)
  );

  const sorted = sortByNumericProp();
  console.log(`\nMayor: ${sorted[sorted.length - 1].name}`);
  console.log(`Menor: ${sorted[0].name}`);

  console.log("=".repeat(50));
};


// ============================================
// EJECUCIÓN
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`Total: ${items.length}`);

inspectItem(items[0]);
calculateStats("progress");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

const updated = updateItem(items[0], { progress: 100 });
console.log("\nActualizado:", updated);

console.log("\nDisponibles:", getAvailable());

console.log("\nBuscar ID 2:", findById(2));
console.log("Buscar ID 99:", findById(99));

console.log("\nCon bonus:", addCalculatedProp());

console.log("\nOrdenados:", sortByNumericProp());

buildReport();