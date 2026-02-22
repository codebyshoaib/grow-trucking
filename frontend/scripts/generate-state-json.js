/**
 * Script to generate state JSON files from lane data
 * Run with: node frontend/scripts/generate-state-json.js
 */

const fs = require('fs');
const path = require('path');

// State abbreviations mapping
const stateAbbreviations = {
    'CALIFORNIA': 'CA',
    'TEXAS': 'TX',
    'ILLINOIS': 'IL',
    'FLORIDA': 'FL',
    'GEORGIA': 'GA',
    'PENNSYLVANIA': 'PA',
    'OHIO': 'OH',
    'NORTH CAROLINA': 'NC',
    'ARIZONA': 'AZ',
    'WASHINGTON': 'WA',
    'TENNESSEE': 'TN',
    'INDIANA': 'IN',
    'MICHIGAN': 'MI',
    'NEW JERSEY': 'NJ',
    'WISCONSIN': 'WI',
    'MINNESOTA': 'MN',
    'COLORADO': 'CO',
    'OREGON': 'OR',
    'KENTUCKY': 'KY',
    'LOUISIANA': 'LA',
    'ALABAMA': 'AL',
    'VIRGINIA': 'VA',
    'MISSOURI': 'MO',
    'OKLAHOMA': 'OK',
    'KANSAS': 'KS',
    'SOUTH CAROLINA': 'SC',
    'IOWA': 'IA',
    'ARKANSAS': 'AR',
    'MARYLAND': 'MD',
    'MISSISSIPPI': 'MS',
    'NEVADA': 'NV',
    'NEW MEXICO': 'NM',
    'UTAH': 'UT',
    'CONNECTICUT': 'CT',
    'NEBRASKA': 'NE',
    'IDAHO': 'ID',
    'MASSACHUSETTS': 'MA',
    'WEST VIRGINIA': 'WV',
    'MAINE': 'ME',
    'MONTANA': 'MT',
    'RHODE ISLAND': 'RI',
    'NORTH DAKOTA': 'ND',
    'SOUTH DAKOTA': 'SD',
    'DELAWARE': 'DE',
    'VERMONT': 'VT',
    'NEW HAMPSHIRE': 'NH',
    'WYOMING': 'WY',
    'ALASKA': 'AK',
    'HAWAII': 'HI'
};

// Convert state name to slug
function stateToSlug(stateName) {
    return stateName.toLowerCase().replace(/\s+/g, '-');
}

// Convert lane name to slug
function laneToSlug(laneName) {
    return laneName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/→/g, '-to-')
        .replace(/[^a-z0-9-]/g, '');
}

// Parse lane string (e.g., "Los Angeles→Dallas")
function parseLane(laneStr) {
    const [origin, destination] = laneStr.split('→').map(s => s.trim());
    const laneName = `${origin} → ${destination}`;
    const slug = laneToSlug(laneName);
    const id = slug.replace(/-/g, '');

    return {
        id,
        name: laneName,
        displayName: `${origin} to ${destination}`,
        slug,
        origin,
        destination,
    };
}

// Generate lane entity
function generateLaneEntity(laneData, stateSlug, stateName) {
    const { id, name, displayName, slug, origin, destination } = laneData;

    // Estimate distance (placeholder - would need actual distance calculation)
    const estimatedDistance = Math.floor(Math.random() * 1500 + 500) + ' miles';
    const estimatedTransitTime = Math.floor(Math.random() * 3 + 1) + '-' + (Math.floor(Math.random() * 2 + 2)) + ' days';
    const estimatedRate = '$' + Math.floor(Math.random() * 3000 + 1500) + ' - $' + Math.floor(Math.random() * 2000 + 4000);
    const estimatedRatePerMile = '$' + (Math.random() * 0.9 + 2.2).toFixed(2) + ' - $' + (Math.random() * 0.9 + 3.0).toFixed(2);

    // Determine if coastal route (for hurricane risk)
    const isCoastalRoute = ['Miami', 'Houston', 'New Orleans', 'Charleston', 'Jacksonville', 'Tampa', 'Orlando', 'Savannah', 'Corpus Christi', 'Brownsville', 'Gulfport'].some(city =>
        destination.includes(city) || origin.includes(city)
    );

    return {
        id: `${stateSlug}-${id}`,
        name,
        displayName,
        slug,
        stateSlug,
        description: `High-demand freight route connecting ${origin} to ${destination}. One of the busiest lanes with consistent freight volumes.`,
        origin: `${origin}, ${stateAbbreviations[stateName.toUpperCase()] || ''}`,
        destination,
        distance: estimatedDistance,
        averageTransitTime: estimatedTransitTime,
        averageRate: estimatedRate,
        ratePerMile: estimatedRatePerMile,
        loadFrequency: 'Daily',
        peakSeasons: ['Spring', 'Fall', 'Holiday Season'],
        freightTypes: ['Consumer Goods', 'Electronics', 'Automotive Parts', 'E-commerce'],
        keyFeatures: [
            'Consistent freight volumes year-round',
            'Multiple load opportunities daily',
            'Premium rates for expedited service',
            'Well-established route with good infrastructure'
        ],
        benefits: [
            'High earning potential',
            'Regular backhaul opportunities',
            'Multiple pickup and delivery points',
            'Strong shipper relationships'
        ],
        challenges: [
            'Long distance requires careful planning',
            'Weather considerations',
            'Fuel costs for long-haul routes'
        ],
        tips: [
            `On the ${displayName} lane, book early in the week (Monday-Wednesday) when rates are typically 10-15% higher than weekend rates.`,
            `Position yourself near ${destination} distribution centers the night before delivery for quick access to backhaul loads.`,
            `Weather patterns can create sudden rate spikes on this lane. Monitor forecasts and position ahead of storms for premium rates.`,
            `Many brokers prefer working with dispatchers who understand this specific lane. Build relationships with regional brokers for better rates.`,
            `Peak booking times are 6-9 AM. Have your truck positioned and ready to accept loads during these hours for best opportunities.`
        ],
        // Section 4: Commodities
        primaryCommodities: ['Consumer Goods', 'Electronics', 'Automotive Parts', 'E-commerce Packages'],
        secondaryCommodities: ['Specialized Equipment', 'Partial Loads', 'LTL Shipments', 'Time-Sensitive Deliveries'],
        seasonalCargo: ['Holiday Retail Goods (Q4)', 'Produce (Spring/Summer)', 'Back-to-School Items (Q3)'],
        // Section 5: Seasonal Behavior
        seasonalBehavior: {
            q1Slow: 'Yes - Lower volume as businesses recover from holidays',
            q4Peak: 'Yes - Highest volume during holiday shipping season',
            produceSeason: 'Spring and Summer for agricultural routes',
            hurricaneRisk: isCoastalRoute ? 'June-November for coastal routes' : 'Minimal risk'
        },
        // Section 6: Rate Negotiation
        rateNegotiation: {
            whenToBook: [
                'Early Morning (6-9 AM) - Peak booking times with best rate opportunities',
                'Monday-Wednesday - Strongest rates early in the week',
                'Pre-Weekend - Time-sensitive loads often pay premium'
            ],
            whatBrokersPayMore: [
                'Time-Sensitive Freight - Hot loads with tight delivery windows',
                'Specialized Equipment - Reefer, flatbed, or specialized trailers',
                'Reliable Carriers - Established relationships command better rates'
            ],
            whenToAvoid: [
                'Low-Ball Offers - Rates significantly below market average',
                'Unreliable Brokers - Check broker ratings and payment history',
                'Peak Competition Times - Friday afternoons often have rate pressure'
            ]
        },
        // Section 7: Backhaul Strategy
        backhaulStrategy: {
            bestReturnCities: [
                destination.split(',')[0] + ' area distribution hubs',
                'Major metro areas with high freight volume',
                'Industrial areas with consistent freight'
            ],
            deadheadRiskPercentage: Math.random() < 0.3 ? '15-25%' : Math.random() < 0.6 ? '25-35%' : '35-45%',
            alternativeRoutes: [
                'Slight detour to high-volume areas',
                'Positioning near distribution centers',
                'Multi-stop routes for better rates',
                'Connecting to adjacent high-demand lanes'
            ]
        },
        metaTitle: `${displayName} Truck Dispatch | ${formatStateName(stateName)} Routes`,
        metaDescription: `Professional dispatch services for ${displayName} freight routes. High-paying loads, consistent volumes, expert support.`,
        keywords: [`${displayName} dispatch`, `${origin} ${destination} trucking`, `${stateName} route`]
    };
}

