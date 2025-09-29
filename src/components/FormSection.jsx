import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";


 

const FormSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden gradient-bg hero-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <Badge
              variant="gradient"
              className="mb-6 py-1 px-4 text-xs font-medium uppercase tracking-wide"
            >
              Aprovecha
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              Tu Corresponsal Bancario Está Aquí{" "}
              <span className="gradient-text">Bemovil</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              No dejes que tu negocio pierda clientes. Recupera tu servicio de corresponsalía de forma fácil y sin fallas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 w-full sm:w-auto"
              >
                Comienza ahora sin costo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gradient-border w-full sm:w-auto"
              >
                Agendar Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-indigo-400 mr-2" />
                <span className="text-sm text-muted-foreground">Vinculación Gratuita</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-indigo-400 mr-2" />
                <span className="text-sm text-muted-foreground">0 Costo Transaccional</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-indigo-400 mr-2" />
                <span className="text-sm text-muted-foreground">Cancela Cuando Quieras</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Columna Derecha: Formulario Embebido */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Contenedor para el iframe con estilo de tarjeta */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-2 border border-white/10 overflow-hidden">
              <iframe 
                  className="w-full h-[480px] rounded-lg"
                  src="https://5253161e.sibforms.com/serve/MUIFAJowyucdE88RnvKACSSuVSfms7_B1TZVqjAedQGDOsMDiUhE9PJJ0vx52mEdgEx59hQA-8-HPMsIHktzNMpweW_8ueDz0PzJOfvaBI15s4FrOMMeGrinplpeuSjj-alde3ElhhW00Qhty02ud-LbWUQJIN197ByLLaTHRlHmWzVl47Grs5AryLC7iTJWZ53CqtByjsmxuTdE" 
                  frameBorder="0" 
                  scrolling="auto" 
                  allowFullScreen
                  style={{display: 'block'}}
              >
              </iframe>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;