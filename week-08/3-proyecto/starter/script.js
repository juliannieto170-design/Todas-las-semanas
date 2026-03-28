// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: E-Learning Languages
// ============================================

const DOMAIN_NAME = "E-Learning Languages";
const VALUE_LABEL = "cursos";


// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Inglés", level: "Intermedio", progress: 80, active: true, lessons: 20 },
  { id: 2, name: "Español", level: "Básico", progress: 60, active: true, lessons: 15 },
  { id: 3, name: "Francés", level: "Avanzado", progress: 90, active: false, lessons: 25 },
  { id: 4, name: "Alemán", level: "Básico", progress: 40, active: true, lessons: 10 },
  { id: 5, name: "Italiano", level: "Intermedio", progress: 70, active: true, lessons: 18 }
];


// ============================================
// 2. FUNCIONES
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Prioritario: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado: ${removed[0].name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — Nivel: ${item.level} — Progreso: ${item.progress}%`;
};


// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Operaciones ---\n");

addItem({ id: 6, name: "Portugués", level: "Básico", progress: 50, active: true, lessons: 12 });

addPriorityItem({ id: 0, name: "Japonés", level: "Avanzado", progress: 95, active: true, lessons: 30 });

removeByIndex(2);

removeLastItem();

console.log("\n--- Inventario actualizado ---\n");
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Búsqueda ---\n");

const found = findByName("Inglés");
console.log("Encontrado:", found);

const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

console.log("\n--- Transformación ---\n");

const names = items.map(item => item.name);
console.log("Nombres:", names);

const progressWithBonus = items.map(item => item.progress + 10);
console.log("Progreso +10:", progressWithBonus);

console.log("\n--- Resumen ---\n");

const activeCount = getActiveItems().length;

console.log(`Total: ${items.length} ${VALUE_LABEL}`);
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);