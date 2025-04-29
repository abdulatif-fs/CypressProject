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
export const historySchema = {
    data: {
        type: "object",
        properties: {
        histories: {
            type: "array",
            items: {
            type: "object",
            properties: {
                details:            { type: "string" },
                event_date_unix:    { type: "integer" },
                event_date_utc:     { type: "string" },
                id:                 { type: "string" },
                links: {
                type: "object",
                properties: {
                    article:        { type: ["string", "null"] },
                    reddit:         { type: ["string", "null"] },
                    wikipedia:      { type: ["string", "null"] }
                }
                },
                title:              { type: "string" }
            }
            }
        }
        }
    }
}
export const rocketsSchema = {
    data: {
        type: "object",
        properties: {
        rockets: {
            type: "array",
            items: {
            type: "object",
            properties: {
                active:         { type: "boolean" },
                company:        { type: "string" },
                country:        { type: "string" },
                description:    { type: "string" },
                first_flight:   { type: "string" },
                id:             { type: "string" },
                name:           { type: "string" },
                stages:         { type: "integer" },
                type:           { type: "string" },
                wikipedia:      { type: "string" }
            }
            }
        }
        }
    }
}
export const shipsSchema = {
    data: {
        type: "object",
        properties: {
        ships: {
            type: "array",
            items: {
            type: "object",
            properties: {
                abs:        { type: "integer" },
                active:     { type: "boolean" },
                class:      { type: "integer" },
                course_deg: { type: ["number", "null"] },
                home_port:  { type: "string" },
                id:         { type: "string" },
                image:      { type: "string" },
                imo:        { type: "integer" },
                mmsi:       { type: "integer" },
                model:      { type: ["string", "null"] },
                name:       { type: "string" },
                speed_kn:   { type: ["number", "null"] },
                status:     { type: "string" },
                type:       { type: "string" },
                url:        { type: ["string", "null"] },
                weight_kg:  { type: ["number", "null"] },
                weight_lbs: { type: ["number", "null"] },
                year_built: { type: "integer" }
            }
            }
        }
        }
    }
}
export const coresSchema = {
    data: {
        type: "object",
        properties: {
        cores: {
            type: "array",
            items: {
            type: "object",
            properties: {
                asds_attempts:  { type: "integer" },
                asds_landings:  { type: "integer" },
                block:          { type: ["integer", "null"] },
                id:             { type: "string" },
                original_launch:{ type: ["string", "null"] },
                reuse_count:    { type: "integer" },
                rtls_attempts:  { type: "integer" },
                rtls_landings:  { type: "integer" },
                status:         { type: "string" },
                water_landing:  { type: ["boolean", "null"] }
            }
            }
        }
        }
    }
}