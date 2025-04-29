export const capsulesSchema = {
    data: {
        type: 'object',
        properties: {
            capsules: {
                type: 'array',
                items: {
                    id:         {type: 'string'},
                    landing:    {type: 'number'},
                    missions: {
                        type: 'object',
                        properties: {
                            flight: {type: 'number'},
                            name:   {type: 'string'}
                        }
                    },
                    dragon: {
                        type: 'object',
                        properties: {
                            id:             {type: 'number'},
                            name:           {type: 'string'},
                            description:    {type: 'string'}
                        }
                    },
                    status:{type: 'string'}
                }
            }
        }
    }
}

export const capsuleByIdSchema = {
    data:{
        type: 'object',
        properties: {
            capsule: {
                type: 'object',
                properties: {
                    id:         {type: 'string'},
                    landings:   {type: 'number'},
                    original_launch:    {type: 'string'},
                    reuse_count:        {type: 'number'},
                    status:             {type: 'string'},
                    type:               {type: 'string'},
                    missions:{
                        type: 'object',
                        properties: {
                            flight: {type: 'string'},
                            name:   {type: 'string'}
                        }
                    }
                }
            }
        }
    }
}

export const companySchema = {
    data: {
        type: "object",
        properties: {
            company: {
                type: "object",
                properties: {
                    ceo:            { type: "string" },
                    employees:      { type: "integer" },
                    founder:        { type: "string" },
                    launch_sites:   { type: "integer" },
                    name:           { type: "string" },
                    summary:        { type: "string" },
                    valuation:      { type: "integer" },
                    vehicles:       { type: "integer" },
                    coo:            { type: "string" },
                    cto:            { type: "string" },
                    cto_propulsion: { type: "string" },
                    founded:        { type: "integer" },
                    test_sites:     { type: "integer" }
                }
            }
        }
    }
}

export const dragonsSchema = {
    data: {
        type: "object",
        properties: {
            dragons: {
                type: "array",
                items: {
                type: "object",
                properties: {
                    active:         { type: "boolean" },
                    crew_capacity:  { type: "integer" },
                    description:    { type: "string" },
                    diameter: {
                    type: "object",
                    properties: {
                        feet:       { type: "number" },
                        meters:     { type: "number" }
                    }
                    },
                    dry_mass_kg: { type: "integer" },
                    dry_mass_lb: { type: "integer" },
                    first_flight:{ type: "string" },
                    heat_shield: {
                    type: "object",
                    properties: {
                        dev_partner:    { type: "string" },
                        material:       { type: "string" },
                        size_meters:    { type: "number" },
                        temp_degrees:   { type: "integer" }
                    }
                    },
                    height_w_trunk: {
                    type: "object",
                    properties: {
                        feet:   { type: "number" },
                        meters: { type: "number" }
                    }
                    },
                    id: { type: "string" },
                    launch_payload_mass: {
                    type: "object",
                    properties: {
                        kg: { type: "integer" },
                        lb: { type: "integer" }
                    }
                    },
                    launch_payload_vol: {
                    type: "object",
                    properties: {
                        cubic_feet:     { type: "number" },
                        cubic_meters:   { type: "number" }
                    }
                    },
                    name: { type: "string" },
                    orbit_duration_yr: { type: "integer" },
                    pressurized_capsule: {
                    type: "object",
                    properties: {
                        payload_volume: {
                        type: "object",
                        properties: {
                            cubic_feet:     { type: "number" },
                            cubic_meters:   { type: "number" }
                        }
                        }
                    }
                    },
                    return_payload_mass: {
                    type: "object",
                    properties: {
                        kg: { type: "integer" },
                        lb: { type: "integer" }
                    }
                    },
                    return_payload_vol: {
                    type: "object",
                    properties: {
                        cubic_feet:     { type: "number" },
                        cubic_meters:   { type: "number" }
                    }
                    },
                    sidewall_angle_deg: { type: "integer" },
                    thrusters: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                        amount: { type: "integer" },
                        fuel_1: { type: "string" },
                        fuel_2: { type: "string" },
                        pods:   { type: "integer" },
                        thrust: {
                            type: "object",
                            properties: {
                            kN:     { type: "number" },
                            lbf:    { type: "number" }
                            }
                        },
                        type: { type: "string" }
                        }
                    }
                    },
                    trunk: {
                    type: "object",
                    properties: {
                        cargo: {
                        type: "object",
                        properties: {
                            solar_array:            { type: "integer" },
                            unpressurized_cargo:    { type: "boolean" }
                        }
                        },
                        trunk_volume: {
                        type: "object",
                        properties: {
                            cubic_feet:     { type: "number" },
                            cubic_meters:   { type: "number" }
                        }
                        }
                    }
                    },
                    type:      { type: "string" },
                    wikipedia: { type: "string" }
                }
            }
          }
        }
      }
}