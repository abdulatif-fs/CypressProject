export const capsulesQuery = `
                        query Capsules {
                            capsules {
                                id
                                landings
                                missions {
                                    flight
                                    name
                                }
                                dragon {
                                    id
                                    name
                                    description
                                }
                                status
                            }
                        }`
export const capsuleByIdQuery = `
                        query Capsules($capsuleId: ID!) {
                            capsule(id: $capsuleId) {
                                id
                                landings
                                original_launch
                                reuse_count
                                status
                                type
                            }
                        }`
export const companyQuery = `
                        query Capsules {
                            company {
                                ceo
                                employees
                                founder
                                launch_sites
                                name
                                summary
                                valuation
                                vehicles
                                coo
                                cto
                                cto_propulsion
                                founded
                                test_sites
                            }
                        }`
export const dragonsQuery = `
                        query Capsules {
                            dragons {
                                active
                                crew_capacity
                                description
                                diameter {
                                feet
                                meters
                                }
                                dry_mass_kg
                                dry_mass_lb
                                first_flight
                                heat_shield {
                                dev_partner
                                material
                                size_meters
                                temp_degrees
                                }
                                height_w_trunk {
                                feet
                                meters
                                }
                                id
                                launch_payload_mass {
                                kg
                                lb
                                }
                                launch_payload_vol {
                                cubic_feet
                                cubic_meters
                                }
                                name
                                orbit_duration_yr
                                pressurized_capsule {
                                payload_volume {
                                    cubic_feet
                                    cubic_meters
                                }
                                }
                                return_payload_mass {
                                kg
                                lb
                                }
                                return_payload_vol {
                                cubic_feet
                                cubic_meters
                                }
                                sidewall_angle_deg
                                thrusters {
                                amount
                                fuel_1
                                fuel_2
                                pods
                                thrust {
                                    kN
                                    lbf
                                }
                                type
                                }
                                trunk {
                                cargo {
                                    solar_array
                                    unpressurized_cargo
                                }
                                trunk_volume {
                                    cubic_feet
                                    cubic_meters
                                }
                                }
                                type
                                wikipedia
                            }
                        }`
export const historyQuery = `
                        query Capsules {
                            histories {
                                details
                                event_date_unix
                                event_date_utc
                                id
                                links {
                                article
                                reddit
                                wikipedia
                                }
                                title
                            }
                        }`
export const rokectsQuery = `
                        query Capsules {
                            rockets {
                                active
                                company
                                country
                                description
                                first_flight
                                id
                                name
                                stages
                                type
                                wikipedia
                            }
                        }`
export const shipsQuery = `
                        query Capsules {
                            ships {
                                abs
                                active
                                class
                                course_deg
                                home_port
                                id
                                image
                                imo
                                mmsi
                                model
                                name
                                speed_kn
                                status
                                type
                                url
                                weight_kg
                                weight_lbs
                                year_built
                            }
                        }`
export const coresQuery = `
                        query Capsules {
                            cores {
                                asds_attempts
                                asds_landings
                                block
                                id
                                original_launch
                                reuse_count
                                rtls_attempts
                                rtls_landings
                                status
                                water_landing
                            }
                        }`