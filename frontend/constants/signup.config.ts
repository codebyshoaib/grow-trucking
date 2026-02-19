/**
 * Signup Configuration
 * Centralized configuration for signup form options
 * Domain layer: Business rules and domain constants
 */

/**
 * Truck type options for signup forms
 */
export const TRUCK_TYPES = [
    'Dry Van',
    'Reefer',
    'Flatbed',
    'Box Truck',
    'Hotshot',
    'Power Only'
] as const;

/**
 * Operation area options for signup forms
 */
export const OPERATION_AREAS = [
    'Southeast',
    'Midwest',
    'Coastal',
    'Southwest',
] as const;

/**
 * Communication method options for signup forms
 */
export const COMMUNICATION_METHODS = [
    'Email',
    'Phone',
    'SMS',
    'WhatsApp'
] as const;

/**
 * Generate number of trucks options
 * @param max - Maximum number of trucks (default: 20)
 * @returns Array of truck count options with zero-padded values
 */
export const getNumberOfTrucksOptions = (max: number = 20): Array<{ value: string; label: string }> => {
   return [ 
    { value:'0-7' , label:'0-7' },
    { value:'8-15' , label:'8-15' },
    { value:'20+' , label:'20+' },
   ]
};

/**
 * Type exports for TypeScript type safety
 */
export type TruckType = typeof TRUCK_TYPES[number];
export type OperationArea = typeof OPERATION_AREAS[number];
export type CommunicationMethod = typeof COMMUNICATION_METHODS[number];
