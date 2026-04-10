export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  batchNumber: string;
  expiryDate: string;
  certificationStatus: "certified" | "pending" | "expired" | "rejected";
  registrationDate: string;
}

export interface Inspection {
  id: string;
  productId: string;
  productName: string;
  location: string;
  inspector: string;
  date: string;
  status: "passed" | "failed" | "pending";
  type: "routine" | "complaint" | "follow-up";
  findings: string;
}

export interface LabResult {
  id: string;
  productId: string;
  productName: string;
  testType: string;
  result: "pass" | "fail" | "pending";
  date: string;
  analyst: string;
  parameters: string;
}

export interface Certification {
  id: string;
  productId: string;
  productName: string;
  manufacturer: string;
  certNumber: string;
  issueDate: string;
  expiryDate: string;
  status: "active" | "expired" | "revoked" | "suspended";
}

export const products: Product[] = [
  { id: "P001", name: "Soya Pieces - Chicken", manufacturer: "Sunseed Oil Ltd", category: "Processed Foods", batchNumber: "BN-2026-001", expiryDate: "2026-12-15", certificationStatus: "certified", registrationDate: "2025-06-10" },
  { id: "P002", name: "Maize Flour (Ufa)", manufacturer: "Rab Processors Ltd", category: "Grain Products", batchNumber: "BN-2026-045", expiryDate: "2026-08-20", certificationStatus: "certified", registrationDate: "2025-03-22" },
  { id: "P003", name: "Tomato Sauce", manufacturer: "Capital Foods Malawi", category: "Condiments", batchNumber: "BN-2026-078", expiryDate: "2026-04-30", certificationStatus: "expired", registrationDate: "2024-11-15" },
  { id: "P004", name: "Fresh Milk 500ml", manufacturer: "Lilongwe Dairy", category: "Dairy Products", batchNumber: "BN-2026-112", expiryDate: "2026-04-18", certificationStatus: "pending", registrationDate: "2026-03-01" },
  { id: "P005", name: "Cooking Oil 2L", manufacturer: "Sunseed Oil Ltd", category: "Oils & Fats", batchNumber: "BN-2026-156", expiryDate: "2027-01-10", certificationStatus: "certified", registrationDate: "2025-09-08" },
  { id: "P006", name: "Groundnut Flour", manufacturer: "ADMARC Foods", category: "Grain Products", batchNumber: "BN-2026-189", expiryDate: "2026-11-25", certificationStatus: "certified", registrationDate: "2025-07-14" },
  { id: "P007", name: "Bottled Water 1.5L", manufacturer: "Aqua Pure MW", category: "Beverages", batchNumber: "BN-2026-200", expiryDate: "2027-06-01", certificationStatus: "certified", registrationDate: "2026-01-05" },
  { id: "P008", name: "Chicken Sausages", manufacturer: "Central Poultry", category: "Meat Products", batchNumber: "BN-2026-234", expiryDate: "2026-05-15", certificationStatus: "rejected", registrationDate: "2026-02-20" },
  { id: "P009", name: "Mango Juice 1L", manufacturer: "Malawi Mangoes", category: "Beverages", batchNumber: "BN-2026-267", expiryDate: "2026-09-30", certificationStatus: "pending", registrationDate: "2026-03-12" },
  { id: "P010", name: "Rice 5kg", manufacturer: "Bua Rice Mills", category: "Grain Products", batchNumber: "BN-2026-290", expiryDate: "2027-03-15", certificationStatus: "certified", registrationDate: "2025-12-01" },
];

export const inspections: Inspection[] = [
  { id: "INS001", productId: "P001", productName: "Soya Pieces - Chicken", location: "Shoprite Lilongwe", inspector: "James Banda", date: "2026-04-05", status: "passed", type: "routine", findings: "Product meets all quality standards. Labeling compliant." },
  { id: "INS002", productId: "P003", productName: "Tomato Sauce", location: "PTC Blantyre", inspector: "James Banda", date: "2026-04-03", status: "failed", type: "complaint", findings: "Expired certification. Product pulled from shelves." },
  { id: "INS003", productId: "P004", productName: "Fresh Milk 500ml", location: "Chipiku Stores Mzuzu", inspector: "Peter Mwale", date: "2026-04-08", status: "pending", type: "routine", findings: "Awaiting lab results for microbiological analysis." },
  { id: "INS004", productId: "P005", productName: "Cooking Oil 2L", location: "Metro Lilongwe", inspector: "James Banda", date: "2026-04-01", status: "passed", type: "routine", findings: "All parameters within acceptable range." },
  { id: "INS005", productId: "P008", productName: "Chicken Sausages", location: "Spar Zomba", inspector: "Peter Mwale", date: "2026-03-28", status: "failed", type: "follow-up", findings: "Temperature non-compliance during storage. Manufacturer notified." },
  { id: "INS006", productId: "P002", productName: "Maize Flour (Ufa)", location: "ADMARC Market Lilongwe", inspector: "James Banda", date: "2026-04-07", status: "passed", type: "routine", findings: "Proper packaging and labeling. Moisture content within limits." },
  { id: "INS007", productId: "P007", productName: "Bottled Water 1.5L", location: "Game Stores Blantyre", inspector: "Peter Mwale", date: "2026-04-09", status: "passed", type: "routine", findings: "pH and mineral content within specification." },
  { id: "INS008", productId: "P009", productName: "Mango Juice 1L", location: "Peoples Supermarket", inspector: "James Banda", date: "2026-04-10", status: "pending", type: "routine", findings: "Samples collected for lab testing." },
];

