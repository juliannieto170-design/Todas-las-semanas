"use strict";

// ============================================
// CONFIGURACIÓN
// ============================================
const DOMAIN_NAME = "Inventario Digital";
const VALUE_LABEL = "productos";
const MAX_ITEMS = 1_000;

// ============================================
// DATOS
// ============================================
const items = [
  { id: 1, name: "Laptop", value: 2500, active: true, category: "tecnología" },
  { id: 2, name: "Mouse", value: 50, active: true, category: "accesorios", notes: "Inalámbrico" },
  { id: 3, name: "Teclado", value: 120, active: false, category: "accesorios" },
  { id: 4, name: "Monitor", value: 800, active: true, category: "tecnología" },
  { id: 5, name: "Audífonos", value: 200, active: true, category: "audio" },
  { id: 6, name: "Micrófono", value: 300, active: false, category: "audio" }
];

// ============================================
// CRUD
// ============================================
const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("❌ Límite alcanzado");
    return;
  }
  items.push(item);
  console.log(`✅ Agregado: ${item.name}`);
};

const findById = (id) => items.find(item => item.id === id);

const getActive = () => items.filter(item => item.active);

const filterByField = (field, value) =>
  items.filter(item => item[field] === value);

// ============================================
// ANÁLISIS
// ============================================
const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map(i => i[field]);
  const total = values.reduce((acc, v) => acc + v, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = total / values.length;

  return { min, max, avg, total };
};

// ============================================
// DISPLAY
// ============================================
const formatItem = (item) => {
  return `[${item.id}] ${item.name.padEnd(12)} | ${item.category.padEnd(12)} | $${item.value
    .toString()
    .padStart(5)} | ${item.active ? "Activo" : "Inactivo"} | ${item.notes ?? "—"}`;
};

const buildReport = () => {
  console.log(`\n📦 REPORTE — ${DOMAIN_NAME}`);
  console.log("=".repeat(50));

  // Listado
  items.forEach(item => console.log(formatItem(item)));

  // Activos
  const active = getActive();
  console.log(`\n✅ Activos: ${active.length} / ${items.length}`);

  // Stats
  const stats = calculateStats("value");
  console.log(`📊 Min: ${stats.min}`);
  console.log(`📊 Max: ${stats.max}`);
  console.log(`📊 Prom: ${stats.avg.toFixed(2)}`);
  console.log(`📊 Total: ${stats.total}`);

  // Object.entries
  console.log("\n🔍 Propiedades del primero:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}\n`);

// Buscar
const found = findById(1);
console.log("Encontrado id=1:", found?.name ?? "no encontrado\n");

// Activos
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Filtro
const filtered = filterByField("category", "tecnología");
console.log(`Filtro tecnología: ${filtered.length} resultados\n`);

// Update
const updated = updateItem(1, { value: 3000 });
console.log("Nuevo valor id=1:", updated.find(i => i.id === 1).value, "\n");

// Stats
const stats = calculateStats("value");
console.log(`Stats → Min:${stats.min} Max:${stats.max} Avg:${stats.avg.toFixed(2)}\n`);

// Agregar
addItem({ id: 7, name: "Tablet", value: 1500, active: true, category: "tecnología" });

// Reporte final
buildReport();