import type { LowStockItem } from "./lowStockItem";

export type DashboardMetrics = {
    availableServings: number;
    finishedProducts: number;
    lowStockIngredients: number;
    numRecipes: number;
    lowStockItems: LowStockItem[]
};