export const labResults: LabResult[] = [
  { id: "LR001", productId: "P001", productName: "Soya Pieces - Chicken", testType: "Microbiological", result: "pass", date: "2026-04-04", analyst: "Mary Phiri", parameters: "E.coli: <10 CFU/g, Salmonella: Absent" },
  { id: "LR002", productId: "P003", productName: "Tomato Sauce", testType: "Chemical", result: "fail", date: "2026-04-02", analyst: "Mary Phiri", parameters: "Preservative level: 320mg/kg (max: 200mg/kg)" },
  { id: "LR003", productId: "P005", productName: "Cooking Oil 2L", testType: "Chemical", result: "pass", date: "2026-03-30", analyst: "John Kamanga", parameters: "FFA: 0.12% (max: 0.3%), Peroxide: 2.1 meq/kg" },
  { id: "LR004", productId: "P004", productName: "Fresh Milk 500ml", testType: "Microbiological", result: "pending", date: "2026-04-08", analyst: "Mary Phiri", parameters: "Total Plate Count: Pending, Coliform: Pending" },
  { id: "LR005", productId: "P008", productName: "Chicken Sausages", testType: "Microbiological", result: "fail", date: "2026-03-27", analyst: "John Kamanga", parameters: "Listeria monocytogenes: Detected" },
  { id: "LR006", productId: "P002", productName: "Maize Flour (Ufa)", testType: "Chemical", result: "pass", date: "2026-04-06", analyst: "Mary Phiri", parameters: "Aflatoxin: 3.2 ppb (max: 10 ppb), Moisture: 12.5%" },
  { id: "LR007", productId: "P007", productName: "Bottled Water 1.5L", testType: "Physical/Chemical", result: "pass", date: "2026-04-09", analyst: "John Kamanga", parameters: "pH: 7.2, TDS: 120 mg/L, Turbidity: 0.3 NTU" },
];

export const certifications: Certification[] = [
  { id: "C001", productId: "P001", productName: "Soya Pieces - Chicken", manufacturer: "Sunseed Oil Ltd", certNumber: "MBS/FQ/2025/001", issueDate: "2025-06-15", expiryDate: "2026-06-15", status: "active" },
  { id: "C002", productId: "P002", productName: "Maize Flour (Ufa)", manufacturer: "Rab Processors Ltd", certNumber: "MBS/FQ/2025/012", issueDate: "2025-03-25", expiryDate: "2026-03-25", status: "expired" },
  { id: "C003", productId: "P003", productName: "Tomato Sauce", manufacturer: "Capital Foods Malawi", certNumber: "MBS/FQ/2024/089", issueDate: "2024-11-20", expiryDate: "2025-11-20", status: "expired" },
  { id: "C004", productId: "P005", productName: "Cooking Oil 2L", manufacturer: "Sunseed Oil Ltd", certNumber: "MBS/FQ/2025/045", issueDate: "2025-09-10", expiryDate: "2026-09-10", status: "active" },
  { id: "C005", productId: "P006", productName: "Groundnut Flour", manufacturer: "ADMARC Foods", certNumber: "MBS/FQ/2025/056", issueDate: "2025-07-18", expiryDate: "2026-07-18", status: "active" },
  { id: "C006", productId: "P007", productName: "Bottled Water 1.5L", manufacturer: "Aqua Pure MW", certNumber: "MBS/FQ/2026/003", issueDate: "2026-01-08", expiryDate: "2027-01-08", status: "active" },
  { id: "C007", productId: "P008", productName: "Chicken Sausages", manufacturer: "Central Poultry", certNumber: "MBS/FQ/2025/078", issueDate: "2025-08-15", expiryDate: "2026-08-15", status: "suspended" },
  { id: "C008", productId: "P010", productName: "Rice 5kg", manufacturer: "Bua Rice Mills", certNumber: "MBS/FQ/2025/099", issueDate: "2025-12-05", expiryDate: "2026-12-05", status: "active" },
];

export const dashboardStats = {
  totalProducts: products.length,
  activeInspections: inspections.filter(i => i.status === "pending").length,
  certifiedProducts: products.filter(p => p.certificationStatus === "certified").length,
  pendingLabResults: labResults.filter(l => l.result === "pending").length,
  failedInspections: inspections.filter(i => i.status === "failed").length,
  expiringCerts: certifications.filter(c => c.status === "expired").length,
};

export const monthlyInspections = [
  { month: "Jan", passed: 12, failed: 3, pending: 2 },
  { month: "Feb", passed: 15, failed: 2, pending: 4 },
  { month: "Mar", passed: 18, failed: 5, pending: 3 },
  { month: "Apr", passed: 8, failed: 2, pending: 2 },
];

export const complianceByCategory = [
  { category: "Grain Products", compliant: 85, nonCompliant: 15 },
  { category: "Dairy Products", compliant: 72, nonCompliant: 28 },
  { category: "Beverages", compliant: 92, nonCompliant: 8 },
  { category: "Processed Foods", compliant: 78, nonCompliant: 22 },
  { category: "Meat Products", compliant: 65, nonCompliant: 35 },
  { category: "Oils & Fats", compliant: 88, nonCompliant: 12 },
];
