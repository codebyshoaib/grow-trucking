# State and Lane Data Structure Guide

This guide explains the extended data structure for State and Lane entities to support all 14 state page sections and 9 lane page sections.

## State Entity - New Fields

### Section 6: Seasonal Trends
```json
"seasonalTrends": {
  "q1": {
    "rateMovement": "Rates typically decrease 5-10% as market recovers from holiday season",
    "weatherImpact": "Winter weather can create rate spikes during storms",
    "strategy": "Position near distribution hubs early in the week for best rates"
  },
  "q2": {
    "rateMovement": "Strong rate increases as freight volume picks up",
    "weatherImpact": "Spring weather generally favorable, minimal disruptions",
    "strategy": "Focus on agricultural and retail freight during peak season"
  },
  "q3": {
    "rateMovement": "Peak rates during summer months",
    "weatherImpact": "Heat can impact certain freight types",
    "strategy": "Maximize outbound loads, plan for backhaul opportunities"
  },
  "q4": {
    "rateMovement": "Highest rates during holiday shipping season",
    "weatherImpact": "Winter weather begins to impact northern routes",
    "strategy": "Book early, rates peak in November-December"
  }
}
```

### Section 7: Major Freight Hubs
```json
"ports": [
  {
    "name": "Port of Houston",
    "description": "Largest port in Texas, handles significant container traffic"
  }
],
"intermodalCenters": [
  {
    "name": "Dallas Intermodal Terminal",
    "description": "Major rail-to-truck transfer facility"
  }
],
"borderCrossings": [
  {
    "name": "Laredo Border Crossing",
    "description": "Busiest border crossing for freight between US and Mexico"
  }
]
```

### Section 8: Truck Parking & Fuel
```json
"truckStops": [
  {
    "name": "Pilot Travel Center - Dallas",
    "location": "I-35, Exit 420",
    "description": "Full-service facility with 200+ parking spaces"
  }
],
"parkingDifficulty": "Moderate - Metro areas have high demand, especially evenings",
"strategicPositioning": [
  "Position near major distribution centers in Dallas for quick access to loads",
  "Stay near high-traffic freight corridors for backhaul opportunities"
]
```

### Section 9: Weigh Stations & Regulations
```json
"weightLimits": {
  "singleAxle": "20,000 lbs",
  "tandemAxle": "34,000 lbs",
  "grossVehicleWeight": "80,000 lbs (standard)"
},
"sizeLimits": {
  "width": "8.5 feet (102 inches)",
  "height": "13.5 feet (varies by route)",
  "length": "53 feet (trailer)"
},
"permits": [
  {
    "type": "Oversized/Overweight",
    "description": "Required for loads exceeding standard weight or size limits"
  }
],
"emissionLaws": "CARB compliance required for California routes"
```

### Section 10: Rate Trends (10-Year Analysis)
```json
"rateTrends": {
  "historicalRates": [
    {
      "period": "2018-2019",
      "description": "Strong market with rates reaching peak levels due to capacity constraints"
    },
    {
      "period": "2021-2022",
      "description": "Record-high rates driven by demand surge and supply chain disruptions"
    }
  ],
  "marketCorrections": [
    {
      "period": "Q1 2023",
      "description": "Significant correction as capacity increased and demand normalized"
    }
  ],
  "projection2025": "Moderate growth expected with steady rate increases as market stabilizes",
  "rateDrivers": [
    "Freight volume and demand",
    "Available truck capacity",
    "Fuel costs and operating expenses",
    "Major industry activity"
  ]
}
```

### Section 11: Deadhead Strategy
```json
"deadheadStrategy": {
  "outboundPercentage": "65%",
  "inboundPercentage": "35%",
  "bestBackhaulLanes": [
    {
      "name": "Atlanta to Dallas",
      "description": "Strong return lane with consistent freight",
      "rate": "$2.50-$3.00/mile"
    }
  ],
  "positioningStrategies": [
    "Position near distribution hubs for quick access to outbound loads",
    "Arrive at destination areas during peak booking times (6-9 AM)",
    "Use load boards before arriving to pre-book backhaul loads"
  ]
}
```

