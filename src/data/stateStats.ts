export type StateStat = {
  /** name as it appears in the GeoJSON `st_nm` property */
  name: string;
  /** display label (UT marked with *) */
  label: string;
  speiMean: number | null;
  speiSd: number | null;
  floodMean: number | null;
  floodSd: number | null;
  precipMean: number | null;
  precipSd: number | null;
  population: number | null;
  agriShare: number | null;
  baselineInf: number | null;
};

export const STATE_STATS: StateStat[] = [
  { name: "Andaman and Nicobar Islands", label: "Andaman & Nicobar*", speiMean: -0.269, speiSd: 0.337, floodMean: 0.235, floodSd: 0.44, precipMean: 0.26, precipSd: 0.497, population: 397625, agriShare: null, baselineInf: 0.414 },
  { name: "Andhra Pradesh", label: "Andhra Pradesh", speiMean: -0.114, speiSd: 0.303, floodMean: 0.395, floodSd: 0.287, precipMean: 0.0, precipSd: 0.0, population: 53812796, agriShare: 41.0, baselineInf: 0.755 },
  { name: "Arunachal Pradesh", label: "Arunachal Pradesh", speiMean: -0.454, speiSd: 0.522, floodMean: null, floodSd: null, precipMean: 0.14, precipSd: 0.163, population: 1773952, agriShare: null, baselineInf: 0.647 },
  { name: "Assam", label: "Assam", speiMean: -1.019, speiSd: 0.71, floodMean: 0.156, floodSd: 0.268, precipMean: 0.162, precipSd: 0.297, population: 35716641, agriShare: 42.8, baselineInf: 0.698 },
  { name: "Bihar", label: "Bihar", speiMean: -0.492, speiSd: 0.69, floodMean: 0.171, floodSd: 0.218, precipMean: 0.178, precipSd: 0.226, population: 128035146, agriShare: 48.9, baselineInf: 0.809 },
  { name: "Chandigarh", label: "Chandigarh*", speiMean: -0.164, speiSd: 0.291, floodMean: 0.11, floodSd: 0.292, precipMean: 0.143, precipSd: 0.378, population: 898124, agriShare: null, baselineInf: 0.337 },
  { name: "Chhattisgarh", label: "Chhattisgarh", speiMean: -0.117, speiSd: 0.209, floodMean: 0.154, floodSd: 0.124, precipMean: 0.144, precipSd: 0.114, population: 30120983, agriShare: 56.5, baselineInf: 0.808 },
  { name: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra & Nagar Haveli & Daman & Diu*", speiMean: -0.116, speiSd: 0.307, floodMean: 0.269, floodSd: 0.434, precipMean: 0.271, precipSd: 0.43, population: 875565, agriShare: null, baselineInf: 0.382 },
  { name: "Delhi", label: "Delhi*", speiMean: -0.146, speiSd: 0.25, floodMean: 0.084, floodSd: 0.181, precipMean: 0.071, precipSd: 0.138, population: 19775592, agriShare: 0.2, baselineInf: 0.339 },
  { name: "Goa", label: "Goa", speiMean: -0.246, speiSd: 0.352, floodMean: 0.381, floodSd: 0.656, precipMean: 0.365, precipSd: 0.611, population: 1585803, agriShare: null, baselineInf: 0.383 },
  { name: "Gujarat", label: "Gujarat", speiMean: -0.098, speiSd: 0.258, floodMean: 0.323, floodSd: 0.27, precipMean: 0.408, precipSd: 0.371, population: 70774945, agriShare: 41.3, baselineInf: 0.638 },
  { name: "Haryana", label: "Haryana", speiMean: -0.222, speiSd: 0.283, floodMean: 0.227, floodSd: 0.202, precipMean: 0.231, precipSd: 0.188, population: 30018238, agriShare: 23.6, baselineInf: 0.612 },
  { name: "Himachal Pradesh", label: "Himachal Pradesh", speiMean: -0.338, speiSd: 0.39, floodMean: 0.484, floodSd: 0.452, precipMean: 0.512, precipSd: 0.494, population: 7732092, agriShare: 51.6, baselineInf: 0.812 },
  { name: "Jammu and Kashmir", label: "Jammu and Kashmir*", speiMean: -0.453, speiSd: 0.459, floodMean: 0.402, floodSd: 0.21, precipMean: 0.27, precipSd: 0.175, population: 14837771, agriShare: 40.4, baselineInf: 0.722 },
  { name: "Jharkhand", label: "Jharkhand", speiMean: -0.596, speiSd: 0.856, floodMean: 0.122, floodSd: 0.1, precipMean: 0.135, precipSd: 0.125, population: 40038790, agriShare: 44.3, baselineInf: 0.778 },
  { name: "Karnataka", label: "Karnataka", speiMean: -0.195, speiSd: 0.516, floodMean: 0.44, floodSd: 0.38, precipMean: 0.519, precipSd: 0.444, population: 70289332, agriShare: 38.7, baselineInf: 0.677 },
  { name: "Kerala", label: "Kerala", speiMean: -0.171, speiSd: 0.452, floodMean: 0.554, floodSd: 0.488, precipMean: 0.583, precipSd: 0.531, population: 34812874, agriShare: 20.0, baselineInf: 0.627 },
  { name: "Ladakh", label: "Ladakh*", speiMean: -0.625, speiSd: 0.49, floodMean: 0.433, floodSd: 0.514, precipMean: 2.482, precipSd: 1.282, population: 311121, agriShare: null, baselineInf: 0.63 },
  { name: "Madhya Pradesh", label: "Madhya Pradesh", speiMean: -0.104, speiSd: 0.214, floodMean: 0.268, floodSd: 0.091, precipMean: 0.28, precipSd: 0.108, population: 85836176, agriShare: 58.8, baselineInf: 0.791 },
  { name: "Maharashtra", label: "Maharashtra", speiMean: -0.168, speiSd: 0.444, floodMean: 0.41, floodSd: 0.33, precipMean: 0.431, precipSd: 0.343, population: 128873322, agriShare: 41.7, baselineInf: 0.662 },
  { name: "Manipur", label: "Manipur", speiMean: -1.41, speiSd: 1.544, floodMean: 0.169, floodSd: 0.23, precipMean: 0.266, precipSd: 0.38, population: 3562591, agriShare: null, baselineInf: 0.732 },
  { name: "Meghalaya", label: "Meghalaya", speiMean: -0.765, speiSd: 1.085, floodMean: null, floodSd: null, precipMean: 0.0, precipSd: 0.0, population: 3830186, agriShare: null, baselineInf: 0.723 },
  { name: "Mizoram", label: "Mizoram", speiMean: -1.031, speiSd: 0.862, floodMean: 0.074, floodSd: 0.195, precipMean: 0.063, precipSd: 0.166, population: 1347778, agriShare: null, baselineInf: 0.622 },
  { name: "Nagaland", label: "Nagaland", speiMean: -0.981, speiSd: 0.848, floodMean: 0.078, floodSd: 0.089, precipMean: 0.078, precipSd: 0.089, population: 2063257, agriShare: null, baselineInf: 0.461 },
  { name: "Odisha", label: "Odisha", speiMean: -0.144, speiSd: 0.19, floodMean: 0.484, floodSd: 0.382, precipMean: 0.483, precipSd: 0.342, population: 47490689, agriShare: 53.3, baselineInf: 0.792 },
  { name: "Puducherry", label: "Puducherry*", speiMean: -0.186, speiSd: 0.493, floodMean: 0.279, floodSd: 0.479, precipMean: 0.286, precipSd: 0.488, population: 1461973, agriShare: null, baselineInf: 0.5 },
  { name: "Punjab", label: "Punjab", speiMean: -0.393, speiSd: 0.509, floodMean: 0.284, floodSd: 0.295, precipMean: 0.29, precipSd: 0.319, population: 31400601, agriShare: 23.8, baselineInf: 0.599 },
  { name: "Rajasthan", label: "Rajasthan", speiMean: -0.061, speiSd: 0.104, floodMean: 0.306, floodSd: 0.3, precipMean: 0.366, precipSd: 0.314, population: 81939818, agriShare: 55.3, baselineInf: 0.736 },
  { name: "Sikkim", label: "Sikkim", speiMean: -0.161, speiSd: 0.276, floodMean: 0.098, floodSd: 0.238, precipMean: 0.0, precipSd: 0.0, population: 678184, agriShare: null, baselineInf: 0.622 },
  { name: "Tamil Nadu", label: "Tamil Nadu", speiMean: -0.152, speiSd: 0.401, floodMean: 0.331, floodSd: 0.174, precipMean: 0.395, precipSd: 0.255, population: 82677789, agriShare: 25.7, baselineInf: 0.597 },
  { name: "Telangana", label: "Telangana", speiMean: -0.076, speiSd: 0.2, floodMean: 0.211, floodSd: 0.278, precipMean: 0.202, precipSd: 0.245, population: 39809404, agriShare: 40.5, baselineInf: 0.653 },
  { name: "Tripura", label: "Tripura", speiMean: -1.124, speiSd: 0.829, floodMean: 0.12, floodSd: 0.316, precipMean: 0.1, precipSd: 0.264, population: 4112980, agriShare: null, baselineInf: 0.658 },
  { name: "Uttar Pradesh", label: "Uttar Pradesh", speiMean: -0.088, speiSd: 0.151, floodMean: 0.265, floodSd: 0.151, precipMean: 0.265, precipSd: 0.149, population: 236277703, agriShare: 48.8, baselineInf: 0.803 },
  { name: "Uttarakhand", label: "Uttarakhand", speiMean: -0.329, speiSd: 0.501, floodMean: 0.39, floodSd: 0.227, precipMean: 0.557, precipSd: 0.24, population: 12010595, agriShare: 33.4, baselineInf: 0.667 },
  { name: "West Bengal", label: "West Bengal", speiMean: -0.56, speiSd: 1.035, floodMean: 0.414, floodSd: 0.3, precipMean: 0.441, precipSd: 0.304, population: 101858613, agriShare: 37.6, baselineInf: 0.699 },
];

export const STATE_STATS_BY_NAME: Record<string, StateStat> = Object.fromEntries(
  STATE_STATS.map((s) => [s.name, s]),
);
