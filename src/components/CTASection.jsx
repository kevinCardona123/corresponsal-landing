
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Listo para hacer <span className="gradient-text">Crecer</span>Tu negocio?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Únase a la red de miles de negocios que ya están aumentando sus ingresos, fidelizando clientes y ofreciendo la corresponsalía bancaria más sencilla del mercado.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              size="lg"
              className="bg-white text-indigo-900 hover:bg-gray-100 border-0 w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById('registro');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              aria-label="Ir al registro"
            >
              Registro Gratuito <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
            >
              Agenda una Reunión
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;
