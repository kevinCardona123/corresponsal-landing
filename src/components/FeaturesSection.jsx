
import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  Users, 
  Clock, 
  Shield, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-indigo-400" />,
    title: "Ventas al Instante",
    description: "Ofrezca el servicio que sus clientes necesitan en segundos. El proceso más rápido para ganar más."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-indigo-400" />,
    title: "Control Total",
    description: "Acceda al historial de sus comisiones y transacciones de forma clara, simple y en tiempo real."
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-400" />,
    title: "Soporte al Alcance",
    description: "Resuelva cualquier duda o inconveniente. Nuestro equipo de soporte está listo para ayudarle en todo momento."
  },
  {
    icon: <Clock className="h-10 w-10 text-indigo-400" />,
    title: "Más Clientes para su Negocio",
    description: "Atraiga a nuevos clientes que buscan un corresponsal bancario y fidelice a los que ya tiene."
  },
  {
    icon: <Shield className="h-10 w-10 text-indigo-400" />,
    title: "Transacciones Seguras",
    description: "Gane tranquilidad. Cada operación está protegida con los más altos estándares de seguridad bancaria."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-indigo-400" />,
    title: "Su Negocio en el Bolsillo",
    description: "Tenga acceso a toda su corresponsalía desde cualquier lugar, con nuestra aplicación móvil optimizada."
  }
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Tu Negocio Vuelve a <span className="gradient-text">Ganar.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Las herramientas que necesitas para recuperar a tus clientes y multiplicar tus ventas.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/30"
            >
              <div className="mb-4 p-3 rounded-lg bg-indigo-500/10 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