// Format state name (capitalize first letter of each word)
function formatStateName(stateName) {
    return stateName
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Generate state entity
function generateStateEntity(stateName, lanes) {
    const slug = stateToSlug(stateName);
    const abbreviation = stateAbbreviations[stateName.toUpperCase()] || '';
    const formattedName = formatStateName(stateName);

    // Define these first for use in state entity
    const majorCities = ['Major City 1', 'Major City 2', 'Major City 3'];
    const keyIndustries = [
        'Manufacturing',
        'Agriculture',
        'Retail and Distribution',
        'Technology',
        'Automotive',
        'E-commerce'
    ];

    const laneEntities = lanes.map(lane => generateLaneEntity(parseLane(lane), slug, formattedName));

    return {
        id: slug,
        name: formattedName,
        displayName: formattedName,
        slug,
        abbreviation,
        tagline: `Premium ${formattedName} Truck Dispatch Services`,
        description: `Connect with high-paying freight loads across ${formattedName} and nationwide. Our expert dispatch team specializes in ${formattedName}'s major freight corridors.`,
        longDescription: `${formattedName} is a critical freight hub with diverse freight opportunities. Our dispatch services connect carriers with premium loads across ${formattedName}'s extensive highway network.`,
        overview: `${formattedName} offers diverse freight opportunities with strong demand for dry van, reefer, and flatbed services.`,
        marketOverview: `${formattedName}'s freight market is competitive with high demand for various freight types. Rates are typically competitive with national averages.`,
        averageRates: `Average rates range from $2.00-$2.40 per mile for dry van, $2.20-$2.60 for reefer, and $2.30-$2.70 for flatbed depending on route and season.`,
        marketTrends: [
            'Strong demand for regional and cross-country routes',
            'Seasonal peaks during harvest and holiday seasons',
            'E-commerce freight growing rapidly',
            'Infrastructure improvements driving efficiency'
        ],
        keyIndustries,
        majorCities,
        commonFreightTypes: [
            'Consumer Goods',
            'Electronics',
            'Automotive Parts',
            'Food Products',
            'Building Materials',
            'E-commerce Packages'
        ],
        benefits: [
            'Access to major freight corridors',
            'High freight volumes',
            'Diverse freight types',
            'Strong infrastructure',
            'Competitive rates'
        ],
        challenges: [
            'Weather considerations',
            'Traffic congestion in metro areas',
            'Regulatory compliance',
            'Fuel costs',
            'Seasonal variations'
        ],
        regulations: [
            'Federal hours of service regulations',
            'Weight restrictions on certain routes',
            'State-specific requirements',
            'Environmental standards'
        ],
        seasonalConsiderations: [
            'Peak shipping season: Fall and Winter',
            'Holiday shipping surge: November-December',
            'Weather impacts during winter months',
            'Agricultural season variations'
        ],
        // Section 6: Seasonal Trends
        seasonalTrends: {
            q1: {
                rateMovement: `Rates typically decrease 5-10% in ${formattedName} as market recovers from holiday season`,
                weatherImpact: 'Winter weather can create rate spikes during storms',
                strategy: 'Position near distribution hubs early in the week for best rates'
            },
            q2: {
                rateMovement: 'Strong rate increases as freight volume picks up',
                weatherImpact: 'Spring weather generally favorable, minimal disruptions',
                strategy: 'Focus on agricultural and retail freight during peak season'
            },
            q3: {
                rateMovement: 'Peak rates during summer months',
                weatherImpact: 'Heat can impact certain freight types',
                strategy: 'Maximize outbound loads, plan for backhaul opportunities'
            },
            q4: {
                rateMovement: 'Highest rates during holiday shipping season',
                weatherImpact: 'Winter weather begins to impact northern routes',
                strategy: 'Book early, rates peak in November-December'
            }
        },
        // Section 7: Major Freight Hubs
        ports: formattedName === 'California' || formattedName === 'Texas' || formattedName === 'Florida' || formattedName === 'Washington' ? [
            { name: `Port of ${formattedName === 'California' ? 'Los Angeles' : formattedName === 'Texas' ? 'Houston' : formattedName === 'Florida' ? 'Miami' : 'Seattle'}`, description: `Major port handling significant container traffic` }
        ] : undefined,
        intermodalCenters: [
            { name: `${majorCities[0] || formattedName} Intermodal Terminal`, description: 'Major rail-to-truck transfer facility' }
        ],
        borderCrossings: ['Texas', 'California', 'Arizona', 'New Mexico'].includes(formattedName) ? [
            { name: `${formattedName === 'Texas' ? 'Laredo' : formattedName === 'California' ? 'San Ysidro' : formattedName === 'Arizona' ? 'Nogales' : 'Santa Teresa'} Border Crossing`, description: 'Important border crossing point for international freight' }
        ] : undefined,
        // Section 8: Truck Parking & Fuel
        truckStops: [
            { name: `Pilot Travel Center - ${majorCities[0] || formattedName}`, location: 'I-35, Exit 420', description: 'Full-service facility with 200+ parking spaces' },
            { name: `Love's Travel Stop - ${majorCities[1] || formattedName}`, location: 'I-20, Exit 150', description: '24/7 fuel and amenities' }
        ],
        parkingDifficulty: 'Moderate - Metro areas have high demand, especially evenings',
        strategicPositioning: [
            `Position near major distribution centers in ${majorCities[0] || 'key cities'} for quick access to outbound loads`,
            'Stay near high-traffic freight corridors for backhaul opportunities',
            'Arrive at destination areas during peak booking times (typically early morning) for best rate opportunities'
        ],
        // Section 9: Weigh Stations & Regulations
        weightLimits: {
            singleAxle: '20,000 lbs',
            tandemAxle: '34,000 lbs',
            grossVehicleWeight: '80,000 lbs (standard)'
        },
        sizeLimits: {
            width: '8.5 feet (102 inches)',
            height: '13.5 feet (varies by route)',
            length: '53 feet (trailer)'
        },
        permits: [
            { type: 'Oversized/Overweight', description: 'Required for loads exceeding standard weight or size limits' },
            { type: 'Hazardous Materials', description: 'Required for hazmat freight' },
            { type: 'Special Route Requirements', description: 'May be needed for certain routes' }
        ],
        emissionLaws: formattedName === 'California' ? 'CARB compliance required for California routes' : undefined,
        // Section 10: Rate Trends
        rateTrends: {
            historicalRates: [
                { period: '2018-2019', description: 'Strong market with rates reaching peak levels due to capacity constraints' },
                { period: '2020', description: 'Initial volatility followed by strong recovery' },
                { period: '2021-2022', description: 'Record-high rates driven by demand surge' },
                { period: '2023-2024', description: 'Normalization with seasonal variations' }
            ],
            marketCorrections: [
                { period: 'Q1 2023', description: 'Significant correction as capacity increased' },
                { period: 'Mid-2024', description: 'Stabilization with improved balance' }
            ],
            projection2025: `Based on current market indicators, ${formattedName} is expected to see moderate growth with steady rate increases as market continues to stabilize`,
            rateDrivers: [
                'Freight volume and demand',
                'Available truck capacity',
                'Fuel costs and operating expenses',
                `Major industry activity (${keyIndustries[0] || 'key sectors'})`
            ]
        },
        // Section 11: Deadhead Strategy
        deadheadStrategy: {
            outboundPercentage: '65%',
            inboundPercentage: '35%',
            bestBackhaulLanes: laneEntities.slice(0, 3).map(lane => ({
                name: lane.displayName,
                description: 'Strong return lane with consistent freight',
                rate: lane.ratePerMile
            })),
            positioningStrategies: [
                `Position near distribution hubs in ${majorCities[0] || 'key cities'} for quick access to outbound loads`,
                'Arrive at destination areas during peak booking times (typically early morning) to secure better rates and backhaul options',
                'Leverage high-volume freight corridors to catch both outbound and inbound opportunities',
                'Use load boards before arriving at destination to pre-book backhaul loads and minimize wait time'
            ]
        },
        // Section 12: Professional Dispatcher Insights
        dispatcherInsights: [
            `In ${formattedName}, timing is everything. Book outbound loads early in the week when rates are typically 10-15% higher.`,
            `The ${majorCities[0] || 'major metro'} area sees the highest load volume, but don't ignore secondary markets - they often offer better rates with less competition.`,
            `Weather patterns in ${formattedName} can create sudden rate spikes. Monitor forecasts and position yourself ahead of storms for premium rates.`,
            `Backhaul opportunities are strongest on routes connecting ${formattedName} to neighboring states. Plan your positioning accordingly.`,
            `Many brokers in ${formattedName} prefer working with dispatchers who understand local regulations. Build relationships with regional brokers.`,
            `Peak booking times in ${formattedName} are typically 6-9 AM. Have your truck positioned and ready to accept loads during these hours.`,
            `The ${keyIndustries[0] || 'primary industry'} sector drives significant freight volume. Understanding their shipping patterns gives you a competitive edge.`,
            `Don't overlook smaller lanes within ${formattedName}. While major routes get attention, secondary routes often have less competition and better rates.`
        ],
        // Section 13: FAQ
        faq: [
            {
                question: `Do I need state authority to operate in ${formattedName}?`,
                answer: `Yes, you need proper authority to operate in ${formattedName}. This typically includes USDOT number, MC number, and state-specific permits. Some states require additional registrations. Consult with a compliance expert to ensure you have all necessary authority before operating in ${formattedName}.`
            },
            {
                question: `What insurance is required for trucking in ${formattedName}?`,
                answer: `Minimum insurance requirements include primary liability coverage (typically $750,000-$1,000,000), cargo insurance, and physical damage coverage. ${formattedName} may have additional requirements depending on the type of freight you're hauling. Always verify current insurance requirements with your insurance provider and state authorities.`
            },
            {
                question: `What pays best in ${formattedName}?`,
                answer: `Premium rates in ${formattedName} typically come from specialized freight including refrigerated loads, flatbed freight, and time-sensitive deliveries. The ${keyIndustries[0] || 'primary industry'} sector often offers competitive rates. Outbound loads from major distribution hubs also command premium rates.`
            },
            {
                question: `Is ${formattedName} good for new owner operators?`,
                answer: `${formattedName} offers opportunities for new owner operators, especially with strong freight volume and diverse industries. However, competition can be high in major metro areas. New operators should focus on building relationships with reliable brokers, understanding local regulations, and starting with established lanes before expanding.`
            },
            {
                question: `What are the best lanes from ${formattedName}?`,
                answer: `Top lanes from ${formattedName} include routes to major distribution hubs in neighboring states, cross-country routes to high-demand markets, and lanes connecting to major ports. The ${majorCities[0] || 'primary metro'} area typically has the highest volume of outbound freight.`
            },
            {
                question: `How do I find loads in ${formattedName}?`,
                answer: `Load finding in ${formattedName} involves using load boards, building relationships with brokers, working with dispatchers, and understanding peak booking times. Major load boards like DAT, Truckstop.com, and 123Loadboard have strong coverage in ${formattedName}. Many successful operators also work with professional dispatchers who have established broker relationships.`
            },
            {
                question: `What are the seasonal trends in ${formattedName}?`,
                answer: `${formattedName} experiences seasonal variations based on industry activity, weather patterns, and commodity movements. Generally, Q2 and Q3 see stronger rates due to increased freight volume. Q1 can be slower, while Q4 often sees peak activity. Understanding these patterns helps with strategic planning and rate negotiation.`
            },
            {
                question: `What permits do I need for ${formattedName}?`,
                answer: `Permit requirements in ${formattedName} depend on your operation type. Standard operations require USDOT and MC numbers. Oversized/overweight loads, hazardous materials, and special routes may require additional permits. Some states have specific fuel tax permits or temporary registration requirements. Always verify current requirements before operating.`
            }
        ],
        heroImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672055/pexels-alban-mehmeti-184979123-13682891_d93x7i.jpg',
        contentImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg',
        metaTitle: `${formattedName} Truck Dispatch Services | Grow Trucking`,
        metaDescription: `Professional truck dispatch services for ${formattedName} routes. Connect with high-paying loads across ${formattedName} and nationwide. Expert dispatch team, 24/7 support.`,
        keywords: [
            `${formattedName} truck dispatch`,
            `${abbreviation} freight dispatch`,
            `${formattedName} trucking`,
            `${formattedName} dispatch services`
        ],
        ctaHeadline: `Start Dispatching in ${formattedName} Today`,
        ctaDescription: `Join hundreds of carriers maximizing their revenue with our ${formattedName} dispatch services. Get connected with premium loads and expert support.`,
        serviceType: 'State-Specific Truck Dispatch',
        areaServed: `${formattedName}, United States`,
        lanes: laneEntities
    };
}

// State and lane data
const stateLaneData = {
    'CALIFORNIA': ['Los Angeles→Dallas', 'Los Angeles→Phoenix', 'Oakland→Seattle', 'Fresno→Denver', 'Los Angeles→Las Vegas', 'Sacramento→Portland', 'Los Angeles→Atlanta', 'Ontario→Chicago', 'San Diego→Albuquerque', 'Stockton→Salt Lake City', 'Los Angeles→Houston', 'Bakersfield→Kansas City', 'San Francisco→Minneapolis', 'Long Beach→Memphis', 'Riverside→El Paso'],
    'TEXAS': ['Dallas→Atlanta', 'Houston→Chicago', 'Austin→Los Angeles', 'San Antonio→Phoenix', 'El Paso→Los Angeles', 'Dallas→Memphis', 'Houston→Miami', 'Laredo→Dallas', 'Fort Worth→Denver', 'Corpus Christi→New Orleans', 'Dallas→Charlotte', 'Houston→Kansas City', 'Brownsville→San Antonio', 'Midland→Houston', 'Dallas→Nashville'],
    'ILLINOIS': ['Chicago→Dallas', 'Chicago→Atlanta', 'Chicago→Los Angeles', 'Chicago→Memphis', 'Chicago→Charlotte', 'Chicago→Indianapolis', 'Chicago→Columbus', 'Chicago→Kansas City', 'Chicago→Nashville', 'Chicago→Detroit', 'Chicago→Minneapolis', 'Chicago→Milwaukee', 'Chicago→Cincinnati', 'Chicago→St. Louis', 'Chicago→Phoenix'],
    'FLORIDA': ['Miami→Atlanta', 'Orlando→Houston', 'Jacksonville→Chicago', 'Tampa→Dallas', 'Miami→Charlotte', 'Orlando→Nashville', 'Jacksonville→Memphis', 'Tampa→Atlanta', 'Miami→Houston', 'Orlando→Dallas', 'Jacksonville→Atlanta', 'Tampa→Charlotte', 'Miami→Dallas', 'Orlando→Chicago', 'Jacksonville→Houston'],
    'GEORGIA': ['Atlanta→Dallas', 'Atlanta→Chicago', 'Atlanta→Miami', 'Atlanta→Houston', 'Atlanta→Charlotte', 'Atlanta→Nashville', 'Atlanta→Jacksonville', 'Savannah→Dallas', 'Atlanta→Memphis', 'Atlanta→Indianapolis', 'Atlanta→Orlando', 'Atlanta→Philadelphia', 'Savannah→Chicago', 'Atlanta→Detroit', 'Atlanta→New Orleans'],
    'PENNSYLVANIA': ['Philadelphia→Chicago', 'Pittsburgh→Atlanta', 'Harrisburg→Dallas', 'Philadelphia→Charlotte', 'Allentown→Atlanta', 'Pittsburgh→Houston', 'Philadelphia→Miami', 'Harrisburg→Indianapolis', 'Pittsburgh→Detroit', 'Allentown→Columbus', 'Philadelphia→Nashville', 'Pittsburgh→Memphis', 'Harrisburg→Chicago', 'Philadelphia→Dallas', 'Pittsburgh→Charlotte'],
    'OHIO': ['Columbus→Chicago', 'Cleveland→Detroit', 'Cincinnati→Nashville', 'Columbus→Atlanta', 'Dayton→Dallas', 'Cleveland→Chicago', 'Cincinnati→Houston', 'Columbus→Charlotte', 'Dayton→Indianapolis', 'Cleveland→Memphis', 'Columbus→Philadelphia', 'Cincinnati→Atlanta', 'Cleveland→Minneapolis', 'Columbus→Detroit', 'Dayton→Chicago'],
    'NORTH CAROLINA': ['Charlotte→Chicago', 'Raleigh→Atlanta', 'Greensboro→Dallas', 'Charlotte→Houston', 'Charlotte→Philadelphia', 'Raleigh→Chicago', 'Greensboro→Atlanta', 'Charlotte→Nashville', 'Raleigh→Dallas', 'Greensboro→Houston', 'Charlotte→Memphis', 'Raleigh→Indianapolis', 'Greensboro→Charlotte', 'Charlotte→Detroit', 'Raleigh→Columbus'],
    'ARIZONA': ['Phoenix→Los Angeles', 'Phoenix→Dallas', 'Tucson→Houston', 'Phoenix→Chicago', 'Phoenix→Denver', 'Tucson→Los Angeles', 'Phoenix→Atlanta', 'Phoenix→Salt Lake City', 'Tucson→Dallas', 'Phoenix→Kansas City', 'Phoenix→Memphis', 'Tucson→Chicago', 'Phoenix→Indianapolis', 'Phoenix→Charlotte', 'Tucson→Atlanta'],
    'WASHINGTON': ['Seattle→Los Angeles', 'Tacoma→Dallas', 'Spokane→Chicago', 'Seattle→Denver', 'Tacoma→Atlanta', 'Seattle→Houston', 'Spokane→Dallas', 'Seattle→Phoenix', 'Tacoma→Chicago', 'Spokane→Minneapolis', 'Seattle→Kansas City', 'Tacoma→Memphis', 'Seattle→Indianapolis', 'Spokane→Atlanta', 'Tacoma→Charlotte'],
    'TENNESSEE': ['Nashville→Chicago', 'Memphis→Dallas', 'Nashville→Atlanta', 'Memphis→Houston', 'Nashville→Charlotte', 'Memphis→Indianapolis', 'Nashville→Detroit', 'Memphis→Kansas City', 'Nashville→Philadelphia', 'Memphis→Chicago', 'Nashville→Columbus', 'Memphis→Atlanta', 'Nashville→Dallas', 'Memphis→Charlotte', 'Nashville→Memphis'],
    'INDIANA': ['Indianapolis→Chicago', 'Indianapolis→Dallas', 'Indianapolis→Atlanta', 'Indianapolis→Charlotte', 'Indianapolis→Houston', 'Indianapolis→Detroit', 'Indianapolis→Columbus', 'Indianapolis→Memphis', 'Indianapolis→Kansas City', 'Indianapolis→Philadelphia', 'Indianapolis→Nashville', 'Indianapolis→Minneapolis', 'Indianapolis→St. Louis', 'Indianapolis→Phoenix', 'Indianapolis→Denver'],
    'MICHIGAN': ['Detroit→Chicago', 'Detroit→Dallas', 'Detroit→Atlanta', 'Detroit→Charlotte', 'Detroit→Houston', 'Detroit→Columbus', 'Detroit→Indianapolis', 'Detroit→Nashville', 'Detroit→Memphis', 'Detroit→Kansas City', 'Detroit→Philadelphia', 'Detroit→Minneapolis', 'Detroit→St. Louis', 'Detroit→Phoenix', 'Detroit→Denver'],
    'NEW JERSEY': ['Newark→Chicago', 'Newark→Atlanta', 'Newark→Dallas', 'Newark→Charlotte', 'Newark→Houston', 'Newark→Columbus', 'Newark→Detroit', 'Newark→Memphis', 'Newark→Indianapolis', 'Newark→Nashville', 'Newark→Miami', 'Newark→Kansas City', 'Newark→St. Louis', 'Newark→Phoenix', 'Newark→Denver'],
    'WISCONSIN': ['Milwaukee→Chicago', 'Milwaukee→Dallas', 'Milwaukee→Atlanta', 'Milwaukee→Charlotte', 'Milwaukee→Houston', 'Milwaukee→Detroit', 'Milwaukee→Columbus', 'Milwaukee→Indianapolis', 'Milwaukee→Memphis', 'Milwaukee→Kansas City', 'Milwaukee→Nashville', 'Milwaukee→Philadelphia', 'Milwaukee→Minneapolis', 'Milwaukee→St. Louis', 'Milwaukee→Denver'],
    'MINNESOTA': ['Minneapolis→Chicago', 'Minneapolis→Dallas', 'Minneapolis→Atlanta', 'Minneapolis→Charlotte', 'Minneapolis→Houston', 'Minneapolis→Detroit', 'Minneapolis→Columbus', 'Minneapolis→Indianapolis', 'Minneapolis→Memphis', 'Minneapolis→Kansas City', 'Minneapolis→Nashville', 'Minneapolis→Philadelphia', 'Minneapolis→St. Louis', 'Minneapolis→Phoenix', 'Minneapolis→Denver'],
    'COLORADO': ['Denver→Los Angeles', 'Denver→Dallas', 'Denver→Chicago', 'Denver→Atlanta', 'Denver→Houston', 'Denver→Phoenix', 'Denver→Kansas City', 'Denver→Indianapolis', 'Denver→Memphis', 'Denver→Charlotte', 'Denver→Columbus', 'Denver→Detroit', 'Denver→Minneapolis', 'Denver→St. Louis', 'Denver→Seattle'],
    'OREGON': ['Portland→Los Angeles', 'Portland→Dallas', 'Portland→Chicago', 'Portland→Atlanta', 'Portland→Houston', 'Portland→Phoenix', 'Portland→Denver', 'Portland→Kansas City', 'Portland→Memphis', 'Portland→Indianapolis', 'Portland→Charlotte', 'Portland→Columbus', 'Portland→Detroit', 'Portland→Minneapolis', 'Portland→St. Louis'],
    'KENTUCKY': ['Louisville→Chicago', 'Louisville→Dallas', 'Louisville→Atlanta', 'Louisville→Houston', 'Louisville→Charlotte', 'Louisville→Indianapolis', 'Louisville→Columbus', 'Louisville→Memphis', 'Louisville→Kansas City', 'Louisville→Detroit', 'Louisville→Nashville', 'Louisville→Philadelphia', 'Louisville→Minneapolis', 'Louisville→St. Louis', 'Louisville→Denver'],
    'LOUISIANA': ['New Orleans→Dallas', 'Baton Rouge→Houston', 'New Orleans→Atlanta', 'Baton Rouge→Chicago', 'New Orleans→Charlotte', 'Baton Rouge→Memphis', 'New Orleans→Nashville', 'Baton Rouge→Indianapolis', 'New Orleans→Kansas City', 'Baton Rouge→Detroit', 'New Orleans→Columbus', 'Baton Rouge→Philadelphia', 'New Orleans→Minneapolis', 'Baton Rouge→St. Louis', 'New Orleans→Phoenix'],
    'ALABAMA': ['Birmingham→Chicago', 'Birmingham→Dallas', 'Birmingham→Atlanta', 'Birmingham→Houston', 'Birmingham→Charlotte', 'Birmingham→Memphis', 'Birmingham→Nashville', 'Birmingham→Indianapolis', 'Birmingham→Kansas City', 'Birmingham→Detroit', 'Birmingham→Columbus', 'Birmingham→Philadelphia', 'Birmingham→Minneapolis', 'Birmingham→St. Louis', 'Birmingham→Phoenix'],
    'VIRGINIA': ['Richmond→Chicago', 'Richmond→Dallas', 'Richmond→Atlanta', 'Richmond→Houston', 'Richmond→Charlotte', 'Richmond→Indianapolis', 'Richmond→Columbus', 'Richmond→Memphis', 'Richmond→Kansas City', 'Richmond→Detroit', 'Richmond→Nashville', 'Richmond→Philadelphia', 'Richmond→Minneapolis', 'Richmond→St. Louis', 'Richmond→Phoenix'],
    'MISSOURI': ['St. Louis→Chicago', 'Kansas City→Dallas', 'St. Louis→Atlanta', 'Kansas City→Houston', 'St. Louis→Charlotte', 'Kansas City→Indianapolis', 'St. Louis→Columbus', 'Kansas City→Memphis', 'St. Louis→Detroit', 'Kansas City→Nashville', 'St. Louis→Philadelphia', 'Kansas City→Minneapolis', 'St. Louis→Phoenix', 'Kansas City→Denver', 'St. Louis→Los Angeles'],
    'OKLAHOMA': ['Oklahoma City→Dallas', 'Tulsa→Chicago', 'Oklahoma City→Atlanta', 'Tulsa→Houston', 'Oklahoma City→Charlotte', 'Tulsa→Indianapolis', 'Oklahoma City→Columbus', 'Tulsa→Memphis', 'Oklahoma City→Kansas City', 'Tulsa→Detroit', 'Oklahoma City→Nashville', 'Tulsa→Philadelphia', 'Oklahoma City→Minneapolis', 'Tulsa→St. Louis', 'Oklahoma City→Phoenix'],
    'KANSAS': ['Wichita→Dallas', 'Kansas City→Chicago', 'Wichita→Atlanta', 'Kansas City→Houston', 'Wichita→Charlotte', 'Kansas City→Indianapolis', 'Wichita→Columbus', 'Kansas City→Memphis', 'Wichita→Detroit', 'Kansas City→Nashville', 'Wichita→Philadelphia', 'Kansas City→Minneapolis', 'Wichita→St. Louis', 'Kansas City→Denver', 'Wichita→Phoenix'],
    'SOUTH CAROLINA': ['Charleston→Chicago', 'Columbia→Dallas', 'Charleston→Atlanta', 'Columbia→Houston', 'Charleston→Charlotte', 'Columbia→Indianapolis', 'Charleston→Columbus', 'Columbia→Memphis', 'Charleston→Kansas City', 'Columbia→Detroit', 'Charleston→Nashville', 'Columbia→Philadelphia', 'Charleston→Minneapolis', 'Columbia→St. Louis', 'Charleston→Phoenix'],
    'IOWA': ['Des Moines→Chicago', 'Cedar Rapids→Dallas', 'Des Moines→Atlanta', 'Cedar Rapids→Houston', 'Des Moines→Charlotte', 'Cedar Rapids→Indianapolis', 'Des Moines→Columbus', 'Cedar Rapids→Memphis', 'Des Moines→Kansas City', 'Cedar Rapids→Detroit', 'Des Moines→Nashville', 'Cedar Rapids→Philadelphia', 'Des Moines→Minneapolis', 'Cedar Rapids→St. Louis', 'Des Moines→Denver'],
    'ARKANSAS': ['Little Rock→Dallas', 'Fayetteville→Chicago', 'Little Rock→Atlanta', 'Fayetteville→Houston', 'Little Rock→Charlotte', 'Fayetteville→Indianapolis', 'Little Rock→Columbus', 'Fayetteville→Memphis', 'Little Rock→Kansas City', 'Fayetteville→Detroit', 'Little Rock→Nashville', 'Fayetteville→Philadelphia', 'Little Rock→Minneapolis', 'Fayetteville→St. Louis', 'Little Rock→Phoenix'],
    'MARYLAND': ['Baltimore→Chicago', 'Baltimore→Dallas', 'Baltimore→Atlanta', 'Baltimore→Houston', 'Baltimore→Charlotte', 'Baltimore→Indianapolis', 'Baltimore→Columbus', 'Baltimore→Memphis', 'Baltimore→Kansas City', 'Baltimore→Detroit', 'Baltimore→Nashville', 'Baltimore→Philadelphia', 'Baltimore→Minneapolis', 'Baltimore→St. Louis', 'Baltimore→Phoenix'],
    'MISSISSIPPI': ['Jackson→Dallas', 'Gulfport→Chicago', 'Jackson→Atlanta', 'Gulfport→Houston', 'Jackson→Charlotte', 'Gulfport→Indianapolis', 'Jackson→Columbus', 'Gulfport→Memphis', 'Jackson→Kansas City', 'Gulfport→Detroit', 'Jackson→Nashville', 'Gulfport→Philadelphia', 'Jackson→Minneapolis', 'Gulfport→St. Louis', 'Jackson→Phoenix'],
    'NEVADA': ['Las Vegas→Los Angeles', 'Reno→Dallas', 'Las Vegas→Chicago', 'Reno→Atlanta', 'Las Vegas→Houston', 'Reno→Phoenix', 'Las Vegas→Denver', 'Reno→Kansas City', 'Las Vegas→Memphis', 'Reno→Indianapolis', 'Las Vegas→Charlotte', 'Reno→Columbus', 'Las Vegas→Detroit', 'Reno→Minneapolis', 'Las Vegas→St. Louis'],
    'NEW MEXICO': ['Albuquerque→Dallas', 'Albuquerque→Los Angeles', 'Albuquerque→Chicago', 'Albuquerque→Atlanta', 'Albuquerque→Houston', 'Albuquerque→Phoenix', 'Albuquerque→Denver', 'Albuquerque→Kansas City', 'Albuquerque→Memphis', 'Albuquerque→Indianapolis', 'Albuquerque→Charlotte', 'Albuquerque→Columbus', 'Albuquerque→Detroit', 'Albuquerque→Minneapolis', 'Albuquerque→St. Louis'],
    'UTAH': ['Salt Lake City→Los Angeles', 'Salt Lake City→Dallas', 'Salt Lake City→Chicago', 'Salt Lake City→Atlanta', 'Salt Lake City→Houston', 'Salt Lake City→Phoenix', 'Salt Lake City→Denver', 'Salt Lake City→Kansas City', 'Salt Lake City→Memphis', 'Salt Lake City→Indianapolis', 'Salt Lake City→Charlotte', 'Salt Lake City→Columbus', 'Salt Lake City→Detroit', 'Salt Lake City→Minneapolis', 'Salt Lake City→St. Louis'],
    'CONNECTICUT': ['Hartford→Chicago', 'Hartford→Dallas', 'Hartford→Atlanta', 'Hartford→Houston', 'Hartford→Charlotte', 'Hartford→Indianapolis', 'Hartford→Columbus', 'Hartford→Memphis', 'Hartford→Kansas City', 'Hartford→Detroit', 'Hartford→Nashville', 'Hartford→Philadelphia', 'Hartford→Minneapolis', 'Hartford→St. Louis', 'Hartford→Phoenix'],
    'NEBRASKA': ['Omaha→Chicago', 'Omaha→Dallas', 'Omaha→Atlanta', 'Omaha→Houston', 'Omaha→Charlotte', 'Omaha→Indianapolis', 'Omaha→Columbus', 'Omaha→Memphis', 'Omaha→Kansas City', 'Omaha→Detroit', 'Omaha→Nashville', 'Omaha→Philadelphia', 'Omaha→Minneapolis', 'Omaha→St. Louis', 'Omaha→Denver'],
    'IDAHO': ['Boise→Los Angeles', 'Boise→Dallas', 'Boise→Chicago', 'Boise→Atlanta', 'Boise→Houston', 'Boise→Phoenix', 'Boise→Denver', 'Boise→Kansas City', 'Boise→Memphis', 'Boise→Indianapolis', 'Boise→Charlotte', 'Boise→Columbus', 'Boise→Detroit', 'Boise→Minneapolis', 'Boise→St. Louis'],
    'MASSACHUSETTS': ['Boston→Chicago', 'Boston→Dallas', 'Boston→Atlanta', 'Boston→Houston', 'Boston→Charlotte', 'Boston→Indianapolis', 'Boston→Columbus', 'Boston→Memphis', 'Boston→Kansas City', 'Boston→Detroit', 'Boston→Nashville', 'Boston→Philadelphia', 'Boston→Minneapolis', 'Boston→St. Louis', 'Boston→Phoenix'],
    'WEST VIRGINIA': ['Charleston→Chicago', 'Charleston→Dallas', 'Charleston→Atlanta', 'Charleston→Houston', 'Charleston→Charlotte', 'Charleston→Indianapolis', 'Charleston→Columbus', 'Charleston→Memphis', 'Charleston→Kansas City', 'Charleston→Detroit', 'Charleston→Nashville', 'Charleston→Philadelphia', 'Charleston→Minneapolis', 'Charleston→St. Louis', 'Charleston→Phoenix'],
    'MAINE': ['Portland→Chicago', 'Portland→Dallas', 'Portland→Atlanta', 'Portland→Houston', 'Portland→Charlotte', 'Portland→Indianapolis', 'Portland→Columbus', 'Portland→Memphis', 'Portland→Kansas City', 'Portland→Detroit', 'Portland→Nashville', 'Portland→Philadelphia', 'Portland→Minneapolis', 'Portland→St. Louis', 'Portland→Phoenix'],
    'MONTANA': ['Billings→Chicago', 'Billings→Dallas', 'Billings→Atlanta', 'Billings→Houston', 'Billings→Charlotte', 'Billings→Indianapolis', 'Billings→Columbus', 'Billings→Memphis', 'Billings→Kansas City', 'Billings→Detroit', 'Billings→Nashville', 'Billings→Philadelphia', 'Billings→Minneapolis', 'Billings→St. Louis', 'Billings→Denver'],
    'RHODE ISLAND': ['Providence→Chicago', 'Providence→Dallas', 'Providence→Atlanta', 'Providence→Houston', 'Providence→Charlotte', 'Providence→Indianapolis', 'Providence→Columbus', 'Providence→Memphis', 'Providence→Kansas City', 'Providence→Detroit', 'Providence→Nashville', 'Providence→Philadelphia', 'Providence→Minneapolis', 'Providence→St. Louis', 'Providence→Phoenix'],
    'NORTH DAKOTA': ['Fargo→Chicago', 'Fargo→Dallas', 'Fargo→Atlanta', 'Fargo→Houston', 'Fargo→Charlotte', 'Fargo→Indianapolis', 'Fargo→Columbus', 'Fargo→Memphis', 'Fargo→Kansas City', 'Fargo→Detroit', 'Fargo→Nashville', 'Fargo→Philadelphia', 'Fargo→Minneapolis', 'Fargo→St. Louis', 'Fargo→Denver'],
    'SOUTH DAKOTA': ['Sioux Falls→Chicago', 'Sioux Falls→Dallas', 'Sioux Falls→Atlanta', 'Sioux Falls→Houston', 'Sioux Falls→Charlotte', 'Sioux Falls→Indianapolis', 'Sioux Falls→Columbus', 'Sioux Falls→Memphis', 'Sioux Falls→Kansas City', 'Sioux Falls→Detroit', 'Sioux Falls→Nashville', 'Sioux Falls→Philadelphia', 'Sioux Falls→Minneapolis', 'Sioux Falls→St. Louis', 'Sioux Falls→Denver'],
    'DELAWARE': ['Wilmington→Chicago', 'Wilmington→Dallas', 'Wilmington→Atlanta', 'Wilmington→Houston', 'Wilmington→Charlotte', 'Wilmington→Indianapolis', 'Wilmington→Columbus', 'Wilmington→Memphis', 'Wilmington→Kansas City', 'Wilmington→Detroit', 'Wilmington→Nashville', 'Wilmington→Philadelphia', 'Wilmington→Minneapolis', 'Wilmington→St. Louis', 'Wilmington→Phoenix'],
    'VERMONT': ['Burlington→Chicago', 'Burlington→Dallas', 'Burlington→Atlanta', 'Burlington→Houston', 'Burlington→Charlotte', 'Burlington→Indianapolis', 'Burlington→Columbus', 'Burlington→Memphis', 'Burlington→Kansas City', 'Burlington→Detroit', 'Burlington→Nashville', 'Burlington→Philadelphia', 'Burlington→Minneapolis', 'Burlington→St. Louis', 'Burlington→Phoenix'],
    'NEW HAMPSHIRE': ['Manchester→Chicago', 'Manchester→Dallas', 'Manchester→Atlanta', 'Manchester→Houston', 'Manchester→Charlotte', 'Manchester→Indianapolis', 'Manchester→Columbus', 'Manchester→Memphis', 'Manchester→Kansas City', 'Manchester→Detroit', 'Manchester→Nashville', 'Manchester→Philadelphia', 'Manchester→Minneapolis', 'Manchester→St. Louis', 'Manchester→Phoenix'],
    'WYOMING': ['Cheyenne→Chicago', 'Cheyenne→Dallas', 'Cheyenne→Atlanta', 'Cheyenne→Houston', 'Cheyenne→Charlotte', 'Cheyenne→Indianapolis', 'Cheyenne→Columbus', 'Cheyenne→Memphis', 'Cheyenne→Kansas City', 'Cheyenne→Detroit', 'Cheyenne→Nashville', 'Cheyenne→Philadelphia', 'Cheyenne→Minneapolis', 'Cheyenne→St. Louis', 'Cheyenne→Denver'],
    'ALASKA': ['Anchorage→Seattle', 'Anchorage→Los Angeles', 'Anchorage→Portland', 'Anchorage→Phoenix', 'Anchorage→Denver', 'Anchorage→Chicago', 'Anchorage→Dallas', 'Anchorage→Houston', 'Anchorage→Atlanta', 'Anchorage→Minneapolis', 'Anchorage→Kansas City', 'Anchorage→Memphis', 'Anchorage→Indianapolis', 'Anchorage→Charlotte', 'Anchorage→Detroit'],
    'HAWAII': ['Honolulu→Los Angeles', 'Honolulu→Seattle', 'Honolulu→Portland', 'Honolulu→Phoenix', 'Honolulu→Denver', 'Honolulu→Chicago', 'Honolulu→Dallas', 'Honolulu→Houston', 'Honolulu→Atlanta', 'Honolulu→Minneapolis', 'Honolulu→Kansas City', 'Honolulu→Memphis', 'Honolulu→Indianapolis', 'Honolulu→Charlotte', 'Honolulu→Detroit']
};

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '..', 'data', 'states');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Generate JSON files for each state
Object.entries(stateLaneData).forEach(([stateName, lanes]) => {
    const stateEntity = generateStateEntity(stateName, lanes);
    const filename = `${stateEntity.slug}.json`;
    const filepath = path.join(dataDir, filename);

    fs.writeFileSync(filepath, JSON.stringify(stateEntity, null, 2), 'utf8');
    console.log(`Generated: ${filename}`);
});

console.log(`\n✅ Generated ${Object.keys(stateLaneData).length} state JSON files in ${dataDir}`);
