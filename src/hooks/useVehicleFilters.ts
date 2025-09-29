import { useState, useMemo } from 'react';
import type { Vehicle } from '@/services/carsApi';

export interface VehicleFilterState {
  searchTerm: string;
  selectedBrand: string;
  selectedBodyType: string;
  selectedTransmission: string;
  selectedFuel: string;
  priceRange: [number, number];
  mileageRange: [number, number];
  yearRange: [number, number];
  sortBy: string;
}

export const useVehicleFilters = (vehicles: Vehicle[]) => {
  const [filters, setFilters] = useState<VehicleFilterState>({
    searchTerm: '',
    selectedBrand: '',
    selectedBodyType: '',
    selectedTransmission: '',
    selectedFuel: '',
    priceRange: [0, 100000],
    mileageRange: [0, 300000],
    yearRange: [2000, new Date().getFullYear()],
    sortBy: '',
  });

  // Extract unique values for filter options
  const filterOptions = useMemo(() => {
    const brands = [...new Set(vehicles.map(v => v.brand).filter(Boolean))].sort();
    const bodyTypes = [...new Set(vehicles.map(v => v.type).filter(Boolean))].sort();
    const transmissions = [...new Set(vehicles.map(v => v.transmission).filter(Boolean))].sort();
    const fuels = [...new Set(vehicles.map(v => v.fuel).filter(Boolean))].sort();
    
    return { brands, bodyTypes, transmissions, fuels };
  }, [vehicles]);

  // Filter and sort vehicles
  const filteredVehicles = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch = 
          vehicle.brand.toLowerCase().includes(searchLower) ||
          vehicle.model.toLowerCase().includes(searchLower) ||
          `${vehicle.brand} ${vehicle.model}`.toLowerCase().includes(searchLower);
        
        if (!matchesSearch) return false;
      }

      // Brand filter
      if (filters.selectedBrand && vehicle.brand !== filters.selectedBrand) {
        return false;
      }

      // Body type filter
      if (filters.selectedBodyType && vehicle.type !== filters.selectedBodyType) {
        return false;
      }

      // Transmission filter
      if (filters.selectedTransmission && vehicle.transmission !== filters.selectedTransmission) {
        return false;
      }

      // Fuel filter
      if (filters.selectedFuel && vehicle.fuel !== filters.selectedFuel) {
        return false;
      }

      // Price range filter
      if (vehicle.price < filters.priceRange[0] || 
          (filters.priceRange[1] < 100000 && vehicle.price > filters.priceRange[1])) {
        return false;
      }

      // Mileage range filter
      if (vehicle.mileage < filters.mileageRange[0] || 
          (filters.mileageRange[1] < 300000 && vehicle.mileage > filters.mileageRange[1])) {
        return false;
      }

      // Year range filter
      if (vehicle.year < filters.yearRange[0] || vehicle.year > filters.yearRange[1]) {
        return false;
      }

      return true;
    });

    // Apply sorting
    if (filters.sortBy) {
      filtered = [...filtered].sort((a, b) => {
        switch (filters.sortBy) {
          case 'price_asc':
            return a.price - b.price;
          case 'price_desc':
            return b.price - a.price;
          case 'year_desc':
            return b.year - a.year;
          case 'year_asc':
            return a.year - b.year;
          case 'mileage_asc':
            return a.mileage - b.mileage;
          case 'mileage_desc':
            return b.mileage - a.mileage;
          case 'brand_asc':
            return a.brand.localeCompare(b.brand);
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [vehicles, filters]);

  const updateFilter = <K extends keyof VehicleFilterState>(
    key: K, 
    value: VehicleFilterState[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      selectedBrand: '',
      selectedBodyType: '',
      selectedTransmission: '',
      selectedFuel: '',
      priceRange: [0, 100000],
      mileageRange: [0, 300000],
      yearRange: [2000, new Date().getFullYear()],
      sortBy: '',
    });
  };

  return {
    filters,
    updateFilter,
    clearFilters,
    filteredVehicles,
    filterOptions,
  };
};