import React from 'react'
import { data} from '../../assets';
import { Link } from 'react-router-dom';
import Title from './Title';
import { motion } from 'framer-motion';
function Services() {
    return (
        <div className="light-grey">
            <Title children='SERVICES WE OFFER'></Title>
            <div className="service-cover">
                { data.services && data.services.map(service => (
                        <motion.div className="service" key={service.serviceName}
                            whileHover={{
                                y: -20
                            }}
                        >
                            <Link to="/login">
                                <img src={service.serviceImage} alt={service.serviceName}/>
                                <h2>{service.serviceName}</h2>
                            </Link>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services