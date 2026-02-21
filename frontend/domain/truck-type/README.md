# Truck Type Domain Module

## Architecture Overview

This module implements a **Domain-Driven Design (DDD)** architecture for truck type pages, following senior-level software engineering principles.

## Layer Structure

### 1. Domain Layer (`domain/truck-type/`)
- **Purpose**: Contains business logic, entities, and domain rules
- **Files**:
  - `truck-type.config.ts`: Domain registry and factory pattern implementation
  - Contains all truck type entities with their business rules

### 2. Types Layer (`types/truck-type.types.ts`)
- **Purpose**: Type definitions and domain contracts
- **Contains**:
  - `TruckTypeEntity`: Core domain entity
  - `TruckTypeSlug`: Value object for URL slugs
  - `FeatureItem`, `BenefitItem`: Value objects
  - `ITruckTypeRegistry`: Domain service interface

### 3. Presentation Layer (`components/pages/truck-type/`)
- **Purpose**: Reusable UI components
- **Components**:
  - `TruckTypeHero`: Hero section with tagline and CTA
  - `TruckTypeOverview`: Two-column overview with image
  - `TruckTypeFeatures`: Grid of key features
  - `TruckTypeBenefits`: Benefits section with icons
  - `TruckTypeKeyPoints`: Checkmark list of offerings
  - `TruckTypeCTA`: Call-to-action section
  - `TruckTypePage`: Main page template orchestrator

### 4. Application Layer (`app/truck-type/[slug]/`)
- **Purpose**: Route handlers and page composition
- **Files**:
  - `page.tsx`: Dynamic route handler with metadata generation
  - `layout.tsx`: Layout wrapper

## Design Patterns

### Registry Pattern
The `TruckTypeRegistry` class implements a registry pattern:
- Centralized storage of all truck type entities
- Lazy initialization
- Type-safe access methods

### Factory Pattern
Truck type entities are created through a private factory method `getAllTruckTypes()`, ensuring:
- Consistent entity structure
- Centralized business rules
- Easy extensibility

### Template Method Pattern
The `TruckTypePage` component uses template method pattern:
- Reusable page structure
- Consistent section ordering
- Easy to extend with new sections

## Adding a New Truck Type

1. **Add to Domain Registry** (`domain/truck-type/truck-type.config.ts`):
   ```typescript
   {
     id: 'new-truck-type',
     name: 'New Truck Type',
     // ... all required fields
   }
   ```

2. **Add to Type Definitions** (`types/truck-type.types.ts`):
   - Add slug to `TruckTypeSlug` union type

3. **Update Navigation** (`constants/navigation.config.ts`):
   - Add to `truckTypes` array

The page will automatically be available at `/truck-type/new-truck-type`

## Benefits of This Architecture

1. **Single Source of Truth**: All truck type data in one place
2. **Type Safety**: Full TypeScript support throughout
3. **Reusability**: One template for all truck types
4. **Maintainability**: Easy to update all pages by updating domain config
5. **SEO Optimized**: Automatic metadata and schema generation
6. **Scalability**: Easy to add new truck types or sections

## Usage Example

```typescript
import { TruckTypeRegistry } from '@/domain/truck-type/truck-type.config'

// Get a specific truck type
const dryVan = TruckTypeRegistry.getBySlug('dry-van')

// Get all truck types
const allTypes = TruckTypeRegistry.getAll()

// Check if exists
const exists = TruckTypeRegistry.exists('reefer')
```