### Section 12: Professional Dispatcher Insights
```json
"dispatcherInsights": [
  "In Texas, timing is everything. Book outbound loads early in the week when rates are typically 10-15% higher.",
  "The Dallas area sees the highest load volume, but don't ignore secondary markets - they often offer better rates.",
  "Weather patterns in Texas can create sudden rate spikes. Monitor forecasts and position ahead of storms."
]
```

### Section 13: FAQ Section
```json
"faq": [
  {
    "question": "Do I need state authority to operate in Texas?",
    "answer": "Yes, you need proper authority including USDOT number, MC number, and state-specific permits."
  },
  {
    "question": "What insurance is required for trucking in Texas?",
    "answer": "Minimum insurance requirements include primary liability coverage (typically $750,000-$1,000,000)."
  }
]
```

## Lane Entity - New Fields

### Section 4: What Moves on This Lane?
```json
"primaryCommodities": [
  "Consumer Goods",
  "Electronics",
  "Automotive Parts",
  "E-commerce Packages"
],
"secondaryCommodities": [
  "Specialized Equipment",
  "Partial Loads",
  "LTL Shipments"
],
"seasonalCargo": [
  "Holiday Retail Goods (Q4)",
  "Produce (Spring/Summer)",
  "Back-to-School Items (Q3)"
]
```

### Section 5: Seasonal Behavior
```json
"seasonalBehavior": {
  "q1Slow": "Yes - Lower volume as businesses recover from holidays",
  "q4Peak": "Yes - Highest volume during holiday shipping season",
  "produceSeason": "Spring and Summer for agricultural routes",
  "hurricaneRisk": "June-November for coastal routes"
}
```

### Section 6: Rate Negotiation Strategy
```json
"rateNegotiation": {
  "whenToBook": [
    "Early Morning (6-9 AM) - Peak booking times with best rates",
    "Monday-Wednesday - Strongest rates early in the week",
    "Pre-Weekend - Time-sensitive loads often pay premium"
  ],
  "whatBrokersPayMore": [
    "Time-Sensitive Freight - Hot loads with tight delivery windows",
    "Specialized Equipment - Reefer, flatbed, or specialized trailers",
    "Reliable Carriers - Established relationships command better rates"
  ],
  "whenToAvoid": [
    "Low-Ball Offers - Rates significantly below market average",
    "Unreliable Brokers - Check broker ratings and payment history",
    "Peak Competition Times - Friday afternoons often have rate pressure"
  ]
}
```

### Section 7: Backhaul Strategy
```json
"backhaulStrategy": {
  "bestReturnCities": [
    "Atlanta, GA",
    "Charlotte, NC",
    "Memphis, TN"
  ],
  "deadheadRiskPercentage": "25% - Moderate risk, good backhaul opportunities available",
  "alternativeRoutes": [
    "Slight detour to high-volume areas",
    "Positioning near distribution centers",
    "Multi-stop routes for better rates"
  ]
}
```

### Section 8: Dispatcher Insider Tips
The existing `tips` field is used for dispatcher tips. Example:
```json
"tips": [
  "On the Dallas to Atlanta lane, book early in the week when rates are typically 10-15% higher.",
  "Position yourself near Atlanta distribution centers the night before delivery for quick access to backhaul loads.",
  "Weather patterns can create sudden rate spikes. Monitor forecasts and position ahead of storms."
]
```

## Implementation Notes

1. **All new fields are optional** - Components handle missing data gracefully
2. **Backward compatible** - Existing JSON files will continue to work
3. **Progressive enhancement** - Add data fields as they become available
4. **Type safety** - TypeScript types ensure data structure consistency

## Next Steps

1. Populate state JSON files with the new fields
2. Populate lane JSON files with the new fields
3. Components will automatically display data when available
4. Use the JSON schema (`state.schema.json`) for validation

## Example: Complete State Entry

See `texas.json` for a complete example. New fields can be added incrementally without breaking existing functionality.
