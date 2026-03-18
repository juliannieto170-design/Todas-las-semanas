// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// E-LEARNING - Curso de Inglés
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const COURSE_PRICE = 120000;
const MAX_STUDENTS = 30;
const ENROLLED_STUDENTS = 22;
const DISCOUNT = 0.2;

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

const totalRevenue = COURSE_PRICE * ENROLLED_STUDENTS;
console.log("Ingresos totales:", totalRevenue);

const discountedPrice = COURSE_PRICE * (1 - DISCOUNT);
console.log("Precio con descuento:", discountedPrice);

const remainingSpots = MAX_STUDENTS - ENROLLED_STUDENTS;
console.log("Cupos disponibles:", remainingSpots);

const revenueWithDiscount = discountedPrice * ENROLLED_STUDENTS;
console.log("Ingresos con descuento:", revenueWithDiscount);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

let totalSales = 0;
console.log("Ventas iniciales:", totalSales);

totalSales += COURSE_PRICE;
console.log("Tras primera venta:", totalSales);

totalSales += COURSE_PRICE;
console.log("Tras segunda venta:", totalSales);

totalSales *= 0.9; // descuento del 10%
console.log("Con descuento aplicado:", totalSales);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const isFull = ENROLLED_STUDENTS === MAX_STUDENTS;
console.log("¿Curso lleno?", isFull);

const hasStudents = ENROLLED_STUDENTS > 0;
console.log("¿Hay estudiantes inscritos?", hasStudents);

const isHighDemand = ENROLLED_STUDENTS >= 20;
console.log("¿Alta demanda?", isHighDemand);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const canApplyDiscount = ENROLLED_STUDENTS >= 10 && ENROLLED_STUDENTS <= MAX_STUDENTS;
console.log("¿Aplica descuento grupal?", canApplyDiscount);

const courseAvailable = remainingSpots > 0 || ENROLLED_STUDENTS < MAX_STUDENTS;
console.log("¿Curso disponible?", courseAvailable);

const notFull = !isFull;
console.log("¿No está lleno?", notFull);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Curso: Inglés Básico");
console.log("Estudiantes inscritos:", ENROLLED_STUDENTS);
console.log("Ingresos totales:", totalRevenue);
console.log("Cupos disponibles:", remainingSpots);
console.log("Precio con descuento:", discountedPrice);

console.log("");